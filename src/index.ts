import * as THREE from 'three'
const { Vector3} = THREE
import { Scene } from 'three'

import { renderGUI } from './gui'
import { setEventHandlers } from './events'
import { generateFractal } from './generator'

import { grabQueryParameters, setQueryParameters } from './url'
grabQueryParameters()



let renderTimeout: null|number = null;
let fractalSet: THREE.Group;

function tryRenderFractal(scene: Scene){
	if(renderTimeout !== null)
		return;
	renderTimeout = setTimeout(function(){
		const newSet = generateFractal()
		scene.remove(fractalSet)
		scene.add(newSet)
		fractalSet = newSet
		setQueryParameters()
		renderTimeout = null
	} as TimerHandler, 50)
}


document.addEventListener("DOMContentLoaded", async function(){	

	const canvas:HTMLCanvasElement = document.querySelector("#canvas") as HTMLCanvasElement

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
	const camera = new THREE.PerspectiveCamera(75, width/height, 0.1, 1500)
	camera.position.z = 750

	// Light.
	const light = new THREE.AmbientLight(0xffffff)
	scene.add(light)

	// Axis.
	const axis = new THREE.Group()
	for(let i=0; i<3; i++)
	{
		const material = new THREE.LineBasicMaterial({ color: 0xff << (8*i) })
		const geometry = new THREE.BufferGeometry().setFromPoints([ new Vector3(0,0,0), new Vector3(i==0?600:0,i==1?600:0,i==2?600:0)])
		const line = new THREE.Line(geometry, material)
		axis.add(line)
	}
	
	scene.add(axis)

	fractalSet = generateFractal()
	scene.add(fractalSet)
	renderGUI(scene, axis, camera, ()=>tryRenderFractal(scene))
	setEventHandlers(scene, renderer, camera)

	const tick = () => {
		requestAnimationFrame(tick)
		renderer.render(scene, camera)
	}
	tick()
})