import { patterns } from 'xenium'
const FractalComplexFunction = patterns.FractalComplexFunctionChaos

// TODO: relocate this import to the library.
import { randomInRange } from 'xenium/lib/functions'

// color1 | color2 | iterations | z | type
type UrlQueryKey = "c1" | "c2" | "it" | "z" | "t"

type QueryPair = [UrlQueryKey, number]

interface ISearchEntries {
	c1: number,
	c2: number,
	it: number,
	z: number,
	t: number,
}

function isQueryKey(key:string) : key is UrlQueryKey {
	return ["c1", "c2", "it", "z", "t"].includes(key);
}

class QueryParameters implements ISearchEntries{
	c1: number
	c2: number
	it: number
	z: number
	t: number

	constructor(c1?:number, c2?:number, it?:number, z?:number, t?:number){
		this.c1 = c1 ?? defaultValue("c1")
		this.c2 = c2 ?? defaultValue("c2")
		this.it = it ?? defaultValue("it")
		this.z = z ?? defaultValue("z")
		this.t = t ?? defaultValue("t")
	}

}

const fractalParameters: ISearchEntries = new QueryParameters()

function valid(key: UrlQueryKey, value: number): boolean{
	switch(key){
		case "c1":
		case "c2":
			return  0 <= value && value < 0xffffff;
		case "it":
			return FractalComplexFunction.iterationRange[0] <= value && value <= FractalComplexFunction.iterationRange[1];
		case "z":
			return FractalComplexFunction.zRange[0] <= value && value <= FractalComplexFunction.zRange[1];
		case "t":
			// Amount of Complex fractals.
			return  0 <= value && value < 5;
	}
}

function defaultValue(key: UrlQueryKey): number{
	switch(key){
		case "c1":
		case "c2":
			return randomInRange(0, 0xffffff);
		case "it":
			return randomInRange(FractalComplexFunction.iterationRange[0], FractalComplexFunction.iterationRange[1]);
		case "z":
			return randomInRange(FractalComplexFunction.zRange[0], FractalComplexFunction.zRange[1]);
		case "t":
			return randomInRange(0,4);
	}
}

function grabQueryParameters(){
	const searchString = window.location.search
	
	searchString
		.slice(1)
		.split("&")
		.map(entry => entry.split("="))
		.filter(entry => entry.length > 0 && isQueryKey(entry[0]))
		.map(pair => [pair[0], pair.length == 1 ? 0 : +pair[1]] as QueryPair)
		.forEach((pair:QueryPair) => fractalParameters[pair[0]] = pair[1] )

	setQueryParameters()
	
}

function setQueryParameters(){
	const newurl = location.origin + "?" + Object.entries(fractalParameters).map(pair => pair[0]+"="+pair[1]).join("&")
	window.history.pushState({url:newurl},'', newurl)
}


function updateQueryParameter(key: UrlQueryKey, value: number){
	if(!valid(key, value))
		return;

	fractalParameters[key] = value;
}

export {
	fractalParameters,
	grabQueryParameters,
	updateQueryParameter,
	setQueryParameters,
}
