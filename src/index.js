// console.log(123)
import Vue from 'vue'

import router from './router';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

import { Swipe, SwipeItem, Header } from "mint-ui";

Vue.component(Swipe.name, Swipe);

Vue.component(SwipeItem.name, SwipeItem);

Vue.component(Header.name, Header);

// 导入格式化时间的插件
import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})


// 导入App

import app from './App.vue';

import 'mint-ui/lib/style.css'

import './lib/mui/css/mui.min.css'

import './lib/mui/css/icons-extra.css'

//  导入 vue-resource
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.http.options.root = 'http://www.liulongbin.top:3005';


var vm = new Vue({
    el : '#app',
    render: c => c(app),
    router
})