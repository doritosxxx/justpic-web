import dat from '@jsm/libs/dat.gui.module.js'

type BooleanObject = Record<any, boolean>

// TODO: rewrite as GUIController.

function addRadio(this: dat.GUI, name:string, target:BooleanObject, onChange: (property:string) => void ){
	const folder = this.addFolder(name)


	let activeController: dat.GUIController|null =  null;

	for(let property of Object.keys(target)){
		const controller = folder
			.add(target, property)
			.name(property.replace("FractalComplexFunction", ""))
			.onChange( function(this: dat.GUIController, value: boolean){
				if(activeController === null)
					return;

				if(activeController == this){
					if(value === false)
						this.setValue(true)
					return;
				}
				if(value === false)
					return;

				const activeControllerCopy = activeController
				activeController = this
				activeControllerCopy.setValue(false)

				onChange(property)
				
			})
		
		if(target[property] === true)
			if(activeController === null)
				activeController = controller;
			else 
				target[property] = false;
	}

	if(activeController === null && Object.keys(target).length !== 0){
		activeController = folder.__controllers[0]
		activeController.setValue(true)
	}

	
	return folder;
}

export default addRadio;