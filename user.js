
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
  
  mouseX += Δx;
  mouseY += Δy;
  
 }
 
 prevX = e.clientX;
 prevY = e.clientY;
});

});

document.body.addEventListener('keydown', function(e){
 if(e.keyCode == 32){
  move = 1;
 }
 if(e.keyCode == 16){
  move = -1;
 }
 if(e.keyCode == 45){
  alert("Bazinga!!!");
  var geo = new THREE.SphereGeometry(5);
  var material = Physijs.createMaterial(
        new THREE.MeshLambertMaterial({ opacity: 1, transparent: false }),
        .6, //stredni treni
        .3  //nizke odskodneni
  );
  
  material.color.setRGB(255,255,0);
  
  var sphere = Physijs.SphereMesh(geo, material);
  
  sphere.position.set(camera.position.x, camera.position.y, camera.position.z + 10);
  scene.add(sphere);
 }
});
document.body.addEventListener('keyup', function(e){
 move = 0;
});

});
