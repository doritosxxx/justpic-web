import state from './state'
import dat from '@jsm/libs/dat.gui.module.js'

const PI2 = Math.PI * 2

function render(){	
	const gui = new dat.GUI()
	
	// fractal settings 
	{
		const folder = gui.addFolder("Fractal settings")
		folder.addColor(state.fractalSettings, "color1").name("Color 1")
		folder.addColor(state.fractalSettings, "color2").name("Color 2")
		folder.open()
	}

	{
		const folder = gui.addFolder("Scene")
		folder.add(state.scene, "x").min(-PI2).max(PI2).step(0.01).listen()
		folder.add(state.scene, "y").min(0).max(PI2).step(0.01).listen()
		folder.add(state.scene, "z").min(0).max(PI2).step(0.01).listen()
		folder.add(state.scene, "camera").min(300).max(900).listen()
		folder.open()
	}

	{
		const folder = gui.addFolder("Settings")
		folder.add(state.settings, "showAxis").name("Show axis")
		folder.open()
	}
}


export { render };