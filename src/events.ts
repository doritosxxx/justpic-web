import GroupController from './controller'
import * as THREE from 'three'

import IPoint2D from './class/IPoint2D'
import {distance} from './functions'


export default function setEvents(objects:{
	scene: THREE.Scene,
	renderer: THREE.WebGLRenderer,
	camera: THREE.PerspectiveCamera,
}){
	const {scene, renderer, camera} = objects
	const canvas = renderer.domElement

	// Warning. Scene may be not a Group instance.
	const sceneController = new GroupController(scene as unknown as THREE.Group);
	let isMoving = false
	let previousPoint: IPoint2D = {
		x: 0,
		y: 0
	}

	window.addEventListener("resize", function(){
		const width = this.innerWidth
		const height = this.innerHeight

		camera.aspect = width/height
		camera.updateProjectionMatrix()

		renderer.setSize(width, height)
	})

	// Mouse events.
	canvas.addEventListener("mousedown", startMoveHandler )
	canvas.addEventListener("mouseup", endMoveHandler)
	canvas.addEventListener("mousemove", moveHandler)

	// Touch events.
	canvas.addEventListener("touchstart", startMoveHandler )
	canvas.addEventListener("touchend", endMoveHandler )
	canvas.addEventListener("touchcancel", endMoveHandler)
	canvas.addEventListener("touchmove", moveHandler) 
	
	// Events.

	

	function moveHandler(e :MouseEvent|TouchEvent){
		if(!isMoving) return;

		let movement: IPoint2D = {
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
			let nearestPoint:IPoint2D = {
				x: e.touches[0].clientX,
				y: e.touches[0].clientY
			}

			for(let i=1; i<e.touches.length; i++){
				const currentPoint:IPoint2D = {
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
		const rotation:IPoint2D = {
			x: scene.rotation.x + movement.y/100,
			y: scene.rotation.y + movement.x/100
		}

		rotation.x = Math.max(-Math.PI/2, Math.min(Math.PI/2, rotation.x))

		sceneController.setX(rotation.x)
		sceneController.setY(rotation.y)

	}

	function startMoveHandler(e :MouseEvent|TouchEvent){
		isMoving = true
		const point:IPoint2D = {
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
}