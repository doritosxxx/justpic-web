class Point {
	x: number
	y: number

	constructor(x: number, y: number){
		this.x = x;
		this.y = y;
	}

	toString(){
		return `Point(${this.x}; ${this.y})`
	}

}

export default Point;