import FractalData from "./FractalData"
import { Point, Color, ColoredPoint } from '../../Drawing'
import { Caption } from '../../Utils'


abstract class Fractal implements FractalData {
	readonly iterations: number
	readonly width: number
	readonly height: number
	readonly center: Point
	
	protected readonly palette: Color[]
	readonly penSize: number
	readonly points: ColoredPoint[] = []

	abstract readonly name: string
	protected abstract readonly tag: string
	protected readonly  _caption: Caption = new Caption()


	constructor(width :number, height: number, iterations: number){
		if(width <= 0)
			throw new RangeError("width of an image must be greater than 0")
		if(height <= 0)
			throw new RangeError("height of an image must be greater than 0")
		if(iterations < 0)
			throw new RangeError("iteration count must be not less than 0")

		this.iterations = iterations
		this.palette = Color.GetGradient(Color.GetRandom(), Color.GetRandom(), iterations)
		this.width = width
		this.height = height
		this.penSize = Math.round((width + height)/2 /1000*4)
		this.center = new Point(Math.trunc(width/2), Math.trunc(height/2))
	}

	abstract generate(): Promise<void>
	
	protected abstract setCaption(): void 

	async saveTo(path: string){
		//const buffer = this.canvas.toBuffer('image/png')
  		//await fs.writeFile(path, buffer)
		console.log("not implemented")
	}

	get caption(): string{
		// TODO: Разобраться с тэгами.
		//return `${this.name}. #${Config.GROUP_NAME}@${this.tag} ${this._caption.toString()}`
		return `${this.name}. ${this._caption.toString()}. ${this.getColorsRange()} `
	}

	private getColorsRange(){
		return `colors: ${this.palette[0]} - ${this.palette[this.palette.length-1]}`
	}
}

export default Fractal;