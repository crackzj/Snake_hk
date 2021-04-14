const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  entry:"./src/main.ts",
  output:{
    path: path.resolve(__dirname,'dist'),
    filename:"bundle.js",
    environment:{
      // arrowFunction: false
    }
  },
  module:{
    rules:[
      {
        test:/\.ts$/,
         use:[
          {
         loader:'babel-loader',
         options:{
          presets: [
            ['@babel/preset-env', { targets: "defaults" }]
          ],
          plugins: ['@babel/plugin-proposal-class-properties']
         }
        },
          'ts-loader'],
        exclude: /node_modules/
      },
      {
        test:/\.scss/,
        use:['style-loader','css-loader',
        {
          loader:'postcss-loader',
          options:{
           postcssOptions:{
             plugins:[
               [
                 "postcss-preset-env",
                 {
                   browsers: 'last 3 versions'
                 }
               ]
             ]
           }
          }
        },
        'sass-loader']
      }
    ]
  },
  resolve:{
    extensions:['.ts','.js','.scss','.css']
  },
  plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(
      {
        title:'this is a custom title',
        template: path.resolve(__dirname,'public/index.html')
      }
    )
  ],
  devServer:{
    contentBase:"./src/assets",
    compress: true,
    port: 9000,
    
  }
}