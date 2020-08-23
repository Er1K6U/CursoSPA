// Nos permite traer path de NODE nos permite acceder a donde se
// encuentre el proyecto 
const path = require('path');
// Archivno necesario para trabajar con html 
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");

// Modulo que vamos a esportar donde biene cada configuracion 
module.exports = {
    // Objeto donde vive la configuracion, donde va a vivir nuestro codigo
    entry: './src/index.js',
    // Listo par mandar a produccion
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.js'],
    },
    module: {
            rules:[
                    {
                        test: /\.js?$/,
                        exclude: /node_modules/,
                        use:{
                            loader: 'babel-loader',
                        }
                    }
                ]
            },
    
    plugins: [
        new HtmlWebpackPlugin(
            {
                inject: true,
                template: './public/index.html',
                filename: './index.html',
            }
        ),
        new CopyWebpackPlugin({
            patterns: [{from: './src/styles/styles.css',
            to: ''}],
        })
    ]
    // Donde vamos a poner el proyecto compilado
}