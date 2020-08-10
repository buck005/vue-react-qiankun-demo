module.exports = {
    devServer:{
        port: 8888,
        headers:{
            'Access-Control-Allow-origin':'*' // 主应用加载子应用资源是通过 fetch 方式请求，需要允许跨域
        }
    },
    configureWebpack:{
        output:{
            library:'vueApp',
            libraryTarget: 'umd'
        }
    }
}