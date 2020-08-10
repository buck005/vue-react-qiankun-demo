import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// 独立运行子应用，便于开发调试
if(!window.__POWERED_BY_QIANKUN__){
  render();
}

function render () {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
// 只需要导出几个方法就行
export async function bootstrap () { }
export async function mount () { 
  render();
}
export async function unmount () { 
  ReactDOM.unmountComponentAtNode(document.getElementById('root'));
}
