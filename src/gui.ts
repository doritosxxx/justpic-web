import dat from '@jsm/libs/dat.gui.module.js'
import type {Scene, Group, Camera} from 'three'

import { patterns } from 'xenium'
const FractalComplexFunction = patterns.FractalComplexFunctionChaos

import { updateQueryParameter, fractalParameters } from './url'


const PI2 = Math.PI * 2

function renderGUI(
	scene: Scene,
	axis: Group,
	camera: Camera,
	rerender: ()=>void
){	
	const gui = new dat.GUI()
	
	{
		const folder = gui.addFolder("Fractal settings")
		folder.addColor(fractalParameters, "c1")
			.name("Color 1")
			.onChange(color => {
				updateQueryParameter("c1", color)
				rerender()
			})

		folder.addColor(fractalParameters, "c2")
			.name("Color 2")
			.onChange(color => {
				updateQueryParameter("c2", color)
				rerender()
			})

		folder.add(fractalParameters, "it")
			.min(FractalComplexFunction.iterationRange[0])
			.max(FractalComplexFunction.iterationRange[1])
			.step(1)
			.name("Iterations")
			.onChange(iterations => {
				updateQueryParameter("it", iterations)
				rerender()
			})

		folder.add(fractalParameters, "z")
			.min(FractalComplexFunction.zRange[0])
			.max(FractalComplexFunction.zRange[1])
			.step(1)
			.onChange(z => {
				updateQueryParameter("z", z)
				rerender()
			})
			
		folder.open()
	}

	{
		const folder = gui.addFolder("Scene")
		folder.add(scene.rotation, "x").min(-Math.PI/2).max(Math.PI/2).step(0.01).listen()
		folder.add(scene.rotation, "y").min(0).max(PI2).step(0.01).listen()
		folder.add(scene.rotation, "z").min(0).max(PI2).step(0.01).listen()
		folder.add(camera.position, "z").min(300).max(900).name("camera").listen()
		folder.open()
	}

	{
		const folder = gui.addFolder("Settings")
		folder.add(axis, "visible").name("Show axis")
		folder.open()
	}

	return gui;
}


export { renderGUI };