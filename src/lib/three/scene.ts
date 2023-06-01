import * as THREE from 'three';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass';
import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass';
import { BloomPass } from 'three/examples/jsm/postprocessing/BloomPass';
import { RenderPixelatedPass } from 'three/examples/jsm/postprocessing/RenderPixelatedPass';

let renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera,
  composer: EffectComposer;
let clouds: Array<Cloud>
let canvas: HTMLCanvasElement

// instantiate a loader
const loader = new SVGLoader();
const cloud_x1 = 'cloud-x1.svg'
const cloud_x2 = 'cloud-x2.svg'
const cloudSpeed = 0.2
// export function setCanvasDimensions(
//   canvas: HTMLCanvasElement, 
//   width: number, 
//   height: number, 
//   set2dTransform = false
//   ) {
//   const ratio = window.devicePixelRatio;
//   canvas.width = width * ratio;
//   canvas.height = height * ratio;
//   canvas.style.width = `${width}px`;
//   canvas.style.height = `${height}px`;
//   if (set2dTransform) {
//     canvas.getContext('2d')?.setTransform(ratio, 0, 0, ratio, 0, 0);
//   }
// }

function init(_canvas: HTMLCanvasElement) {
  canvas = _canvas
  // canvas.onclick = () => {
  //   // not safe
  //   var bbox = new THREE.Box3().setFromObject(clouds[0].getGroup() as THREE.Group);
  //   console.log(bbox)
  //   console.log(clouds[0].getDebug())
  //   console.log(canvas.width)
  // }
  // renderer
  renderer = new THREE.WebGLRenderer({ alpha: true, canvas: canvas, antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000, 0)
  window.addEventListener('resize', resize);
  // scene
  scene = new THREE.Scene();
  // camera
  camera = new THREE.PerspectiveCamera();

  composer = new EffectComposer(renderer)
  const renderPass = new RenderPass(scene, camera);
  composer.addPass(renderPass);

  //composer.addPass(new BloomPass(10, 10, 1))
  composer.addPass(new RenderPixelatedPass(20, scene, camera))  
  // composer.addPass(new FilmPass(0.5, 1, 10, 1))


  clouds = [
    new Cloud(1300, -200, 3, cloud_x1),
    new Cloud(1000, 0, 3, cloud_x1),
    new Cloud(600, -400, 3.5, cloud_x2),
    new Cloud(300, 200, 3, cloud_x2),
    new Cloud(0, -350, 4, cloud_x1),
    new Cloud(-400, 200, 3, cloud_x1),
    new Cloud(-600, -600, 4.5, cloud_x2),
    new Cloud(-800, 400, 3, cloud_x1),
  ]
}

// animate
function animate() {
  requestAnimationFrame(animate)
  clouds.forEach(cloud => cloud.move())
  composer.render();
}

const resize = () => {
  // console.log(camera.position)
  camera.position.set(canvas.width / 2, 0, 1000);
  renderer.setSize(document.documentElement.clientWidth, document.documentElement.clientHeight)
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  composer.setSize(document.documentElement.clientWidth, document.documentElement.clientHeight);
  // setCanvasDimensions(renderer.domElement, window.innerWidth, window.innerHeight);
  // First call to following line is pointless as callback is still running
  clouds.forEach(cloud => cloud.resize())
};

export const createScene = (canvas: HTMLCanvasElement) => {
  init(canvas)
  resize();
  animate();
}

class Cloud {
  #group: THREE.Group | undefined
  #width: number = 0
  #height: number = 0

  getGroup(): THREE.Group | undefined { return this.#group }

  constructor(
    x: number,
    y: number,
    scale: number,
    asset: string
  ) {
    loader.load(`bg/${asset}`, (data) => {
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
    // this.#group.position.x = 0;
  }

  getDebug(): string {
    return `
      x: ${this.#group?.position.x} 
      y: ${this.#group?.position.y} 
      z: ${this.#group?.position.z}`
  }

  move() {
    if (this.#group) {
      if (this.#group.position.x > canvas.width + this.#width / 3) {
        // console.log(`cx: ${canvas.width}, x: ${this.#group.position.x}, x: ${-1 * this.#width}`)
        this.#group.position.x = -1 * (this.#width + this.#width / 3)
      }
      else
        this.#group.translateX(cloudSpeed)
    }
  }
}