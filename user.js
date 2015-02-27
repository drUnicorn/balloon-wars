
var mouseX = 0, mouseY = 0;

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
  
  var min = (Math.PI/2);
  var max = (3*Math.PI/2);
  
  mouseX += Δx;
  mouseY = lim( (mouseY + Δy), -(Math.PI*50), (Math.PI*50) );
  
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

document.body.addEventListener('keydown', function(e){
 if(e.keyCode == 32){ //space
  balloon.temp += 5;
 }
 if(e.keyCode == 16){ //lshift
  balloon.temp -= 5;
 }
 if(e.keyCode == 45){ //insert
  var geo = new THREE.SphereGeometry(1, 20, 20);
  var material = new THREE.MeshLambertMaterial( {color: 'blue'} );
  
  var sphere = new Physijs.SphereMesh(geo, material);
  
  sphere.position.set(
    balloon.position.x + Math.sin(camera.rotation.y)*50,
    balloon.position.y + Math.sin(camera.rotation.x)*50,
    balloon.position.z + Math.cos(camera.rotation.y)*50
  );
  
  scene.add(sphere);
  
  sphere.setLinearVelocity( new THREE.Vector3(
    Math.sin(camera.rotation.y),
    Math.sin(camera.rotation.x),
    Math.cos(camera.rotation.y)
  ).multiplyScalar(100) );
  
 }
});

});
