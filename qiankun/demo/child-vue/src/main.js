import Vue from 'vue'
import App from './App.vue'
import router from './router'
import singleSpaVue from 'single-spa-vue'

Vue.config.productionTip = false

const appOptions = {
  el: "#vue" , // 挂载到父应用中的 id 为 vue 的标签中
  router,
  render: h => h(App)
}

// 如果是父应用引用我
if(window.singleSpaNavigate){
    __webpack_public_path__ = 'http://localhost:10001/'; // 动态设置子应用路径前缀
 }
 // 子应用独立开发
if(!window.singleSpaNavigate){
  delete appOptions.el;
  new Vue(appOptions).$mount('#app');
}
// 包装一个vue微前端服务对象
const vueLifecycle = singleSpaVue({
  Vue,
  appOptions
})
// 子应用必须导出一下生命周期，相当于协议接入，子应用定义好协议，父应用会调用这些方法
export const bootstrap = vueLifecycle.bootstrap // 启动时
export const mount = vueLifecycle.mount // 挂载时
export const unmount = vueLifecycle.unmount // 卸载时
export default vueLifecycle


// 父应用加载子应用
// bootstrap mount unmount