type pairOrSingle = [string]|[string, string|number]

class Caption {
	private data:pairOrSingle[] = [] 
	private keyValueDelimeter = ": "
	private entryDelimeter = " "

	add(key:string, value:string|number):void
	add(value:string|number):void
	add(key:string, value?:string|number):void {
		if(!value)
			this.data.push([key])
		else 
			this.data.push([key, value])
	}

	toString(){
		return this.data
			.map(entry=> entry.length == 1 ? entry[0] : entry.join(this.keyValueDelimeter))
			.join(this.entryDelimeter)
	}
}

export default Caption