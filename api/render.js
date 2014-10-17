 
 Physijs.scripts.worker = '/map/api/physijs_worker.js';
 Physijs.scripts.ammo = '/map/api/ammo.js';
 
 var initScene, render, createShape, NoiseGen,
  renderer, scene, light, camera, shape;
 
 initScene = function() {
  TWEEN.start();
  
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.shadowMapEnabled = true;
  renderer.shadowMapSoft = true;
  document.getElementById( 'canvas' ).appendChild( renderer.domElement );
  
  scene = new Physijs.Scene({ fixedTimeStep: 1 / 120 });
  scene.setGravity(new THREE.Vector3( 0, 0, 0 ));
  scene.addEventListener(
   'update',
   function() {
    scene.simulate( undefined, 2 );
   }
  );
  
  
  camera = new THREE.PerspectiveCamera(
   60,
   window.innerWidth / window.innerHeight,
   1,
   1000
  );
  scene.add( camera );
  
  // Light
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
  
  
  
  requestAnimationFrame( render );
  scene.simulate();
  
  createShape();
 };
 
 var cameraPosSet = false;
 
 render = function() {
  requestAnimationFrame( render );
  renderer.render( scene, camera );
  if(browser&&browser.getPosition()[0]){
   if(!cameraPosSet){
    browser.cameraCopyTo( camera );
    camera.rotation.set(0,0,0);
    cameraPosSet = true;
   }else{
    browser.cameraCopyTo( camera );
   }
  }
  
  
  //camera.lookAt( shape.position );
 };
 
 var box_geometry = new THREE.BoxGeometry( 3, 3, 3 );
 
  
  createShape = function() {
   var material = new THREE.MeshLambertMaterial({ opacity: 0, transparent: true });
   
   
     shape = new Physijs.BoxMesh(
      box_geometry,
      material
     );
    
   shape.material.color.setRGB( Math.random() * 100 / 100, Math.random() * 100 / 100, Math.random() * 100 / 100 );
   shape.castShadow = true;
   shape.receiveShadow = true;
   
   shape.position.set(
    -458133.9720997899,
    261,
    5548777.776496544
   );
   
   shape.rotation.set(
    Math.random() * Math.PI,
    Math.random() * Math.PI,
    Math.random() * Math.PI
   );
   
   
   scene.add( shape );
   
   
   new TWEEN.Tween(shape.material).to({opacity: 1}, 500).start();
   
  };
 
 window.addEventListener('load',initScene);
 
 
 
 
 
 
 
 
 
 /*
 window.addEventListener('load',function(){
  var f = function(x){
   return x;
  };
  var m = function(x,y,z){
   if(x<y){
    return y;
   }else if(x>z){
    return z;
   }else{
    return x;
   }
  };
  var lastX = NaN,
      lastY = NaN,
      pressed = false;
  
  renderer.domElement.addEventListener('dragstart',function(e){e.preventDefault();});
  renderer.domElement.addEventListener('mousedown',function(e){
   pressed = e.buttons;
   lastX = NaN;
   lastY = NaN;
   e.preventDefault();
   return false;
  });
  renderer.domElement.addEventListener('mouseup',function(e){
   pressed = false;
   e.preventDefault();
   return false;
  });
  renderer.domElement.addEventListener('mousemove',function(e){
   if(!pressed){return;}
   var deltaX, deltaY;
   if(!isNaN(lastX+lastY)){
    deltaX = e.clientX - lastX;
    deltaY = e.clientY - lastY;
    
    if(pressed == 1){
     camera.rotation.x = f(
      camera.rotation.x,
      camera.rotation.x = 0,
      camera.translateZ( -deltaY/2 ),
      camera.translateX( -deltaX/2 )
     );
    }else
    if(pressed == 2){
     camera.rotation.y -= deltaX/200;
     camera.rotation.x += deltaY/200;
     camera.rotation.x = m(camera.rotation.x, -Math.PI/2, Math.PI/2);
    }
    
    
   }
   lastX = e.clientX;
   lastY = e.clientY;
  });
  renderer.domElement.addEventListener('wheel',function(e){
   var x = camera.rotation.x,
       y = camera.rotation.y,
       z = camera.rotation.z;
   camera.rotation.set(0,0,0);
   camera.translateY(e.deltaY);
   camera.rotation.set(x,y,z);
  });
  renderer.domElement.addEventListener('contextmenu',function(e){
   e.preventDefault();
  });
 });
 */
