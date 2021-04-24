const path = require("path")
const CopyPlugin = require("copy-webpack-plugin")

module.exports = {
	entry: './src/index.ts',
	mode: "development",
	module:{
		rules :[
			{
				test: /\.ts$/,
				use: "ts-loader",
				include: [path.resolve(__dirname, "src")]
			},
			{
				test: /\.(gltf|bin|png)$/i,
				type: "asset/resource"
			}
		]
	},
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "build"),
		//publicPath: path.resolve(__dirname, "build")
	},
	resolve: {
		extensions: [".ts", ".js"],
		alias:{
			"complex.js$": path.resolve(__dirname, "node_modules/complex.js/complex.min.js"),
			"@jsm" : path.resolve(__dirname, "node_modules/three/examples/jsm")
		}
	},
	devServer: {
		contentBase: path.join(__dirname, "build"),
		port: 8080,
		open: true,

	},
	
	plugins:[
		new CopyPlugin({
			patterns: [
				{ from:"src/index.html", to: "index.html" }
			],
		}),
	]
	
}