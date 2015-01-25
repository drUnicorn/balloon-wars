
// TODO split this file into:
// render.js
// physics.js
// init.js

Physijs.scripts.worker = window.location+'lib/physijs_worker.js';
Physijs.scripts.ammo = window.location+'lib/ammo.js';



var  render, renderer, scene, camera, balloon;

var move = 0; //FIXME move to user.js

function initScene() {
 
 //TWEEN je pro plynulé animace
 TWEEN.start();
 
 //Nastav renderovací jádro, alpha znamená průhledné pozadí
 renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
 renderer.setSize( document.body.clientWidth, document.body.clientHeight );
 renderer.shadowMapEnabled = true;
 renderer.shadowMapSoft = true;
 document.getElementById( 'canvas' ).appendChild( renderer.domElement );
 
 
 window.addEventListener('resize',function(){
   
   camera.aspect = window.innerWidth / window.innerHeight;
   camera.updateProjectionMatrix();
   
   renderer.setSize(
    document.body.clientWidth,
    document.body.clientHeight
   );
   
 });
 
 
 //Vytvoř scénu
 scene = new Physijs.Scene({ fixedTimeStep: 1 / 120 });
 scene.setGravity(new THREE.Vector3( 0, 0, 0 ));
 scene.addEventListener(
  'update',
  function() {
   scene.simulate( undefined, 2 );
  }
 );
 
 
 //Vytvoř kameru
 camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  1,
  1000
 );
 camera.position.set( -458133.9720997899, 261, 5548777.776496544 );
 camera.rotation.set( 3, -4.2062434973063345, 3.141592653589793 );
 scene.add( camera );
 
 
 //Osvětli scénu
 var light = new THREE.DirectionalLight( 0xFFFFFF );
 light.position.set( 20, 40, -15 );
 light.target.position.copy( scene.position );
 light.castShadow = true;
 light.shadowCameraLeft = -60;
 light.shadowCameraTop = -60;
 light.shadowCameraRight = 60;
 light.shadowCameraBottom = 60;
 light.shadowCameraNear = 20;
 light.shadowCameraFar = 200;
 light.shadowBias = -.0001
 light.shadowMapWidth = light.shadowMapHeight = 2048;
 light.shadowDarkness = .7;
 scene.add( light );
 
 
 //Spusť renderování
 requestAnimationFrame( render );
 scene.simulate();
 
 
 //Načti balón
 (new THREE.JSONLoader()).load(
  "models/balloon.js",
  function(geometry){
  
  var material = new THREE.MeshLambertMaterial({ opacity: 1, transparent: true });
  
  balloon = new THREE.Mesh(
    geometry,
    material
  );
  
  
  //Náhodně vyber barvu
  balloon.material.color.setRGB(
     Math.random(),
     Math.random(),
     Math.random()
  );
  
  balloon.castShadow = true;    //Balón vytváří stín
  balloon.receiveShadow = true; //A může na něj dopadat stín
  
  //Skutečný balón je o trochu větší, než model...
  balloon.scale.x = balloon.scale.y = balloon.scale.z = 5;
  
  //Nastav pozici
  balloon.position.set(
   -458133.9720997899, //UTM šířka
   261,                //nadmořská výška
   5548777.776496544   //UTM délka
  );
  
  
  scene.add( balloon );
 });
};


//Synchronizuj kameru mapy a THREE.js
render = function() {
 requestAnimationFrame( render );
 if( !balloon ){ return; }
 
 balloon.position.set(balloon.position.x, balloon.position.y + move, balloon.position.z);
 
 
 var radius = 50;
 
 camera.position.x
   = (balloon.position.x||0)
   + radius * Math.sin( mouseX/100 );
 
 camera.position.z
   = (balloon.position.z||0)
   + radius * Math.cos( mouseX/100 );
 
 camera.position.y
   = (balloon.position.y||0)
   + 10;
 
 camera.rotation.y = (mouseX/100+Math.PI)%(2*Math.PI);
 
 renderer.render( scene, camera );
 if(browser&&browser.getPosition()[0]){
  browser.cameraCopyFrom( camera );
 }
 
 
};

window.addEventListener('load',initScene);
