import * as THREE from 'three'
const Vector3 = THREE.Vector3

import setGUI from './gui'

const settings = {
	autoRotationEnabled: false,
	flatView: false,
	cameraZ: 0 
}


document.addEventListener("DOMContentLoaded", async function(){
	const canvas:HTMLCanvasElement = document.querySelector("#canvas")

	const width = window.innerWidth
	const height = window.innerHeight

	canvas.width  = width
	canvas.height = height

	const minSide = Math.min(width, height)
	const pointSize = Math.ceil(minSide/70)

	const renderer = new THREE.WebGLRenderer({
		canvas: canvas
	})

	// Black background.
	renderer.setClearColor(0x000000)
	const scene = new THREE.Scene()

	settings.cameraZ = minSide
	const perspectiveCamera = new THREE.PerspectiveCamera(75, width/height, 0.1, 1500)
	const ortographicCamera = new THREE.OrthographicCamera(-width, width, height, -height, -1000, 1000 );

	// Light.
	const light = new THREE.AmbientLight(0xffffff)
	scene.add(light);

	

	// Axis.
	const axis = new THREE.Group()
	for(let i=0; i<3; i++)
	{
		const material = new THREE.LineBasicMaterial({ color: 0xff << (8*i) })
		const geometry = new THREE.BufferGeometry().setFromPoints([ new Vector3(0,0,0), new Vector3(i==0?600:0,i==1?600:0,i==2?600:0)])
		const line = new THREE.Line(geometry, material)
		axis.add(line)
	}
	axis.visible = false;
	scene.add(axis)

	// GUI.
	const gui = setGUI({
		camera: perspectiveCamera,
		set:null,
		scene,
		axis,
		settings
	})


	const tick = () => {
		requestAnimationFrame(tick)

		const camera: THREE.Camera = settings.flatView ? ortographicCamera : perspectiveCamera
		if(perspectiveCamera.position.z != settings.cameraZ){
			perspectiveCamera.position.z = settings.cameraZ
		}


		renderer.render(scene, camera)

		canvas.dispatchEvent(new CustomEvent("tick"))

	}
	tick()
})