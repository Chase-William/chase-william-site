import THREE from "three";

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