// Computer Graphics demo application with Three.JS
// Created on February 17th, 2024 by Ícaro Freire (https://github.com/ivfreire).
// Institute of Nuclear & Energy Research - IPEN/CNEN-SP

// Globals
size = 3

const scene = new THREE.Scene();

scene.background = new THREE.Color(0xeeeeee);

// const camera = new THREE.PerspectiveCamera(75, 1.0, 0.1, 1000);
const camera = new THREE.OrthographicCamera(size / - 2, size / 2, size / 2, size / - 2, 1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerWidth);
document.getElementById('cg_demo').appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial({color: 0x282f72});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(0, 0, 2);
scene.add(pointLight);

camera.position.z = 2;

function animate() {
	requestAnimationFrame(animate);
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render(scene, camera);
}

animate();