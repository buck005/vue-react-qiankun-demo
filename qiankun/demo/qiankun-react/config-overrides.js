module.exports = {
    webpack:(config) => {
        config.output.library = 'reactApp';
        config.output.libraryTarget = 'umd';
        config.output.publicPath = 'http://localhost:20000/'; // 主应用加载子应用打包后的资源路劲前缀，例如：http://localhost:20000/static/js/bundle.js
        return config;
    },
    devServer:(configFunction) => {
        return function(proxy,allowedHost){
            const config = configFunction(proxy,allowedHost);
            // config.port = 20000;
            config.headers = {
                "Access-Control-Allow-origin":'*' // 主应用加载子应用资源是通过 fetch 方式请求，需要允许跨域
            }
            return config;
        }
    }
}