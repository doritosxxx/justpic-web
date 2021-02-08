interface IColorComponents{
	r: number
	g: number
	b: number
}

class Color implements IColorComponents{
	r: number
	g: number
	b: number
	constructor(r :number, g: number, b: number){
		r = Math.trunc(r)
		g = Math.trunc(g)
		b = Math.trunc(b)
		if(r < 0 || r > 255)throw new RangeError("'r' must be in [0,255]. Got " + r)
		if(g < 0 || g > 255)throw new RangeError("'g' must be in [0,255]. Got " + g)
		if(b < 0 || b > 255)throw new RangeError("'b' must be in [0,255]. Got " + b)

		this.r = r
		this.g = g
		this.b = b

	}

	toString(){
		const {r,g,b} = this
		return '#' + ((r << 16) + (g << 8) + b).toString(16).padStart(6,'0');
	}

	static FromString(string: string):Color{
		if(string[0] === '#')
			string  = string.substr(1)
		if(string.length === 3)
			string = string.split("").map(char=>char+char).join("")

		const dec:number = parseInt(string, 16)

		if(Number.isNaN(dec))
			throw new RangeError("Specified value doesn't represents existing color");
		
		return this.FromNumber(dec)
	}

	static GetGradient(fromColor:Color, toColor:Color, length:number):Color[]{
		const gradient:IColorComponents[] = Array(length)
		gradient[0] = fromColor

		const stepR:number = (toColor.r - fromColor.r)/(length-1)
		const stepG:number = (toColor.g - fromColor.g)/(length-1)
		const stepB:number = (toColor.b - fromColor.b)/(length-1)

		for(let i=1; i<length; i++){
			gradient[i] = {
				r: gradient[i-1].r + stepR,
				g: gradient[i-1].g + stepG,
				b: gradient[i-1].b + stepB,
			}
		}
		
		return gradient.map(color => new Color(color.r, color.g, color.b));

	}

	static FromNumber(hex:number):Color{
		const parts:[number,number,number] = [(hex >> 16)%255, (hex >> 8)%255, hex%255]
		return new Color(...parts);
	}

	static GetRandom():Color {
		const random = Math.random()
		const dec:number = random * ((1 << 24) - 1)
		return Color.FromNumber(dec)
	}

}

export default Color;