import Color from './Color'
import Point from './Point'

class ColoredPoint extends Point {
	public color:Color

	constructor(x:number, y:number, color:Color){
		super(x,y)
		this.color = color
	}

	toString(){
		return `ColoredPoint(${this.x}; ${this.y})${this.color}`
	}
}

export default ColoredPoint;