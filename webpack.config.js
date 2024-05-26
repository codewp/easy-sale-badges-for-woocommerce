const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const TerserPlugin = require( 'terser-webpack-plugin' );
const CssMinimizerPlugin = require( 'css-minimizer-webpack-plugin' );
const RemoveFilesPlugin = require( './bin/remove-files-webpack-plugin' );
const path = require( 'path' );
const { get } = require( 'lodash' );
const postcssConfig = require( './postcss.config' );

const NODE_ENV = process.env.NODE_ENV || 'development';

/**
 * WordPress dependencies
 */
// const CustomTemplatedPathPlugin = require( '@wordpress/custom-templated-path-webpack-plugin' );

const externals = {
	'@wordpress/hooks': { this: [ 'wp', 'hooks' ] },
	'@wordpress/i18n': { this: [ 'wp', 'i18n' ] },
	'@wordpress/api-fetch': { this: [ 'wp', 'apiFetch' ] },
	react: 'React',
	'react-dom': 'ReactDOM',
	moment: 'moment',
};

const aliases = {
	'@easy-sale-badges/api': path.resolve( __dirname, 'assets/js/dev/api' ),
};

let adminConfig = {
	mode: NODE_ENV,
	entry: {
		admin: './assets/js/dev/admin/index.js',
	},
	output: {
		filename: './assets/js/admin/[name]/index.js',
		path: __dirname,
		library: [ '[modulename]' ],
		libraryTarget: 'this',
	},
	externals,
	module: {
		rules: [
			{
				parser: {
					amd: false,
				},
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{ test: /\.md$/, use: 'raw-loader' },
			{
				test: /\.s?css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: { postcssOptions: postcssConfig },
					},
				],
			},
			{
				test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
				loader: 'url-loader',
			},
		],
	},
	resolve: {
		extensions: [ '*', '.js', '.jsx' ],
		alias: aliases,
	},
	plugins: [
		new MiniCssExtractPlugin( {
			filename: './assets/css/[name]/style.css',
		} ),
	],
};

let frontConfig = {
	mode: NODE_ENV,
	entry: {
		badge: './assets/js/dev/badge/index.js',
	},
	output: {
		filename: './assets/js/[name]/index.js',
		path: __dirname,
		library: [ '[modulename]' ],
		libraryTarget: 'this',
	},
	externals,
	module: {
		rules: [
			{
				parser: {
					amd: false,
				},
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{ test: /\.md$/, use: 'raw-loader' },
			{
				test: /\.s?css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: { postcssOptions: postcssConfig },
					},
				],
			},
			{
				test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
				loader: 'url-loader',
			},
		],
	},
	resolve: {
		extensions: [ '*', '.js', '.jsx' ],
		alias: aliases,
	},
	plugins: [
		new MiniCssExtractPlugin( {
			filename: './assets/css/[name]/style.css',
		} ),
	],
};

let stylingConfig = {
	mode: NODE_ENV,
	entry: {
		badge: './assets/css/scss/badge/style.scss',
	},
	output: {
		path: __dirname,
		filename: `[name]-style.js`,
	},
	module: {
		rules: [
			{ test: /\.md$/, use: 'raw-loader' },
			{
				test: /\.s?css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: { postcssOptions: postcssConfig },
					},
				],
			},
			{
				test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
				loader: 'url-loader',
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin( {
			filename: './assets/css/[name]/style.css',
		} ),
		new RemoveFilesPlugin( `./*style.js` ),
	],
};

const productionConfig = {
	optimization: {
		minimizer: [ new TerserPlugin(), new CssMinimizerPlugin() ],
	},
};

const stylingProductionConfig = {
	optimization: {
		minimizer: [ new CssMinimizerPlugin() ],
	},
};

if ( 'production' === NODE_ENV ) {
	adminConfig = { ...adminConfig, ...productionConfig };
	frontConfig = { ...frontConfig, ...productionConfig };
	stylingConfig = { ...stylingConfig, ...stylingProductionConfig };
} else {
	adminConfig.devtool = process.env.SOURCEMAP || 'source-map';
	frontConfig.devtool = process.env.SOURCEMAP || 'source-map';
	stylingConfig.devtool = process.env.SOURCEMAP || 'source-map';
}

module.exports = [ adminConfig, frontConfig, stylingConfig ];
