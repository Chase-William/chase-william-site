import * as THREE from 'three';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';

let renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera;
let cloud: Cloud

// instantiate a loader
const loader = new SVGLoader();

function init(canvas: HTMLCanvasElement) {
  canvas.onclick = () => {
    console.log(cloud.getDebug())
  }
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
  cloud = new Cloud()
}

// animate
function animate() {
  requestAnimationFrame(animate)
  cloud.move()
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

class Cloud {
  #group: THREE.Group | undefined

  constructor() {
    loader.load('bg/cloud-x1.svg', (data) => {
      const paths = data.paths;
      this.#group = new THREE.Group();

      for (let i = 0; i < paths.length; i++) {
        const path = paths[i];
        const material = new THREE.MeshBasicMaterial({
          color: path.color,
          side: THREE.DoubleSide,
          depthWrite: false
        })
        const shapes = SVGLoader.createShapes(path);
        for (let j = 0; j < shapes.length; j++) {
          const shape = shapes[j];
          const geometry = new THREE.ShapeGeometry(shape);
          const mesh = new THREE.Mesh(geometry, material);
          this.#group.add(mesh);
        }
      }
      this.#group.scale.set(4, 4, 4)
      scene.add(this.#group)
    })
  }

  getDebug(): string {
    return `
      x: ${this.#group?.position.x} 
      y: ${this.#group?.position.y} 
      z: ${this.#group?.position.z}`;
  }

  move() {
    if (this.#group) {
      if (this.#group.position.x > window.innerWidth / 1.2)
        this.#group.position.x = window.innerWidth * 1.5 * (-1)
      else 
        this.#group.translateX(1)
    }
  }
}