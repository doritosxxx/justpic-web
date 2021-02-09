import * as THREE from 'three'
import { Vector3 } from 'three'
import { Mesh } from 'three'
import { FractalComplexFunction } from './modules/Fractal'

document.addEventListener("DOMContentLoaded", async function(){
	const canvas:HTMLCanvasElement = document.querySelector("#canvas")

	const width = window.innerWidth
	const height = window.innerHeight

	canvas.style.width  = width+"px"
	canvas.style.height = height+"px"

	const fractal = new FractalComplexFunction(700, 700, ...FractalComplexFunction.GetRandomParameters())
	await fractal.generate()
	console.log(fractal.caption)

	const renderer = new THREE.WebGLRenderer({
		canvas: canvas
	})
	renderer.setPixelRatio( window.devicePixelRatio );

	// Black background.
	renderer.setClearColor(0x000000)
	const scene = new THREE.Scene()

	const camera = new THREE.PerspectiveCamera(75, fractal.width/fractal.height, 0.1, 1000)
	camera.position.set(0, 0, 400)

	// Light.
	const light = new THREE.AmbientLight(0xffffff)
	scene.add(light);

	
	const group = new THREE.Group()

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

	// Geometry.
	const geometry = new THREE.BufferGeometry();
	geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) )
	geometry.setAttribute( 'color', new THREE.Float32BufferAttribute( colors, 3 ) )

	const material = new THREE.PointsMaterial({
		size: 10,
		vertexColors: true
	})

	const points = new THREE.Points( geometry, material );
	group.add(points)
	scene.add(group)


	const tick = () => {
		requestAnimationFrame(tick)
		group.rotation.x += 0.01
		group.rotation.y += 0.01
		renderer.render(scene, camera)
	}
	tick()
})