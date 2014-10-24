

Physijs.scripts.worker = window.location+'/api/physijs_worker.js';
Physijs.scripts.ammo = window.location+'/api/ammo.js';



var initScene, render, createShape, NoiseGen,
 renderer, scene, light, camera, shape;

initScene = function() {
 
 //TWEEN je pro plynulé animace
 TWEEN.start();
 
 //Nastav renderovací jádro, alpha znamená průhledné pozadí
 renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
 renderer.setSize( window.innerWidth, window.innerHeight );
 renderer.shadowMapEnabled = true;
 renderer.shadowMapSoft = true;
 document.getElementById( 'canvas' ).appendChild( renderer.domElement );
 
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
 camera.positoin.set( -458133, 261, 5548731 );
 camera.rotation.set( 3.787364476827695, -4.2062434973063345, 3.141592653589793 );
 scene.add( camera );
 
 
 //Osvětli scénu
 light = new THREE.DirectionalLight( 0xFFFFFF );
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
 
 //Vytvoř krychli
 createShape();
};


//Synchronizuj kameru mapy a THREE.js
render = function() {
 requestAnimationFrame( render );
 renderer.render( scene, camera );
 if(browser&&browser.getPosition()[0]){
  browser.cameraCopyFrom( camera );
 }
 
};


//Geometrie a materiál krychle
var box_geometry = new THREE.BoxGeometry( 3, 3, 3 );
var material = new THREE.MeshLambertMaterial({ opacity: 0, transparent: true });


 createShape = function() {
  
  //Vytvoř krychli z geometrie a materiálu
  shape = new Physijs.BoxMesh(
     box_geometry,
     material
  );
  
  
  //Náhodně vyber barvu
  shape.material.color.setRGB( Math.random() * 100 / 100, Math.random() * 100 / 100, Math.random() * 100 / 100 );
  
  shape.castShadow = true;    //Krychle vytváří stín
  shape.receiveShadow = true; //A může na ni dopadat stín
  
  
  //Nastav pozici
  shape.position.set(
   -458133.9720997899, //UTM šířka
   261,                //nadmořská výška
   5548777.776496544   //UTM délka
  );
  
  
  //Nastav náhodnou rotaci
  shape.rotation.set(
   Math.random() * Math.PI,
   Math.random() * Math.PI,
   Math.random() * Math.PI
  );
  
  
  scene.add( shape ); //Vlož krychli do scény
  
  
  //Animace do neprůhlednosti
  new TWEEN.Tween(shape.material).to({opacity: 1}, 500).start();
  
 };

window.addEventListener('load',initScene);
