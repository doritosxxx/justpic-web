class GroupController{
	private readonly group:THREE.Group;

	constructor(group:THREE.Group){
		this.group = group;
		
	}

	private normalizeAngle(angle:number, min:number = 0, max:number = 2*Math.PI) :number {
		const bounds = max-min;
		angle -= min;
		angle %= bounds;
		if(angle < 0)
			angle += bounds
		return angle + min;
	}

	public setX(angle:number) :void{
		this.group.rotation.x = this.normalizeAngle(angle, -Math.PI, Math.PI);
	}

	public setY(angle:number) :void{
		this.group.rotation.y = this.normalizeAngle(angle);
	}

	public setZ(angle:number) :void{
		this.group.rotation.z = this.normalizeAngle(angle);
	}


}

export default GroupController;