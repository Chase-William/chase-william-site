import * as THREE from 'three';

let renderer: THREE.WebGLRenderer, 
    scene: THREE.Scene, 
    camera: THREE.PerspectiveCamera;
let worm: Worm

// instantiate a loader
// const loader = new SVGLoader();

// const loader = new GLTFLoader();

function init(canvas: HTMLCanvasElement) {
  // renderer
  renderer = new THREE.WebGLRenderer({ alpha: true, canvas: canvas });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000, 0)
  window.addEventListener('resize', resize);
  // scene
  scene = new THREE.Scene();
  // camera
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
  camera.position.set(0, 0, 1000);
  // material
  const material = new THREE.LineBasicMaterial({
    color: 0xff0000
  })
  // create the worm
  worm = new Worm(material)
  scene.add(worm.line)
  worm.move()
}

// animate
function animate() {
  requestAnimationFrame(animate)
  worm.move()
  renderer.render(scene, camera);
}

const resize = () => {
  renderer.setSize(window.innerWidth, window.innerHeight)
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
};

export const createScene = (canvas: HTMLCanvasElement) => {
  init(canvas)
  resize();
  animate();
}

const MAX_POINTS = 2

export class Worm {
  line: THREE.Line<THREE.BufferGeometry<THREE.NormalBufferAttributes>, THREE.LineBasicMaterial>

  constructor(material: THREE.LineBasicMaterial) {
    // geometry
    const geometry = new THREE.BufferGeometry()
    // attributes
    const positions = new Float32Array(MAX_POINTS * 3) // 3 vertices per point
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    // set the line used for rendering
    this.line = new THREE.Line(geometry, material)
  }

  move() {
    const positions = this.line.geometry.attributes.position.array;
    let x, y, z, index;
    x = y = z = index = 0;
  
    for (let i = 0, l = MAX_POINTS; i < l; i++) {
      // @ts-ignore
      positions[index++] = x;
      // @ts-ignore
      positions[index++] = y;
      // @ts-ignore
      positions[index++] = z;
  
      x += (Math.random() - 0.5) * 30;
      y += (Math.random() - 0.5) * 30;
      z += (Math.random() - 0.5) * 30;
    }
  }
}