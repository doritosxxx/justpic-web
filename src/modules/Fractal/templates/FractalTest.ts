import { Color } from '../../Drawing'
import Fractal from '../class/Fractal'

class FractalTest extends Fractal {
	iterations:number
	readonly name:string = "Test fractal"
	readonly tag:string = "Test"
	constructor(width:number, height:number, iterations:number){
		super(width, height, iterations)

		// For test.
		this.iterations = 50
		this.setCaption()
	}

	setCaption(){
		this._caption.add('iterations', this.iterations)
	}

	async generate(): Promise<void>{

	}

	/*
	async draw(): Promise<void> {
		const context: RenderingContext = this.getContext()
		const c1:Color = Color.GetRandom()
		const c2:Color = Color.GetRandom()
		const palette:Color[] = Color.GetGradient(c1,c2,this.iterations);

		const Xstep:number = this.size.width/50;

		palette.forEach((color, i)=>{
			context.fillStyle = color.toString();
			context.fillRect(i*Xstep, 0, Xstep, this.size.height);
		})
	}
	*/
}

export default FractalTest;