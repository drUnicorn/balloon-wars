(function(){

window.debug = true; //logging on/off

function log(){
  if(+debug){ console.log.apply(console,arguments); };
};

function namegen(){ var first = [ "Joe", "Foo", "Iluminati", "YoMama", "Aye", "DuckDuck", "NeedMoreMana", "UWotM8", "Shaddap" ]; var second = ["TheNoscoper", "BlazeIt", "TheMe", "TheGoatRemix", "WereNotKill", "Bar", "ThePinguin"]; return first[ (Math.random()*first.length)|0 ] + second[ (Math.random()*second.length)|0 ]; }

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
  var own  = [];
  var loan = [];
  
  var observers = Map();
  var changes = []; //changes storage
  self.ch = changes;
  
  //set up object observing
  //str arg is a path to observed object
  //eg. "own.0.position"
  function observe(str){
    
    //parse the path
    str = str+"";
    var path = str.split('.');
    var obj = own;
    var i = -1;
    while(++i<path.length){
      if(path[i]===""){ continue; }
      obj = obj[path[i]];
    }
    
    //create the observer function
    var observer = function(chs){
      
      for(chn in chs){
        
        var ch = chs[chn];
        
        //this type of changes is not transmitted
        if(ch.type=="preventExtensions"
         ||ch.type=="reconfigure"
         ||ch.type=="setPrototype"){ return; }
        
        //unobserve a removed object
        if(isObj(ch.oldValue)){
          unobserve(str+"."+ch.name);
        }
        
        var ref = changes; //reflection object
        
        //parse the path
        var i = -1;
        while(++i<path.length){
          var bit = path[i]; //temp store
          if(bit===""){ continue; }
          ref[bit] = ref[bit]||{}; //if !exists then create
          ref = ref[bit];
        }
        
        if(!isObj(obj[ch.name])){
          ref[ch.name] = obj[ch.name]; //copy primitive
        }else{
          if(ch.type=="add"
           ||ch.type=="update")
          {
            //clone object
            ref[ch.name] = clone(
              str+"."+ch.name,
              obj[ch.name]
            );
            
            observe(str+"."+ch.name); //observe object
          }
          
        }
      }
    };
    
    //store the observer for later unobservation
    observers.set(str,observer);
    
    //begin observing
    Object.observe(obj,observer);
    
  };
  
  
  //a helper function
  function isObj( value ){
    
    return typeof value === "object" && value !== null;
    
  };
  
  
  //clone object and observe sub-objects
  function clone(str,obj){
    
    var ref = {};
    
    var keys = Object.keys(obj);
    var i=-1;
    while(++i<keys.length){ //for all keys
      
      var key = keys[i];
      if(!isObj(typeof obj[key])){ //copy primitive
        ref[key] = obj[key];
      }else{
        ref[key] = clone(str+"."+key,obj[key]); //clone...
        observe(str+"."+key); //...and observe
      }
      
    }
    
    return ref;
    
  };
  
  
  function unobserve(str){
    
    //parse the path
    str = str+"";
    var path = str.split('.');
    var obj = own;
    var i = -1;
    while(++i<path.length){
      if(path[i]===""){ continue; }
      obj = obj[path[i]];
    }
    
    //unobserve
    Object.unobserve(
      obj, observers.get(str)
    );
    
    //remove from register
    observers.delete(str);
    
  };
  
  
  function update(source, destination){
    
    var keys = Object.keys(source);
    for(var i in keys){
      
      var key = keys[i];
      
      if(!isObj(source[key])){
        destination[key] = source[key];
      }else{
        typeof isObj(destination[key])||
               (destination[key] = {});
        
        update(source[key],destination[key]);
      }
      
    }
    
  };
  
  
  observe(''); //start observing the "own"
  
  
  self.shareObject = function( obj ){
    own.push(obj);
  };
  
  self.unshareObject = function( obj ){
    var i = own.indexOf(obj);
    if(i>=0){ own[i] = undefined; }
  }
  
  self.objects = loan;
  
  
  function give(){
    return changes.splice(0,Infinity);
  };
  
  function take(data){
    update(data.update, loan);
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
    var data = {update:give(),thread:thread};
    self.connection.send(data);
  };
  
  //incoming msg
  self.connection.on('data',function(data){
    log('Peer: Message: '+data.toSource());
    
    if(data.thread > thread){ //in case of my arrhythmia
      thread = data.thread; //accept new hearthbeat
    }
    if(data.thread == thread){ //if no arrhythmia
      hb(); //continue in hearthbeat
    }
    
    take(data); //update local data
  });
  
  setInterval(function(){
    return;
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
