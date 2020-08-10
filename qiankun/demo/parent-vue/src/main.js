import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { registerApplication, start } from 'single-spa';

Vue.config.productionTip = false

const loadScript = async (url) => {
  return new Promise((resolve,reject) => {
    let script = document.createElement('script');
    script.src = url;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  })
}
// singleSpa 缺陷 不够灵活 不能动态加载js 文件
// 样式不隔离 没有js 沙箱机制
registerApplication('myVueApp',
  async () => {
    console.log('加载模块');
    // systemJS 
    await loadScript('http://localhost:10001/js/chunk-vendors.js');
    await loadScript('http://localhost:10001/js/app.js');
    return window.singleVue; // 就能拿到 bootstrap mount unmount 方法
  },
  location => location.pathname.startsWith('/vue') // 用户切换到/vue 的路径下，需要加载刚才定义的子应用
);

start(); // 启动

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
