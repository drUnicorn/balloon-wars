(function(){
  
  //store the original render function
  var oRender = render;
  
  //save last known timestamp
  var then = Date.now();
  
  
  render = function(now){
    var delta = now - then; //compute delta time
    
    //http://en.wikipedia.org/wiki/Hot_air_balloon#Generating_lift
    if(balloon){
      if(!balloon.temp){
        balloon.temp
      }
    }
    
    
    then = now; //save last known timestamp
    oRender(now); //call the original render function
  };
  
  
})();
