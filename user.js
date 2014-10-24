window.addEventListener('load',function(){
document.body.addEventListener('click', function(){

document.body.requestFullscreen =
 document.body.requestFullscreen ||
 document.body.msRequestFullscreen ||
 document.body.mozRequestFullScreen ||
 document.body.webkitRequestFullscreen;
 
document.body.requestFullscreen();

document.body.requestPointerLock = 
 document.body.requestPointerLock ||
 document.body.msRequestPointerLock ||
 document.body.mozRequestPointerLock ||
 document.body.webkitRequestPointerLock;
 
document.body.requestPointerLock();

var lim = function(n, min, max){
 return n<min ? min : ( n>max ? max : n );
};

var factor = 1/100;
var prevX, prevY;
document.addEventListener('mousemove',function(e){
 
 if(prevX != undefined && prevY != undefined){
  var Δx = prevX - e.clientX
           || -e.movementX
           || -e.mozMovementX
           || -e.webkitMovementX;
  
  var Δy = e.clientY - prevY
           || e.movementY
           || e.mozMovementY
           || e.webkitMovementY;
  
  Δx = Δx|0||0;
  Δy = Δy|0||0;
  
  var min = Math.PI/2;
  var max = Math.PI+min;
  
  camera.rotation.set(
   lim( camera.rotation.x + factor * Δy, min, max ), //Yaw
   camera.rotation.y + factor * Δx,                  //Pitch
   camera.rotation.z //Roll - buggy, ¡no toques!
  );
 }
 
 prevX = e.clientX;
 prevY = e.clientY;
});

});
});
