const path = require('path')

var htmlWebpackPlugin = require('html-webpack-plugin');

const VueLoaderPlugin = require('vue-loader/lib/plugin')


module.exports = {
    plugins: [ // 节点配置插件
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'), 
            filename: 'index.html'
        }),
        new VueLoaderPlugin({

        })
    ],
    module : { //配置第三方模块
        rules : [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader','less-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader','sass-loader'] },
            { test:/\.(jpg|webp|gif|png|jpeg|bmp)$/,use:'url-loader'},
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' },
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            { test:/\.vue$/, use: 'vue-loader' }
        ]
    },
    resolve: {
        alias: { // 修改 Vue 被导入时候的包的路径
        //   "vue$": "vue/dist/vue.js"
        }
      }
}