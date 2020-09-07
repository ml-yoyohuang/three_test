/* eslint-disable no-undef */
/* eslint max-len:0 , func-names:0 , no-console:0 */
import 'es6-promise/auto';
// import '@/util/init';
import '~/css/entry.scss';

console.log(process.env.APP_ENV); // APP_ENV : development/stage/production
if (process.env.NODE_ENV !== 'production') {
  // hack hot reload pug
  require('!!raw-loader!~/html/_master.pug');// eslint-disable-line
  require('!!raw-loader!~/html/index.pug');// eslint-disable-line
}
const imageData = 'data:image/png;base64,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';

const mouse = new THREE.Vector2();
function onMouseMove(event) {
  // calculate mouse position in normalized device coordinates
  // (-1 to +1) for both components
  mouse.x = ((event.clientX / window.innerWidth) * 2) - 1;
  mouse.y = -((event.clientY / window.innerHeight) * 2) + 1;
  // console.log(mouse);
}
window.addEventListener('mousemove', onMouseMove, false);

const app = new Vue({
  el: '#app',
  data: {
    scene: 0,
    camera: 0,
    light: 0,
    renderer: 0,
    cameradeg: 0,
    frame: 0,
    raycaster: 0,
    // some assets
    texture: 0,
    geometry: 0,
    material: 0,
    materialc: 0,
    materiall: 0,
    cube: 0,
    coords: [],
    cubes: [],
  },
  mounted() {
    this.$nextTick(() => {
      app.init();
    });
  },
  methods: {
    init() {
      // Create texture for material
      this.texture = THREE.ImageUtils.loadTexture(imageData);
      this.raycaster = new THREE.Raycaster();
      this.scene = new THREE.Scene();
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.setClearColor(0xDDDDDD);
      // this.renderer.setPixelRatio(window.devicePixelRatio); // ???
      // material asset
      this.material = new THREE.MeshBasicMaterial({ wireframe: true, wireframeLinewidth: 2 });
      this.materialc = new THREE.MeshBasicMaterial({ color: 0x0099aa }); // no light
      // this.materiall = new THREE.MeshPhongMaterial({ color: 0xaa0099 }); // light enable
      this.materiall = new THREE.MeshPhongMaterial({ map: this.texture }); // light enable

      // this.createGround(10, 10);
      this.createCubes();
      // this.createLight();
      this.createCamera();
      this.$refs.app.querySelector('.layout-view').appendChild(this.renderer.domElement);
      this.render();
    },
    createCamera() {
      this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
      // this.camera.position.z = 10;
      // this.camera.position.x = 10;
      this.camera.position.y = -5;
      this.camera.lookAt(0, 0, 0);
    },
    createBalls() {

    },
    createCubes() {
      this.geometry = new THREE.ConeGeometry(1, 1.6, 5); // Size
      for (let index = 0; index < 100; index++) {
        this.coords[index] = [Math.random() * 100, Math.random() * 100, Math.random() * 100];
        this.cubes[index] = new THREE.Mesh(this.geometry, this.materialc);
        this.cubes[index].position.x = this.coords[index][0] - 50;
        this.cubes[index].position.y = this.coords[index][1] - 50;
        this.cubes[index].position.z = this.coords[index][2] - 50;
        this.cubes[index].name = `cube ${index}`;
        this.scene.add(this.cubes[index]);
      }

      // this.cube = new THREE.Mesh(this.geometry, this.material);
      this.scene.add(this.cube);
    },
    createLight() {
      this.light = new THREE.SpotLight(0xff3366, 2);
      this.light.position.set(30, 60, 90);
      this.scene.add(this.light);
    },
    createGround(width, height) {
      const geometry = new THREE.PlaneBufferGeometry(width, height);
      const material = new THREE.MeshPhongMaterial({ color: 0xaaaaaa });
      const ground = new THREE.Mesh(geometry, material);
      ground.rotation.x = Math.PI / -2;
      ground.position.y = -10.5;
      ground.receiveShadow = true;
      this.scene.add(ground);
    },
    go() {
      this.camera.lookAt(0, 0, 10);
    },
    render() {
      requestAnimationFrame(this.render);
      this.raycaster.setFromCamera(mouse, this.camera);
      this.frame += 1;
      for (let index = 0; index < 27; index++) {
        if (this.frame > index * 3 && this.cubes[index].position.y > -10 + Math.floor((index % 9) / 3)) {
          this.cubes[index].position.y -= 0.5;
        }
      }
      // this.cube.rotation.x += 0.01;
      this.camera.position.y += mouse.y * 0.05;
      if (this.camera.position.y > 50) { this.camera.position.y = 50; } else if (this.camera.position.y < -50) { this.camera.position.y = -50; }
      this.cameradeg += mouse.x * 0.03; // rotate camera
      this.cameradeg = this.cameradeg % (Math.PI * 2);
      this.camera.position.x = Math.sin(this.cameradeg) * 50;
      this.camera.position.z = Math.cos(this.cameradeg) * 50;
      this.camera.lookAt(0, 0, 0);
      // this.camera.lookAt(this.cubes[13].position);
      this.onhover();
      this.renderer.render(this.scene, this.camera);
    },
    onhover() {
      // for (let index = 0; index < 27; index++) {
      // this.cubes[index].material = this.materiall; // reset style of all mesh
      // }
      // calculate objects intersecting the picking ray
      const intersects = this.raycaster.intersectObjects(this.scene.children); // hover target array
      const d = [];
      if (intersects.length > 0) {
        for (let index = 0; index < intersects.length; index++) {
          d.push(intersects[index].distance);
        }
        for (let index = 0; index < intersects.length; index++) {
          if (intersects[index].distance === Math.min.apply(null, d)) {
            // console.log(intersects[index].object);
            if (intersects[index].object.name.indexOf('cube') > -1) {
              document.body.style.cursor = 'pointer';
            } else {
              document.body.style.cursor = 'auto';
            }
            // intersects[index].object.material = this.materialc;
          }
        }
      } else {
        document.body.style.cursor = 'auto';
      }
    },
    clickh1() {
      this.$refs.app.classList.toggle('is-active');
      this.$refs.app.querySelector('h1').classList.toggle('is-active');
    },
    onclick() {
      this.go();
      // calculate objects intersecting the picking ray
      const intersects = this.raycaster.intersectObjects(this.scene.children); // click target array
      const d = [];
      if (intersects.length > 0) {
        for (let index = 0; index < intersects.length; index++) {
          d.push(intersects[index].distance);
        }
        for (let index = 0; index < intersects.length; index++) {
          if (intersects[index].distance === Math.min.apply(null, d)) {
            console.log(intersects[index].object.name);
            intersects[index].object.material = this.material;
          }
        }
      }
      // console.log(THREE);
    },
  },
});
