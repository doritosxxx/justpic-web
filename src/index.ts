import * as THREE from 'three'
const Vector3 = THREE.Vector3
import { FractalComplexFunction } from './modules/Fractal'

import setEvents from './events'
import setGUI from './gui'


document.addEventListener("DOMContentLoaded", async function(){
	const canvas:HTMLCanvasElement = document.querySelector("#canvas")

	const width = window.innerWidth
	const height = window.innerHeight

	canvas.width  = width
	canvas.height = height

	const minSide = Math.min(width, height)
	const pointSize = Math.ceil(minSide/70)

	const fractal = new FractalComplexFunction(minSide, minSide, ...FractalComplexFunction.GetRandomParameters())
	await fractal.generate()
	console.log(fractal.caption)

	const renderer = new THREE.WebGLRenderer({
		canvas: canvas
	})

	// Black background.
	renderer.setClearColor(0x000000)
	const scene = new THREE.Scene()

	const camera = new THREE.PerspectiveCamera(75, width/height, 0.1, 1500)
	camera.position.set(0, 0, minSide)

	// Light.
	const light = new THREE.AmbientLight(0xffffff)
	scene.add(light);

	
	// Fractal group.
	const set = new THREE.Group()

	const vertices = []
	const colors = []
	const depth = (fractal.width + fractal.height)/3
	fractal.points.forEach((point, i) => {		
		vertices.push(
			point.x - fractal.center.x,
			point.y - fractal.center.y,
			depth/fractal.points.length*i - depth/2	
		)
		colors.push(
			point.color.r/255, 
			point.color.g/255, 
			point.color.b/255
		)
		
	})

	// Set geometry.
	const geometry = new THREE.BufferGeometry();
	geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) )
	geometry.setAttribute( 'color', new THREE.Float32BufferAttribute( colors, 3 ) )

	const material = new THREE.PointsMaterial({
		size: pointSize,
		vertexColors: true
	})

	const points = new THREE.Points( geometry, material );
	set.add(points)
	scene.add(set)
	

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

	// Gui.

	setGUI({
		camera,
		set,
		scene,
		axis
	});


	// Events.
	setEvents({
		scene,
		camera,
		renderer,
	})

	const tick = () => {
		requestAnimationFrame(tick)
		renderer.render(scene, camera)

		//sceneController.setY(scene.rotation.y +1/100)
		//sceneController.setZ(scene.rotation.z +1/100)

	}
	tick()
})