interface IAppState {
	camera: {
		type:"perspective" | "orthographic",
		positionZ: number,
	}
}

export default IAppState;