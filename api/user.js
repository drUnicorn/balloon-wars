window.addEventListener('load', function(){
                    
document.body.requestFullscreen =
 document.body.requestFullscreen ||
 document.body.msRequestFullscreen ||
 document.body.mozRequestFullscreen ||
 document.body.webkitRequestFullscreen;
 
document.body.requestFullscreen();

document.body.requestPointerLock = 
 document.body.requestPointerLock ||
 document.body.msRequestPointerLock ||
 document.body.mozRequestPointerLock ||
 document.body.webkitRequestPointerLock;
 
document.body.requestPointerLock();

document.addEventListener('mousemove',function(e){
 camera.rotation.set(
  camera.rotation.x + e.movementY,
  camera.rotation.y + e.movementX,
  camera.rotation.z 
 );
})

});