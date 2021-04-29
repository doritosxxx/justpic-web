import type { Scene, WebGLRenderer, PerspectiveCamera, } from 'three'
import { Vector2,  } from 'three'

import state from './state'

let previousPoint = new Vector2(0,0)
let isMouseMoving = false

let isZooming = false
let previousZoomDistance = 0

function distance(p1:Vector2, p2:Vector2): number{
	return Math.hypot(p1.x-p2.x, p1.y-p2.y);
}

// Main export function.
function setEventHandlers(
	scene: Scene,
	renderer: WebGLRenderer,
	camera: PerspectiveCamera
){
	const canvas = renderer.domElement

	window.addEventListener("resize", onWindowResize)

	canvas.addEventListener("mousedown", onMoveStart )
	canvas.addEventListener("mouseup", onMoveEnd)
	canvas.addEventListener("mousemove", onMove)
	canvas.addEventListener("wheel", onZoom)

	// TODO: Протестировать события на мобильных устройствах.
	canvas.addEventListener("touchstart", onTouchStart )
	canvas.addEventListener("touchend", onTouchEnd )
	canvas.addEventListener("touchcancel", onTouchEnd)
	canvas.addEventListener("touchmove", onTouchMove)

	//#region handlers
	function onWindowResize(){
		const width = window.innerWidth
		const height = window.innerHeight
	
		camera.aspect = width/height
		camera.updateProjectionMatrix()

		renderer.setSize(width, height)
	}

	function onMoveStart(e: MouseEvent|TouchEvent){
		isMouseMoving = true

		// Mouse.
		if(e instanceof MouseEvent){
			previousPoint.x = e.clientX
			previousPoint.y = e.clientY
		}
		// Touchscreen.
		else if(e instanceof TouchEvent){
			previousPoint.x = e.touches[0].clientX
			previousPoint.y = e.touches[0].clientY
		}
	}

	function onMove(e: MouseEvent|TouchEvent){
		if(!isMouseMoving) return;

		const movement = new Vector2(0,0)

		if(e instanceof MouseEvent){
			movement.x = e.clientX - previousPoint.x,
			movement.y = e.clientY - previousPoint.y
			previousPoint.x = e.clientX
			previousPoint.y = e.clientY
		}
		else if(e instanceof TouchEvent){
			let touch = new Vector2(e.touches[0].clientX, e.touches[0].clientY)

			movement.x = touch.x - previousPoint.x
			movement.y = touch.y - previousPoint.y
			previousPoint = touch
		}

		// Btw idk why x+y and y+x.
		const rotation = new Vector2(
			scene.rotation.x + movement.y/100,
			scene.rotation.y + movement.x/100,
		)

		// Limit the X axis (top-bottom) rotation beteen -pi/2 and pi/2 to fix incorrect Y axis rotation. 
		rotation.x = Math.max(-Math.PI/2, Math.min(Math.PI/2, rotation.x))
		// Make the Y axis cycled in [0, pi).
		rotation.y = (rotation.y + 2*Math.PI) % (2*Math.PI)

		scene.rotation.x = rotation.x
		scene.rotation.y = rotation.y
	}

	function onMoveEnd(){
		isMouseMoving = false
	}

	
	function onZoomStart(e: TouchEvent){
		isZooming = true
		
		const [p1, p2] = [e.touches.item(0), e.touches.item(1)]
		if(p1 === null || p2 === null)
			return;

		previousZoomDistance = Math.hypot(p1.clientX - p2.clientX, p1.clientY - p2.clientY)
	}

	function onZoomEnd(){
		isZooming = false
	}

	function onZoom(e: WheelEvent|TouchEvent){
		let deltaY = 0;

		if(e instanceof WheelEvent){
			deltaY = (e.deltaY)/6
		}
		else if(e instanceof TouchEvent){
			if(!isZooming)return;

			const [p1, p2] = [e.touches.item(0), e.touches.item(1)]

			if(p1 === null || p2 === null)
				return;

			const dist = Math.hypot(p1.clientX - p2.clientX, p1.clientY - p2.clientY);
			deltaY = previousZoomDistance - dist
			previousZoomDistance = dist

		}

		state.camera.positionZ = Math.max(300, Math.min(state.camera.positionZ + deltaY, 900 ))
		
	}

	function onTouchStart(e:TouchEvent){
		if(e.touches.length == 1)
			onMoveStart(e)
		else if(e.touches.length == 2)
			onZoomStart(e)
	}

	function onTouchEnd(e:TouchEvent){
		if(e.touches.length == 1)
			onMoveEnd()
		else if(e.touches.length == 2)
			onZoomEnd()
	}

	function onTouchMove(e:TouchEvent){
		if(e.touches.length == 1)
			onMove(e)
		else if(e.touches.length == 2)
			onZoom(e)
	}

	//#endregion handlers
}

export { setEventHandlers };