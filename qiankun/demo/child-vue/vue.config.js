module.exports = {
    configureWebpack:{
        output:{ // 将子模块打包成类库
            library: 'singleVue', // 打包类库的名字
            libraryTarget:'umd' // window.singleVue.bootstrap/mount/unmount 打包将 export bootstrap/mount/unmount方法挂载在 window 上
        },
        devServer:{
            port: 10001
        }
    }
}