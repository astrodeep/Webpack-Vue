let path = require('path');
let webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let globImporter = require('node-sass-glob-importer');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let autoprefixer = require('autoprefixer');
let CopyPlugin = require('copy-webpack-plugin');
let VueLoaderPlugin = require('vue-loader/lib/plugin');
let { CleanWebpackPlugin } = require('clean-webpack-plugin');
let conf = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'

    },
    devServer: {
        overlay: true,
        port: 3010
    },
    module: {
        rules: [
            {
                test:/\.(js|jsx)$/,
                loader: "babel-loader",
                exclude:"/node_modules/"
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        'scss': 'vue-style-loader!css-loader!sass-loader',
                        'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                    }
                }

            },

            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract([
                    {
                        loader: 'css-loader'
                    },

                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                autoprefixer({
                                    browsers:['ie >= 8', 'last 4 version']
                                })
                            ],
                            sourceMap: true
                        }
                    },


                    {
                        loader: 'sass-loader',
                        options: {
                            importer: globImporter()
                        }
                    }
                ])
            },


            {
                test: /\.(pug|jade)$/,
                loader: 'pug-loader',
                options: {
                    pretty: true
                }
            },

            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                },
            },
            {
                loader: 'image-webpack-loader',
                options: {
                    mozjpeg: {
                        progressive: true,
                        quality: 70
                    }
                }
            },

            {
                test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]'
                    }
                }]
            }

        ]

    },
    plugins: [
        new CleanWebpackPlugin(),
        new ExtractTextPlugin({
            filename: 'style.css'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.pug'
        }),
        new webpack.ProvidePlugin({
        /*    $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"*/
        }),
        new VueLoaderPlugin(),
        new CopyPlugin([
            {from:'src/images',to:'images'},
            {from:'src/fonts',to:'fonts'}
        ]),
    ]

};

module.exports = conf;




