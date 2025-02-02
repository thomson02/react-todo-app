const path = require("path")
const glob = require("glob")

module.exports = {
  entry: {
    "bundle.js": glob.sync("build/static/?(js|css)/main.*.?(js|css)").map(f => path.resolve(__dirname, f)),
  },
  output: {
    filename: "bundle.min.js",
  },
  module: {
	loaders: [
		{ test: /\.css$/, loader:"style-loader!css-loader" }
	]
  }
}