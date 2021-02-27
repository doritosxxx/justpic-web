import * as THREE from 'three'
const Vector3 = THREE.Vector3
import { FractalComplexFunction } from './modules/Fractal'
import GroupController from './controller'

import setGUI from './gui'

interface Point2D {
	x:number
	y:number
}

// Distance between 2 2D points.
const distance = (p1:Point2D, p2:Point2D) => Math.sqrt((p1.x-p2.x)**2 + (p1.y-p2.y)**2)


 
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
	scene.add(axis)

	// Gui.

	setGUI({
		set,
		scene,
		axis
	});

	window.addEventListener("resize", function(){
		const width = this.innerWidth
		const height = this.innerHeight

		camera.aspect = width/height
		camera.updateProjectionMatrix()

		renderer.setSize(width, height)
	})

	// Controls.

	// Warning. Scene may be not a Group instance.
	const sceneController = new GroupController(scene as unknown as THREE.Group);
	let isMoving = false
	let previousPoint: Point2D = {
		x: 0,
		y: 0
	}


	function moveHandler(e :MouseEvent|TouchEvent){
		if(!isMoving) return;

		let movement: Point2D = {
			x: 0,
			y: 0,
		}

		// If user uses mouse.
		if(e instanceof MouseEvent){
			movement.x = e.clientX - previousPoint.x,
			movement.y = e.clientY - previousPoint.y
			previousPoint = {
				x: e.clientX,
				y: e.clientY,
			}
		}
		// If user uses touchscreen.
		else if(e instanceof TouchEvent){
			let nearestPoint:Point2D = {
				x: e.touches[0].clientX,
				y: e.touches[0].clientY
			}

			for(let i=1; i<e.touches.length; i++){
				const currentPoint:Point2D = {
					x: e.touches[i].clientX,
					y: e.touches[i].clientY
				}
				if(distance(previousPoint, currentPoint) < distance(previousPoint, nearestPoint))
					nearestPoint = currentPoint;
			}

			// Delta.
			movement = {
				x: nearestPoint.x - previousPoint.x,
				y: nearestPoint.y - previousPoint.y,
			}
			previousPoint = nearestPoint
		}
		else throw new Error("Incorrect event type");

		// Limit the X axis (top-bottom) rotation beteen -pi/2 and pi/2 to fix incorrect Y axis rotation. 
		const rotation:Point2D = {
			x: scene.rotation.x + movement.y/100,
			y: scene.rotation.y + movement.x/100
		}

		rotation.x = Math.max(-Math.PI/2, Math.min(Math.PI/2, rotation.x))

		sceneController.setX(rotation.x)
		sceneController.setY(rotation.y)

	}

	function startMoveHandler(e :MouseEvent|TouchEvent){
		isMoving = true
		const point:Point2D = {
			x:0,
			y:0,
		}

		// If user uses mouse.
		if(e instanceof MouseEvent){
			point.x = e.clientX
			point.y = e.clientY
		}
		// If user uses touchscreen.
		else if(e instanceof TouchEvent){
			point.x = e.touches[0].clientX
			point.y = e.touches[0].clientY
		}
		else throw new Error("Incorrect event type");

		previousPoint = point
	}

	function endMoveHandler(){
		isMoving = false
	}

	// Mouse events.
	canvas.addEventListener("mousedown", startMoveHandler )
	canvas.addEventListener("mouseup", endMoveHandler)
	canvas.addEventListener("mousemove", moveHandler)

	// Touch events.
	canvas.addEventListener("touchstart", startMoveHandler )
	canvas.addEventListener("touchend", endMoveHandler )
	canvas.addEventListener("touchcancel", endMoveHandler)
	canvas.addEventListener("touchmove", moveHandler) 
	

	const tick = () => {
		requestAnimationFrame(tick)
		renderer.render(scene, camera)

		//sceneController.setY(scene.rotation.y +1/100)
		//sceneController.setZ(scene.rotation.z +1/100)

	}
	tick()
})