var path = require('path');

var config = {
    entry: path.resolve(__dirname, 'src/main.jsx'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            'actions': path.resolve(__dirname, './src/flux/actions'),
            'stores': path.resolve(__dirname, './src/flux/stores'),
            'components': path.resolve(__dirname, './src/components'),
            'services': path.resolve(__dirname, './src/services')
        }
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader?presets[]=es2015,presets[]=react,presets[]=stage-0',
                options: {
                    presets: ['es2015', 'react', 'stage-0'],
                    plugins: ['transform-class-properties']
                }
            },
        }, {
            test: /\.css$/, // Only .css files
            loaders: ['style-loader', 'css-loader'] // Run both loaders
        }],
    }
};


module.exports = config;
