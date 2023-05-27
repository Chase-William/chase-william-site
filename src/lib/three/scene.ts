// @ts-nocheck
import * as THREE from 'three';

let renderer, scene, camera;

let line;
const MAX_POINTS = 1500;
let drawCount;


function init(canvas) {
  // renderer
  renderer = new THREE.WebGLRenderer({ alpha: 0, canvas: canvas });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000, 0)
  window.addEventListener('resize', resize);
  // scene
  scene = new THREE.Scene();
  // camera
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
  camera.position.set(0, 0, 1000);
  // geometry
  const geometry = new THREE.BufferGeometry();
  // attributes
  const positions = new Float32Array(MAX_POINTS * 3); // 3 vertices per point
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  // drawcalls
  drawCount = 2; // draw the first 2 points, only
  geometry.setDrawRange(0, drawCount);
  // material
  const material = new THREE.LineBasicMaterial({
    color: 0xff0000
  });
  // line
  line = new THREE.Line(geometry, material);
  scene.add(line);
  // update positions
  updatePositions();
}

// update positions
function updatePositions() {
  const positions = line.geometry.attributes.position.array;
  let x, y, z, index;
  x = y = z = index = 0;

  for (let i = 0, l = MAX_POINTS; i < l; i++) {
    positions[index++] = x;
    positions[index++] = y;
    positions[index++] = z;

    x += (Math.random() - 0.5) * 30;
    y += (Math.random() - 0.5) * 30;
    z += (Math.random() - 0.5) * 30;
  }
}

// render
function render() {
  renderer.render(scene, camera);
}

// animate
function animate() {
  requestAnimationFrame(animate);
  drawCount = (drawCount + 1) % MAX_POINTS;
  line.geometry.setDrawRange(0, drawCount);
  if (drawCount === 0) {
    console.log('first render')
    // periodically, generate new data
    updatePositions();
    line.geometry.attributes.position.needsUpdate = true; // required after the first render
    line.material.color.setHSL(Math.random(), 1, 0.5);
  }
  render();
}

const resize = () => {
  renderer.setSize(window.innerWidth, window.innerHeight)
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
};

export const createScene = (canvas) => {
  init(canvas)
  resize();
  animate();
}