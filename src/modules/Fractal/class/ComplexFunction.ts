import Complex  from "complex.js";

class ComplexFunction {
	constructor(
		readonly z:number,
		readonly name:string,
		readonly invoke:(x:number)=>Complex,
		readonly toString:()=>string
	){}
}

export default ComplexFunction;