import * as THREE from 'three'
const Vector3 = THREE.Vector3
import { FractalComplexFunction } from './modules/Fractal'

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
 
document.addEventListener("DOMContentLoaded", async function(){
	const canvas:HTMLCanvasElement = document.querySelector("#canvas")

	const width = window.innerWidth
	const height = window.innerHeight

	canvas.width  = width
	canvas.height = height

	const minSide = Math.min(width, height)

	const fractal = new FractalComplexFunction(minSide, minSide, ...FractalComplexFunction.GetRandomParameters())
	await fractal.generate()
	console.log(fractal.caption)

	const renderer = new THREE.WebGLRenderer({
		canvas: canvas
	})

	// Black background.
	renderer.setClearColor(0x000000)
	const scene = new THREE.Scene()

	const camera = new THREE.PerspectiveCamera(75, width/height, 0.1, 1000)
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
		size: 10,
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
	scene.add(axis)

	// Chikibamboni.

	/*
	const loader = new GLTFLoader()
	loader.load('./assets/chikibamboni.gltf', function(gltf){
		const sheep = gltf.scene
		sheep.scale.set(15,15,15)
		console.log(sheep)
		scene.add(sheep)
	})
	*/


	window.addEventListener("resize", function(){
		const width = this.innerWidth
		const height = this.innerHeight

		camera.aspect = width/height
		camera.updateProjectionMatrix()

		renderer.setSize(width, height)
	})

	// Controls.

	let isMoving = false

	canvas.addEventListener("mousedown", () => isMoving = true )
	canvas.addEventListener("mouseup", () => isMoving = false)
	canvas.addEventListener("mousemove", e => {
		if(!isMoving) return;

		// Limit the X axis (top-bottom) rotation beteen -pi/2 and pi/2 to fix incorrect Y axis rotation. 
		const rotationx = scene.rotation.x + e.movementY/100
		scene.rotation.x = Math.max(-Math.PI/2, Math.min(Math.PI/2, rotationx))

		scene.rotation.y += e.movementX/100
	})

	

	const tick = () => {
		requestAnimationFrame(tick)
		renderer.render(scene, camera)
		scene.rotation.x += 1/100
		scene.rotation.y += 1/100

	}
	tick()
})