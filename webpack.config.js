const fs = require('fs');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const packageInfo = require('./package.json');

const outputPath = path.join(__dirname, 'lib');
const srcPath = path.join(__dirname, 'src');
const componentsPath = path.join(srcPath, 'components');
const keepCSSFileReference = true;

const componentExternals = [];
const entryPoints = {
  index: './src/components/index.js'
};

// Assign entry points and externals
fs.readdirSync(componentsPath)
  .filter(x => x !== '.DS_Store' && x !== 'index.js' && !x.match(/\.md/))
  .forEach(component => {
    /* define component entry points  */
    entryPoints[component] = [`./src/components/${component}`];
    /* extern individual Components for smaller code */
    componentExternals.push(`../${component}`);
  });

const externals = []
  .concat(Object.keys(packageInfo.dependencies))
  .concat(componentExternals);

module.exports = {
  entry: entryPoints,
  output: {
    path: outputPath,
    filename: '[name]/index.js',
    publicPath: '/dist/',
    library: packageInfo.name,
    libraryTarget: 'commonjs2'
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'lib/index')],
    extensions: ['.js', '.jsx']
  },
  externals,
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new ExtractTextPlugin(
      '[name]/[name].css?[hash]-[chunkhash]-[contenthash]-[name]',
      {
        disable: false,
        allChunks: true,
        keepCSSFileReference
      }
    ),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/react']
        },
        include: srcPath
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.svg$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      }
    ]
  }
};
