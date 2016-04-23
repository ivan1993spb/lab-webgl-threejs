
var THREE = require("three.js")
var monkey = require('json!./monkey.json');

var scene = new THREE.Scene();


var loader = new THREE.JSONLoader();

var obj = loader.parse(
    monkey,
    null
);


var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// var geometry = new THREE.BoxGeometry( 2, 1, 1 );
var geometry = obj.geometry;
// var material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
var material = new THREE.MeshPhongMaterial({
  color: 0x0000ff
});
// var material = new THREE.MeshNormalMaterial();

var cube = new THREE.Mesh( geometry, material );


var hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 1 );
hemiLight.color.setHSL( 0.6, 1, 0.6 );
hemiLight.groundColor.setHSL( 0.095, 1, 0.75 );
hemiLight.position.set( 0, 500, 0 );
scene.add( hemiLight );




scene.add( cube );

camera.position.z = 5;

var render = function () {
    requestAnimationFrame( render );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
};

render();

