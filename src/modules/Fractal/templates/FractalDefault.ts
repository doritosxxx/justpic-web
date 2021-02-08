import { Color, ColoredPoint } from '../../Drawing'
import Fractal from '../class/Fractal'

class FractalDefault extends Fractal {
	name:string = "Default Fractal"
	tag:string = "Default"

	constructor(width:number, height:number, iterations:number){
		super(width, height, iterations)
		this.setCaption()
	}

	setCaption(){
		
	}

	async generate(): Promise<void>{
		for (let i = 0; i < this.iterations; i++) {
			this.points.push(new ColoredPoint(
				i*20,
				i*10,
				new Color(255, 0,0)
			))
		}
		
	}
}

export default FractalDefault;