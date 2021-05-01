interface IAppState {
	camera: {
		type:"perspective" | "orthographic",
		positionZ: number,
	},
	fractal: {
		pointSize: number,
	},
}

export default IAppState;