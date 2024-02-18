// Computer Graphics demo application with Three.JS
// Created on February 17th, 2024 by Ícaro Freire (https://github.com/ivfreire).
// Institute of Nuclear & Energy Research - IPEN/CNEN-SP

// Globals
width = window.innerWidth;
height = window.innerWidth;

const scene = new THREE.Scene();

scene.background = new THREE.Color(0xeeeeee);

// const camera = new THREE.PerspectiveCamera(75, 1.0, 0.1, 1000);
const camera = new THREE.OrthographicCamera(3 / - 2, 3 / 2, 3 / 2, 3 / - 2, 1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(width, width);
document.getElementById('cg_demo').appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({color: 0x282f72});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 2;

function animate() {
	requestAnimationFrame(animate);
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	renderer.render(scene, camera);
}

animate();