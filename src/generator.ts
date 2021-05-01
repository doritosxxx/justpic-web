import * as THREE from 'three'

import Color from 'xenium/lib/Drawing/Color'
import {
	complexFractalTypeList,
	Caption, StorageProxy, GraphicPoint
} from 'xenium'
import { fractalParameters } from './url'
import state from './state'


const { Vector2 } = THREE


function generateFractal(): THREE.Group{

	const side = Math.min(window.innerWidth, window.innerHeight)
	const pointSize = state.fractal.pointSize

	const fractalType = complexFractalTypeList[fractalParameters.t]
	const fractal = new fractalType(
		side, side, 
		fractalParameters.it,
		fractalParameters.z,
		Color.FromHex(fractalParameters.c1),
		Color.FromHex(fractalParameters.c2)
	)

	const caption = new Caption()
	// Ломаем всю идею библиотеки. 
	const proxy = new StorageProxy()
	fractal.generate(proxy, caption)

	// Render.
	const set = new THREE.Group()
	const vertices: number[] = []
	const colors: number[] = []
	const depth = (fractal.width + fractal.height)/3

	const center = new Vector2(fractal.width/2, fractal.height/2)

	proxy.graphics
		.filter(graphic => graphic instanceof GraphicPoint)
		.map(e => e as GraphicPoint)
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
	geometry.setAttribute( 'color', colorAttribute )

	const material = new THREE.PointsMaterial({
		size: pointSize,
		vertexColors: true
	})

	const points = new THREE.Points( geometry, material );
	set.add(points)

	return set;

}

export { generateFractal }
