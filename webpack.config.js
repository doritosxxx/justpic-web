const path = require("path")

module.exports = {
	entry: './src/index.ts',
	module:{
		rules :[
			{
				test: /\.ts$/,
				use: "ts-loader",
				include: [path.resolve(__dirname, "src")]
			}
		]
	},
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "build"),
		publicPath: path.resolve(__dirname, "build")
	},
	mode: "development",
	resolve: {
		extensions: [".ts"],
		alias:{
			"complex.js$": path.resolve(__dirname, "node_modules/complex.js/complex.min.js")
		}
	}
}