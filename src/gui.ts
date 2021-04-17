import { GUI } from '@jsm/libs/dat.gui.module.js'
import * as THREE from 'three'
import { BufferGeometry } from 'three'


function setGUI(data:{
	camera: THREE.Camera
	scene: THREE.Scene,
	set: THREE.Group,
	axis: THREE.Group,
	settings : {
		autoRotationEnabled: boolean,
		flatView: boolean,
		cameraZ: number,
	}
}):GUI{
	const {scene, set, axis, camera, settings} = data

	const gui = new GUI({
		name: "justpic"
	})

	const sceneFolder = gui.addFolder("Scene")
	sceneFolder.add(scene.rotation, "x", -Math.PI/2,  Math.PI/2, 0.01).listen()
	sceneFolder.add(scene.rotation, "y", 0, Math.PI * 2, 0.01).listen()
	sceneFolder.add(scene.rotation, "z", 0, Math.PI * 2, 0.01).listen()
	sceneFolder.add(settings, "cameraZ").min(300).max(900).name("camera").listen()
	sceneFolder.open()


	const settingsFolder = gui.addFolder("Settings")
	settingsFolder.add(axis, "visible").name("Show axis")
	settingsFolder.add(settings, "autoRotationEnabled").name("Auto rotation")
	settingsFolder.add(settings, "flatView").name("2D")


	return gui;
}

export default setGUI;