(function(){

window.debug = true; //logging on/off

function log(){
  if(+debug){ console.log.apply(console,arguments); };
};

function namegen(){ var name = [ "Joe", "Foo", "XXX_Iluminati_XXX", "Noscoper", "YoMama", "TheMe", "Aye", "DuckDuck", "NeedMoreMana", "UWotM8", "Shaddap" ]; name = name[ (Math.random()*name.length)|0 ]; name += "_"+( Math.random()*50 |0 ); return name; }

var online = false;
var players = [];

players.push = function( p ){
  return this[ this.length ] = Mate(p);
};

var peer = new Peer(
  namegen(),
  {key: 'fvz95i90vzp5vcxr'}
);

peer.on('open',function(id){
  online = true;
  log("Peer: Online as: "+id);
});

peer.on('error',function(e){
  log("Peer: Error: "+e);
});

peer.on('connection',function(conn){
  log("New connection: "+conn.peer);
  players.push( conn );
});

function Mate(a){
  
  //class specific
  var self = this;
  if(!(this instanceof Mate)){
    return new Mate(a);
  }
  
  var then; //time of previous beat
  var thread = 0; //increments on cardiac arrhythmia
  
  if(typeof a == "string"){ //passing id to constructor
    
    c = peer.connect(a); //create from id
    self.connection = c;
    
    c.on('open',function(){
      log("New connection: "+c.peer);
      self.id = c.peer;
      hb();
    });
    
  }else{ //channel already created
    
    log("New connection mutated to Mate");
    self.connection = a;
    
  }
  
  
  //shared data arrays
  self.own  = [];
  self.loan = [];
  
  //remember former values
  var owned  = [];
  var loaned = [];
  
  function give(){ //TODO
    var info = {};
    info.move = [];
    info.new = [];
    
    var i = -1;
    while(++i<own.length || i<owned.length){
      if(own[i] !== owned[i]){
        var x = owned.indexOf(own[i]);
        if(x+1){
          if( own[x] == owned[x] ){
            info.new[i] = own[i];
          }else{
            info.move[i] = x;
          }
        }else{
          info.new[i] = own[i];
        }
      }
    }
    
    owned = Array.from(own);
    
    return info;
  };
  
  function take(info){
    //TODO
  };
  
  
  //hearthbeat function
  function hb(){
    if(then){
      self.ping = Date.now() - then; //actually 2*ping
      log('Peer: Ping: '+self.ping);
    }else{
      log('Peer: Init');
    }
    then = Date.now(); //store now for next beat
    
    //share local changes
    var data = give();
    data.thread = thread;
    self.connection.send(data);
  };
  
  //incoming msg
  self.connection.on('data',function(data){
    log('Peer: Message: '+data.toSource());
    
    take(data); //update local data
    
    if(data.thread > thread){ //in case of my arrhythmia
      thread = data.thread; //accept new hearthbeat
    }
    if(data.thread == thread){ //if no arrhythmia
      hb(); //continue in hearthbeat
    }
  });
  
  setInterval(function(){
    
    //check arrhythmia
    if(Date.now() - then > 200){ //max ping 200ms
      thread++; //start a new thread
      hb(); //recover normal hearthbeat
    }
  },50); //check every 50ms
  
  
  self.newThread = function(){
    //manually invoke new thread
    thread++;
    hb();
  };
  
};

window.players = players;
window.peer = peer;

})();
