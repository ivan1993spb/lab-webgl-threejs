
var THREE = require("three.js")


var loader = new THREE.JSONLoader();

var boxData = loader.parse(require('json!./box.json'), null);
var tableData = loader.parse(require('json!./table.json'), null);
var coverData = loader.parse(require('json!./cover.json'), null);


var scene = new THREE.Scene();


var materialBox = new THREE.MeshPhongMaterial({
    color: 0x0000ff
});

var box = new THREE.Mesh( boxData.geometry, materialBox );
scene.add( box );



var materialTable = new THREE.MeshPhongMaterial({
    color: 0xff0000
});

var table = new THREE.Mesh( tableData.geometry, materialTable );
scene.add( table );



var materialCover = new THREE.MeshPhongMaterial({
    color: 0x00ff00
});

var cover = new THREE.Mesh( coverData.geometry, materialCover );
scene.add( cover );



var hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 1 );
hemiLight.color.setHSL( 0.6, 1, 0.6 );
hemiLight.groundColor.setHSL( 0.095, 1, 0.75 );
hemiLight.position.set( 0, 100, -25 );
scene.add( hemiLight );

// --------------------------------

// var camera = new THREE.OrthographicCamera(
    // window.innerWidth / - 2, window.innerWidth / 2,
    // window.innerHeight / 2, window.innerHeight / - 2, 1, 1000 );

var camera = new THREE.PerspectiveCamera(
    55, window.innerWidth/window.innerHeight, 0.1, 1000 );

camera.position.z = -3.2;
camera.position.y = 4;
camera.position.x = 3.6;
camera.rotation.set(-2.3, 0.5, 0.5, "XYZ");


console.log(camera);

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


var render = function () {
    // requestAnimationFrame( render );


    renderer.render(scene, camera);
};

render();

