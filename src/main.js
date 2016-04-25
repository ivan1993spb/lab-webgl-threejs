'use strict';

var THREE = require("three.js");


var loader = new THREE.JSONLoader();
var scene = new THREE.Scene();
var textureLoader = new THREE.TextureLoader();

// --------------------------------


var materialTable = new THREE.MeshPhongMaterial({
    color: 0xff0000,
    side: THREE.DoubleSide,
    map: textureLoader.load("textures/wood5.jpg")
});
var table = new THREE.Mesh( new THREE.PlaneGeometry( 70, 70, 32 ), materialTable );
table.position.z = 0.7;
table.castShadow = true;
table.receiveShadow = true;
scene.add( table );



var materialBox = new THREE.MeshPhongMaterial({
    color: 0x441100
});
var boxData = loader.parse(require('json!./models/box.json'), null);
var box = new THREE.Mesh( boxData.geometry, materialBox );
box.receiveShadow = true;
box.castShadow = true;
scene.add( box );

var materialCover = new THREE.MeshPhongMaterial({
    color: 0x441100
});
var coverData = loader.parse(require('json!./models/cover.json'), null);
var cover = new THREE.Mesh( coverData.geometry, materialCover );
cover.castShadow = true;
cover.receiveShadow = true;
scene.add( cover );




var materialSphere1 = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    // emissive: 0xffffff,
    // specular: 0xffffff,
    // reflectivity: 1000,
    // refractionRatio: 100,
    opacity: 0.6,
    transparent: true,
    // shininess: 1000,

});
var sphere1 = new THREE.Mesh( new THREE.SphereGeometry(0.8, 32, 32), materialSphere1 );
sphere1.position.set(-0.6, 3.5, 0.2);
sphere1.castShadow = true; 
sphere1.receiveShadow = true;
scene.add( sphere1 );

var materialSphere2 = new THREE.MeshPhongMaterial({
    color: 0x220500 
});
var sphere2 = new THREE.Mesh( new THREE.SphereGeometry(0.5, 32, 32), materialSphere2 );
sphere2.position.set(1.3, 3.1, 0.4);
sphere2.castShadow = true;
sphere2.receiveShadow = true;
scene.add( sphere2 );


var materialSphere3 = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    map: textureLoader.load("textures/wood.jpg")
});
var sphere3 = new THREE.Mesh( new THREE.SphereGeometry(0.37, 32, 32), materialSphere3 );
sphere3.position.set(2.9, 0.8, 0.4);
sphere3.castShadow = true;
sphere3.receiveShadow = true;
scene.add( sphere3 );


var materialSphere4 = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    map: textureLoader.load("textures/wood1.jpg")
});
var sphere4 = new THREE.Mesh( new THREE.SphereGeometry(0.53, 32, 32), materialSphere4 );
sphere4.position.set(2.6, -0.3, 0.4);
sphere4.castShadow = true;
sphere4.receiveShadow = true;
scene.add( sphere4 );


var materialSphere5 = new THREE.MeshPhongMaterial({
    color: 0x442000
});
var sphere5 = new THREE.Mesh(new THREE.SphereGeometry(0.3, 32, 32), materialSphere5 );
sphere5.position.set(3.6, 0.4, 0.45);
sphere5.castShadow = true;
sphere5.receiveShadow = true;
scene.add( sphere5 );

var materialSphere6 = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    map: textureLoader.load("textures/wood4.jpg")
});
var sphere6 = new THREE.Mesh( new THREE.SphereGeometry(0.8, 32, 32) , materialSphere6 );
sphere6.castShadow = true;
sphere6.receiveShadow = true;
sphere6.position.set(-1, 0.4, 0.2);
scene.add( sphere6 );

var materialSphere7 = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    map: textureLoader.load("textures/wood2.jpg")
});
var sphere7 = new THREE.Mesh( new THREE.SphereGeometry(0.6, 32, 32), materialSphere7 );
sphere7.castShadow = true;
sphere7.receiveShadow = true;
sphere7.position.set(0.75, 0.4, 0.3);
scene.add( sphere7 );

var materialSphere8 = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    map: textureLoader.load("textures/wood3.jpg")
});
var sphere8 = new THREE.Mesh( new THREE.SphereGeometry(1, 32, 32), materialSphere8 );
sphere8.castShadow = true;
sphere8.receiveShadow = true;
sphere8.position.set(0, -1.5, 0);
scene.add( sphere8 );


// var spotLight = new THREE.SpotLight( 0xffffff );
// spotLight.position.set( 1000, 500, -1000 );

// spotLight.castShadow = true;

// spotLight.shadow.mapSize.width = 1024;
// spotLight.shadow.mapSize.height = 1024;

// spotLight.shadow.camera.near = 500;
// spotLight.shadow.camera.far = 4000;
// spotLight.shadow.camera.fov = 30;

// scene.add( spotLight );


scene.add( new THREE.AmbientLight( 0xffffff, 0.3 ) );

var light = new THREE.DirectionalLight( 0xffffff, 1.0  );
light.position.set( 1, 8, -4 );
light.castShadow = true;
light.shadowCameraVisible = true;
light.shadowMapWidth = light.shadowMapHeight = 2048;
var d = 50;

light.shadowCameraLeft = -d;
light.shadowCameraRight = d;
light.shadowCameraTop = d;
light.shadowCameraBottom = -d;

light.shadowCameraFar = 500;
light.shadowDarkness = 0.5;

scene.add( light );


// --------------------------------



var camera = new THREE.PerspectiveCamera(
    40, window.innerWidth/window.innerHeight, 0.1, 1000 );

camera.position.z = -5;
camera.position.y = 7;
camera.position.x = 4.5;
camera.rotation.set(-2.2, 0.5, 0.35, "XYZ");



var renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setClearColor(0xf2f7ff);
renderer.setPixelRatio( window.devicePixelRatio );
renderer.gammaInput = true;
renderer.gammaOutput = true;
renderer.autoClear = false;
renderer.setSize( window.innerWidth, window.innerHeight );

renderer.shadowMapEnabled = true;
renderer.shadowMapSoft = true;

document.body.appendChild( renderer.domElement );


var render = function () {
    requestAnimationFrame( render );
    renderer.render(scene, camera);
};

render();
