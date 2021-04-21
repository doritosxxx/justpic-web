import * as THREE from 'three'
const Vector3 = THREE.Vector3

import { renderGUI } from './gui'
import { setEventHandlers } from './events'

import { grabQueryParameters, fractalParameters } from './url'
grabQueryParameters()

import { 
	FractalComplexFunctionChaos,
	FractalComplexFunctionHole,
	FractalComplexFunctionKnot,
	FractalComplexFunctionSphere,
	FractalComplexFunctionWhirl,
} from 'xenium/lib/Fractal/patterns'
import { drawing, Caption, proxies, graphicElements } from 'xenium'
import { Scene, Vector2 } from 'three'
const Color = drawing.Color


let previousSet = new THREE.Group();

function renderFractal(scene: Scene){
	const types = [
		FractalComplexFunctionChaos,
		FractalComplexFunctionHole,
		FractalComplexFunctionKnot,
		FractalComplexFunctionSphere,
		FractalComplexFunctionWhirl
	]

	const side = Math.min(window.innerWidth, window.innerHeight)
	const pointSize = Math.ceil(side/70)
	const fractal = new (types[fractalParameters.t])(
		side, side, 
		fractalParameters.it,
		fractalParameters.z,
		Color.FromHex(fractalParameters.c1),
		Color.FromHex(fractalParameters.c2)
	)

	const caption = new Caption()
	// Ломаем всю идею библиотеки. 
	const proxy = new proxies.StorageProxy()
	fractal.generate(proxy, caption)

	console.log(caption.toString())

	// Render.
	const set = new THREE.Group()
	const vertices: number[] = []
	const colors: number[] = []
	const depth = (fractal.width + fractal.height)/3

	const center = new Vector2(fractal.width/2, fractal.height/2)

	proxy.graphics
		.filter(graphic => graphic instanceof graphicElements.GraphicPoint)
		.map(e => e as graphicElements.GraphicPoint)
		.forEach((point, i) => {		
		vertices.push(
			point.x - center.x,
			point.y - center.y,
			depth/proxy.graphics.length*i - depth/2	
		)
		colors.push( ...point.fillStyle.toArray().map(e=>e/255) )
		
	})

	const geometry = new THREE.BufferGeometry();
	geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) )
	const colorAttribute = new THREE.Float32BufferAttribute( colors, 3 )
	//colorAttribute.setUsage(THREE.DynamicDrawUsage)
	geometry.setAttribute( 'color', colorAttribute )

	const material = new THREE.PointsMaterial({
		size: pointSize,
		vertexColors: true
	})

	const points = new THREE.Points( geometry, material );
	set.add(points)

	scene.remove(previousSet)
	scene.add(set)
	previousSet = set

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

	renderGUI(scene, axis, camera, renderFractal.bind(null, scene))
	setEventHandlers(scene, renderer, camera)
	renderFractal(scene)

	// console.log(renderFractal.bind({}, scene))

	const tick = () => {
		requestAnimationFrame(tick)
		renderer.render(scene, camera)
	}
	tick()
})