!function(e){function t(t){for(var A,a,s=t[0],o=t[1],c=t[2],u=0,l=[];u<s.length;u++)a=s[u],r[a]&&l.push(r[a][0]),r[a]=0;for(A in o)Object.prototype.hasOwnProperty.call(o,A)&&(e[A]=o[A]);for(h&&h(t);l.length;)l.shift()();return n.push.apply(n,c||[]),i()}function i(){for(var e,t=0;t<n.length;t++){for(var i=n[t],A=!0,s=1;s<i.length;s++){var o=i[s];0!==r[o]&&(A=!1)}A&&(n.splice(t--,1),e=a(a.s=i[0]))}return e}var A={},r={2:0};var n=[];function a(t){if(A[t])return A[t].exports;var i=A[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=A,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},a.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var s=window.webpackJsonp=window.webpackJsonp||[],o=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var h=o;n.push([3,1,0]),i()}([,,function(e,t,i){"use strict";i.r(t);i(1),i(0);var A=new THREE.Vector2;window.addEventListener("mousemove",function(e){A.x=e.clientX/window.innerWidth*2-1,A.y=-e.clientY/window.innerHeight*2+1},!1);var r=new Vue({el:"#app",data:{scene:0,camera:0,light:0,renderer:0,cameradeg:0,frame:0,raycaster:0,texture:0,geometry:0,material:0,materialc:0,materiall:0,cube:0,coords:[],cubes:[]},mounted:function(){this.$nextTick(function(){r.init()})},methods:{init:function(){this.texture=THREE.ImageUtils.loadTexture("data:image/png;base64,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"),this.raycaster=new THREE.Raycaster,this.scene=new THREE.Scene,this.renderer=new THREE.WebGLRenderer,this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setClearColor(14540253),this.material=new THREE.MeshBasicMaterial({wireframe:!0,wireframeLinewidth:2}),this.materialc=new THREE.MeshBasicMaterial({color:39338}),this.materiall=new THREE.MeshPhongMaterial({map:this.texture}),this.createCubes(),this.createCamera(),this.$refs.app.querySelector(".layout-view").appendChild(this.renderer.domElement),this.render()},createCamera:function(){this.camera=new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.y=-5,this.camera.lookAt(0,0,0)},createBalls:function(){},createCubes:function(){this.geometry=new THREE.CylinderGeometry(2,2,700,3);for(var e=0;e<50;e++)this.coords[e]=[700*Math.random(),700*Math.random(),700*Math.random()],this.cubes[e]=new THREE.Mesh(this.geometry,this.materialc),this.cubes[e].position.x=this.coords[e][0]-350,this.cubes[e].position.y=0,this.cubes[e].position.z=this.coords[e][2]-350,this.cubes[e].name="cube "+e,this.scene.add(this.cubes[e]);this.scene.add(this.cube)},createLight:function(){this.light=new THREE.SpotLight(16724838,2),this.light.position.set(30,60,90),this.scene.add(this.light)},createGround:function(e,t){var i=new THREE.PlaneBufferGeometry(e,t),A=new THREE.MeshPhongMaterial({color:11184810}),r=new THREE.Mesh(i,A);r.rotation.x=Math.PI/-2,r.position.y=-10.5,r.receiveShadow=!0,this.scene.add(r)},go:function(){this.camera.lookAt(0,0,10)},render:function(){requestAnimationFrame(this.render),this.raycaster.setFromCamera(A,this.camera),this.frame+=1;for(var e=0;e<27;e++)this.frame>3*e&&(this.cubes[e].position.y,Math.floor(e%9/3));this.camera.position.y>500?this.camera.position.y=500:this.camera.position.y<-500&&(this.camera.position.y=-500),this.cameradeg+=.005*A.x,this.cameradeg=this.cameradeg%(2*Math.PI),this.camera.position.x=500*Math.sin(this.cameradeg),this.camera.position.z=500*Math.cos(this.cameradeg),this.camera.lookAt(0,0,0),this.onhover(),this.renderer.render(this.scene,this.camera)},onhover:function(){var e=this.raycaster.intersectObjects(this.scene.children),t=[];if(e.length>0){for(var i=0;i<e.length;i++)t.push(e[i].distance);for(var A=0;A<e.length;A++)e[A].distance===Math.min.apply(null,t)&&(e[A].object.name.indexOf("cube")>-1?document.body.style.cursor="pointer":document.body.style.cursor="auto")}else document.body.style.cursor="auto"},clickh1:function(){this.$refs.app.classList.toggle("is-active"),this.$refs.app.querySelector("h1").classList.toggle("is-active")},onclick:function(){this.go();var e=this.raycaster.intersectObjects(this.scene.children),t=[];if(e.length>0){for(var i=0;i<e.length;i++)t.push(e[i].distance);for(var A=0;A<e.length;A++)e[A].distance===Math.min.apply(null,t)&&(e[A].object.material=this.material)}}}})},function(e,t,i){e.exports=i(2)}]);