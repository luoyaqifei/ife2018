var path = require('path');

const config = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                "test": /\.css/, "use": 'css-loader'
            },
            {
                "test": /\.js/, "use": 'babel-loader'
            }
        ]
    }
};

module.exports = config;