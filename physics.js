(function(){
  
  //store the original render function
  var oRender = render;
  
  //save last known timestamp
  var then = Date.now();
  
  
  render = function(now){
    var delta = (now - then)/1000; //compute delta time
    
    var pressure = 101325;
    var temp = 25 +273.15;
    
    //http://en.wikipedia.org/wiki/Hot_air_balloon#Generating_lift
    if(balloon){
      
      if(!balloon.temp){
        balloon.temp = 110 +273.15;
      }
      
      if(!balloon.mass){
        balloon.mass = 150;
      }
      
      if(!balloon.volume){
        balloon.volume = 600;
      }
      
      if(!balloon.vy){
        balloon.vy = 0;
      }
      
      balloon.ay = 9.81*(
        balloon.volume * ( pressure * (balloon.temp-temp) )
        /( 287.058 * temp * balloon.temp * balloon.mass )
      -1);
      
      var velocity = balloon.getLinearVelocity();
      
      velocity.y += balloon.ay*delta;
      if(velocity.y > 100){
        velocity.y = 100;
      }
      if(velocity.y < -100){
        velocity.y = -100;
      }
      
      balloon.setLinearVelocity( velocity );
      
    }
    
    
    
    
    then = now; //save last known timestamp
    oRender(now); //call the original render function
  };
  
  
})();
