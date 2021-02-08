class Size {
	width: number
	height: number
	constructor(width:number, height: number){
		this.width = width
		this.height = height
	}

	toString(){
		return `Size[${this.width},${this.height}]`;
	}
}

export default Size;