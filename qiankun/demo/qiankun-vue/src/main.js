import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false


let instance = null;
function render(props){
  instance = new Vue({
    router,
    render: h => h(App)
  }).$mount('#app') // 这里是挂载到自己的 html 中，主应用会拿到这个挂载后的 html，将其插入进去
}
// 动态添加publicpath 路径，主要解决了子应用动态载入的脚本、样式、图片等地址不正确的问题
if(window.__POWERED_BY_QIANKUN__){
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
// 独立运行子应用，便于开发调试
if(!window.__POWERED_BY_QIANKUN__){
  render();
}

// 子应用定义好协议
export async function bootstrap(props){

}
export async function mount(props){
  console.log(props)
  let state = {a:1,b:[{
    name:'jake',
    age:18
  }]}
  props.onGlobalStateChange((state,prev)=>{
     // state: 变更后的状态; prev 变更前的状态
     console.log('子=>',state, prev);
  })
  props.setGlobalState(state);
  render(props);
}
export async function unmount(props){
  instance.$destroy();
}
