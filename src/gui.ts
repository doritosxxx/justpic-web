import { GUI } from '@jsm/libs/dat.gui.module.js'
import * as THREE from 'three'

function setGUI(data:{
	scene: THREE.Scene,
	set: THREE.Group,
	axis: THREE.Group
}):void{
	const {scene, set, axis} = data

	const gui = new GUI({
		name: "justpic"
	});


	const sceneFolder = gui.addFolder("Scene")
	sceneFolder.add(scene.rotation, "x", -Math.PI/2,  Math.PI/2, 0.01).listen()
	sceneFolder.add(scene.rotation, "y", 0, Math.PI * 2, 0.01).listen()
	sceneFolder.add(scene.rotation, "z", 0, Math.PI * 2, 0.01).listen()
	sceneFolder.open()

	const axisFolder = gui.addFolder("Axis")
	axisFolder.add(axis, "visible")
	axisFolder.open()
}

export default setGUI;