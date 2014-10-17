window.addEventListener('load',function(){
 
 Physijs.scripts.worker = '/map/api/physijs_worker.js';
 Physijs.scripts.ammo = '/map/api/ammo.js';
 
 
 var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
 renderer.setSize( window.innerWidth, window.innerHeight );
 renderer.shadowMapEnabled = true;
 renderer.shadowMapSoft = true;
 document.getElementById( 'canvas' ).appendChild( renderer.domElement );
 
 
 
 var scene = new Physijs.Scene({ fixedTimeStep: 1 / 120 });
 scene.setGravity(new THREE.Vector3( 0, -30, 0 ));
 scene.addEventListener(
  'update',
  function() {
   scene.simulate( undefined, 2 );
  }
 );
 
 
 
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
 
 
 
 render = function() {
  requestAnimationFrame( render );
  renderer.render( scene, camera );
 };
 
 
 
 
 var shape, material = new THREE.MeshLambertMaterial({ opacity: 0, transparent: true });
 
 
 shape = new Physijs.BoxMesh(
  new THREE.BoxGeometry( 3, 3, 3 ),
  material
 );
  
 shape.material.color.setRGB( Math.random() * 100 / 100, Math.random() * 100 / 100, Math.random() * 100 / 100 );
 shape.castShadow = true;
 shape.receiveShadow = true;
 
 shape.position.set(
  Math.random() * 30 - 15,
  20,
  Math.random() * 30 - 15
 );
 
 shape.rotation.set(
  Math.random() * Math.PI,
  Math.random() * Math.PI,
  Math.random() * Math.PI
 );
 
 scene.add( shape );
 
 new TWEEN.Tween(shape.material).to({opacity: 1}, 500).start();
 
 
 
 
 
 var camera = new THREE.PerspectiveCamera(
  35,
  window.innerWidth / window.innerHeight,
  1,
  1000
 );
 camera.position.set( 60, 50, 60 );
 camera.lookAt( shape );
 scene.add( camera );
 
 
 render();
 
 
});
