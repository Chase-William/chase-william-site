import * as THREE from 'three';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';

let renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera;
let clouds: Array<Cloud>
let canvas: HTMLCanvasElement

// instantiate a loader
const loader = new SVGLoader();

function init(_canvas: HTMLCanvasElement) {
  canvas = _canvas
  canvas.onclick = () => {
    // not safe
    var bbox = new THREE.Box3().setFromObject(clouds[0].getGroup() as THREE.Group);
    console.log(bbox)
    console.log(clouds[0].getDebug())
    console.log(canvas.width)
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
  camera = new THREE.PerspectiveCamera();

  camera.position.set(canvas.width / 2, 0, 1000);
  
  clouds = [
    new Cloud(0, 0, 4),
    new Cloud(-100, -400, 3.5),
    // new Cloud(-400, 0, 3),
    // new Cloud(-900, -350, 4),
    // new Cloud(-1000, 200, 1),
  ]
}

// animate
function animate() {
  requestAnimationFrame(animate)
  clouds.forEach(cloud => cloud.move())
  renderer.render(scene, camera);
}

const resize = () => {
  renderer.setSize(window.innerWidth, window.innerHeight)
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  // First call to following line is pointless as callback is still running
  clouds.forEach(cloud => cloud.resize())
};

export const createScene = (canvas: HTMLCanvasElement) => {
  init(canvas)
  resize();
  animate();
}

// Prevents animated objects from being moved to the start of animation immediately
const returnPadding = 70

class Cloud {
  #group: THREE.Group | undefined
  #width: number = 0
  #height: number = 0

  getGroup(): THREE.Group | undefined { return this.#group }

  constructor(x: number, y: number, scale: number) {
    loader.load('bg/cloud-x1.svg', (data) => {
      const paths = data.paths;
      this.#group = new THREE.Group();

      for (let i = 0; i < paths.length; i++) {
        const path = paths[i]
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

      this.#group.position.x = x
      this.#group.position.y = y
      this.#group.scale.set(scale, scale, scale)
      scene.add(this.#group)
      resize()
    })
  }

  /**
   * Resizes the width/height for the geometry.
   * @returns 
   */
  resize() {
    if (!this.#group)
      return
    // Get the bounding box
    const bbox = new THREE.Box3().setFromObject(this.#group)
    this.#width = bbox.max.x - bbox.min.x
    this.#height = bbox.max.y - bbox.min.y
  }

  getDebug(): string {
    return `
      x: ${this.#group?.position.x} 
      y: ${this.#group?.position.y} 
      z: ${this.#group?.position.z}`;
  }

  move() {
    if (this.#group) {
      if (this.#group.position.x > canvas.width + this.#width / 3) {
        console.log(`cx: ${canvas.width}, x: ${this.#group.position.x}, x: ${-1 * this.#width}`)
        this.#group.position.x = -1 * this.#width
      }
      else 
        this.#group.translateX(3)
    }
  }
}