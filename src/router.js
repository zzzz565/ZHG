import VueRouter from 'vue-router';

import home from './components/tabbar/HomeContainer.vue'
import member from './components/tabbar/MemberContainer.vue'
import shopcar from './components/tabbar/ShopcarContainer.vue'
import search from './components/tabbar/SearchContainer.vue'
import NewsList from './components/news/newsList.vue'
import NewsInfo from './components/news/newsinfo.vue'

const router = new VueRouter({
    routes : [
        { path: '/', redirect:'/home' },
        { path: '/home', component: home },
        { path: '/member', component: member },
        { path: '/shopcar', component: shopcar },
        { path: '/search', component: search },
        { path: '/home/newsList', component:NewsList },
        { path: '/home/NewsInfo/:id', component:NewsInfo },
    ],
    linkActiveClass : 'mui-active',
})

export default router