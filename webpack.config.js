var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

var config = {
	entry: './app/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index_bundle.js',
		publicPath: '/'
	},
	devtool: 'source-map',
	module: {
		rules: [
			{ test: /\.(js)$/, use: 'babel-loader' },
			{ test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
			{ test: /\.css$/, use: [ 'style-loader', 'css-loader' ]},
			{ test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
				use: [
						{
							loader: 'url-loader',
							options: {
								limit: 10000,
								mimetype: 'application/font-woff'
							}
						}
					]
			},
			{ test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				use: [
					{ loader: 'file-loader' }
				]
			}
		]
	},
	devServer: {
		historyApiFallback: true
	},
	plugins: [ new HtmlWebpackPlugin({
		template: 'app/index.html'
	})]
}

if (process.env.NODE_ENV === 'production') {
	config.plugins.push(
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
			}
		}),
		new webpack.optimize.UglifyJsPlugin()
	)
}

module.exports = config;