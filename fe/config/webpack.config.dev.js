const path=require('path');
const htmlWeb=require('html-webpack-plugin');
const copyWeb=require('copy-webpack-plugin');

module.exports = {
    mode:"production",
    entry:"./src/app.js",
    output:{
        path:path.resolve(__dirname,'../dev'),
        filename:'app.js'
    },
    devServer:{
        contentBase:path.resolve(__dirname,'../dev'),
        port:8000
    },
    plugins:[
        new htmlWeb({
            template:'./index.html',
            filename:'index.html'
        }),
        new copyWeb([{
            from:'./public',
            to:'./public'
        }])
    ],
    module:{
        rules:[
            {
                test:/\.art$/,
                loader:'art-template-loader',
            }
        ]
    }
    
}