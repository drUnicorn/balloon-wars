(function(){

var deg = 360/(2*Math.PI);
var rad = (2*Math.PI)/360;

Vadstena
  .Browser
  .prototype
  .visibleTerrain
  = function(density){
 
 /*
  *  This should be done with this.visibleArea
  *  but it seems to always return the same
  *  value - [[0,0],[1,0],[0,1]]
  */
 
 var x = 0, y = 0, i = 0;
 var mx = window.innerWidth;
 var my = window.innerHeight;
 var px = mx/density |0;
 var py = my/density |0;
 var l = px*py;
 var polygon = new THREE.PlaneGeometry( 1, 1, px, py );
 var arr;
 
 while(x<mx){
  y = 0;
  while(y<my && i<l){
   
   arr = this.hitTest(x,y);
   polygon.vertices[i].x = arr[0]|0;
   polygon.vertices[i].y = arr[1]|0;
   polygon.vertices[i].z = arr[2]|0;
   
   y += density;
   i++;
  }
  x += density;
 }
 
 polygon.computeFaceNormals();
 polygon.computeVertexNormals();
 
 return polygon;
};

Vadstena
  .Browser
  .prototype
  .cameraCopyTo = function(c){
 
 if(!c instanceof THREE.Camera){
  throw Error("Argument 1 does not implement THREE.Camera");
 }
 
 (c.rotation.order==='YXZ')||(c.rotation.order='YXZ');
 
 var pos = this.getPosition();
 c.position.set(
  pos[0] *(-1),
  pos[2],
  pos[1]
 );
 
 var rot = this.getOrientation();
 c.rotation.set(
  rot[1]*rad *(-1) + Math.PI,
  rot[0]*rad,
  Math.PI
 );
 
};

Vadstena
  .Browser
  .prototype
  .cameraCopyFrom = function(c){
 
 if(!c instanceof THREE.Camera){
  throw Error("Argument 1 does not implement THREE.Camera");
 }
 
 (c.rotation.order==='YXZ')||(c.rotation.order='YXZ');
 
 this.setPosition(
  c.position.x *(-1),
  c.position.z,
  c.position.y
 );
 
 this.setOrientation(
  c.rotation.y*deg,
  c.rotation.x*deg *(-1) +180,
  0
 );
 
};

})();
