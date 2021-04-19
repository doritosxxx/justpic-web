import state from './state'
import dat from '@jsm/libs/dat.gui.module.js'

import { patterns } from 'xenium'
const FractalComplexFunction = patterns.FractalComplexFunctionChaos

import { updateQueryParameter } from './url'

const PI2 = Math.PI * 2

function renderGUI(){	
	const gui = new dat.GUI()
	
	{
		const folder = gui.addFolder("Fractal settings")
		folder.addColor(state.fractalSettings, "color1")
			.name("Color 1")
			.onFinishChange(color => {
				updateQueryParameter("c1", color)
			})
		folder.addColor(state.fractalSettings, "color2")
			.name("Color 2")
			.onFinishChange(color => {
				updateQueryParameter("c2", color)
			})
		folder.add(state.fractalSettings, "iterations")
			.min(FractalComplexFunction.iterationRange[0])
			.max(FractalComplexFunction.iterationRange[1])
			.step(1)
			.name("Iterations")
			.onFinishChange(iterations => {
				updateQueryParameter("it", iterations)
			})
		folder.add(state.fractalSettings, "z")
			.min(FractalComplexFunction.zRange[0])
			.max(FractalComplexFunction.zRange[1])
			.step(1)
			.onFinishChange(z => {
				updateQueryParameter("z", z)
			})
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

	return gui;
}


export { renderGUI };