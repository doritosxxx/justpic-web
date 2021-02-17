import Fractal from '../class/Fractal'
import Complex from 'complex.js'
import { Size, ColoredPoint } from '../../Drawing'

import ComplexFunction from '../class/ComplexFunction'

const PI2 = Math.PI * 2;

// Returns float number with precision.
function prec(float:number):string {
	// Two digits after dot. Remove zeros at the end.
	return float.toFixed(2).replace(/\.?0+$/, "")
}

// Adds + before the number.
function pm(str:string):string{
	return (str[0] === '-' ? '' : '+') + str
}

function getRandomInt(max:number):number
function getRandomInt(min:number, max:number):number

function getRandomInt(min:number, max?:number):number {
	if(!max){
		max = min
		min = 0
	}
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

const functions: [string, (z:number,x:number)=>Complex, (z:number)=>string][] = [
	[
		"Whirl",
		(z:number, x:number) => new Complex(0, x*Math.cos(z)).exp().mul(Math.cos(x) * Math.sin(x) * x, 0), 
		(z:number) => `f(x)=xsin(x)cos(x)e^(${prec(Math.cos(z))}xi)`
	],
	[
		"Unnamed",
		(z:number, x:number) => new Complex(0, x*Math.cos(z)).exp().mul(Math.sin(x) * x, 0), 
		(z:number) => `f(x)=xsin(x)e^(${prec(Math.cos(z))}xi)`
	],
	[
		"Sphere",
		(z:number, x:number) => new Complex(0, x*Math.cos(z)).exp().mul(Math.cos(x*(z+1)), 0), 
		(z:number) => `f(x)=cos(${prec(z+1)}x)e^(${prec(Math.cos(z))}xi)`
	],
	[
		"Unnamed2",
		(z:number, x:number) => new Complex(0, x*Math.sin(z)).exp().mul(Math.sin(x+z) * x, 0), 
		(z:number) => `f(x)=xsin(x)e^(${prec(Math.sin(z))}xi)`
	],
	[
		"Chaos",
		(z:number, x:number) => new Complex(Math.cos(x), z*Math.sin(x)).exp().mul( x, 0 ), 
		(z:number) => `f(x)=xe^(cos(x)${pm(prec(z))}sin(x)i)`
	],
	[
		"Hole",
		(z:number, x:number) => new Complex(Math.cos(x), x*Math.sin(z)).exp().mul( z, x ), 
		(z:number) => `f(x)=(${prec(z)}+xi)e^(cos(x)${pm(prec(Math.sin(z)))}xi)`
	],
	[
		"Knot",
		(z:number, x:number) => new Complex(Math.cos(x), x*Math.sin(z)).exp().mul(Math.sin(x)*Math.cos(x), 0 ), 
		(z:number) => `f(x)=sin(x)cos(x)e^(cos(x)${pm(prec(Math.sin(z)))}xi)`
	]

]

function createFunction(z:number, functionId:number):ComplexFunction {
	if(functionId < 0 || functionId >= functions.length)
			throw new RangeError(`functionId must be in range between 0 and ${functions.length-1}`);

	// Декораторы функций для включения z в область видимости.
	// TODO: декоратор - несомненно слово крутое, но тут происходит лютая жесть.
	// Нужно придумать, как сделать этот кусок кода более понятным.
	return new ComplexFunction(
		z,
		functions[functionId][0],
		(x:number)=>functions[functionId][1](z,x),
		() => functions[functionId][2](z)
	);
}

class FractalComplexFunction extends Fractal {
	readonly name:string = "Complex Function Fractal"
	readonly tag:string
	private readonly step:number
	readonly func:ComplexFunction

	constructor(width:number, height:number, z:number, functionId:number, step:number){
		super(width, height, Math.floor(z/step))
		if(z <= 0)
			throw new RangeError("z must be positive")
		if(step <= 0 )
			throw new RangeError("step must be positive")
		
		this.step = step
		this.func = createFunction(z, functionId)
		this.tag = this.func.name
		this.setCaption()
	}

	setCaption(){
		const add = this._caption.add.bind(this._caption)
		add(this.func.name)
		add(this.func.toString())
		add("iterations", prec(this.iterations))
		add("step", prec(this.step))
	}



	async generate(): Promise<void> {
		
		let maxLength = -1;
		const points:Complex[] = []

		for(let x=0, i=0; i < this.iterations; x+=this.step, i++){
			const point:Complex = this.func.invoke(x)
			points.push( point )
			maxLength = Math.max(maxLength, point.abs() )
		}

		const scaledSize = new Size(
			this.width / maxLength / 2, 
			this.height / maxLength / 2
		)

		points.forEach( (point, i) => {
			const coloredScaledPoint = new ColoredPoint(
				point.re * scaledSize.width + this.center.x,
				point.im * scaledSize.height + this.center.y,
				this.palette[i]
			)
			this.points.push(coloredScaledPoint);
		})
		
	}
	

	public static GetRandomParameters():[number, number, number]{
		return [
			// z
			getRandomInt(200, 1000),
			// Function id.
			getRandomInt(functions.length),
			// Step : [0.1; 1.5)
			Math.random()*1.4 + 0.1
		];
	}
}

export default FractalComplexFunction;