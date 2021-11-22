import {
    createApp
} from 'vue'

import App from './App.vue'

// 路由
import router from "./route";
// vuex

// import store from '@/store/store';

// 全局引入ElementPlus，当然也可以使用局部引入
// import ElementPlus from "element-plus";
// import "element-plus/lib/theme-chalk/index.css"; //引入样式
// import locale from "element-plus/lib/locale/lang/zh-cn"; //中文

import 'bootstrap/dist/css/bootstrap.min.css'
// import $ from 'jquery'

import 'jquery/dist/jquery.min'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'font-awesome/css/font-awesome.min.css'

// createApp(App).mount('#app')
createApp(App)
    // .use(store)
    // .use(ElementPlus, {
    //     size: "small",
    //     zIndex: 3000,
    //     locale
    // })
    .use(router)
    .mount("#app");