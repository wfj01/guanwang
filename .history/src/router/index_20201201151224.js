import Vue from 'vue'
import Router from 'vue-router'
import indexPage from '@/view/index.vue';
import guanyuPage from '@/view/guanyu/guanyu.vue';
import gynPage from '@/view/gyn/gyn.vue';
import xiangmuPage from '@/view/xiangmu/xiangmu.vue';
import newsPage from '@/view/news/news.vue';
import jiaoyiPage from '@/view/jiaoyi/jiaoyi.vue';
import lianxiPage from '@/view/lianxi/lianxi.vue';
import newsDetailPage from '@/view/news/detail.vue';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: indexPage
    },
    {
      path: '/guanyu/guanyu',
      name: 'GuanyuPage',
      component: guanyuPage
    },
    {
      path: '/gyn/gyn',
      name: 'GynPage',
      component: gynPage
    },
    {
      path: '/xiangmu/xiangmu',
      name: 'XiangmuPage',
      component: xiangmuPage
    },
    {
      path: '/news/news',
      name: 'NewsPage',
      component: newsPage,
    }, {
      path: '/news/detail',
      name: 'NewsDetailPage',
      component: newsDetailPage,
    },
    {
      path: '/jiaoyi/jiaoyi',
      name: 'JiaoyiPage',
      component: jiaoyiPage
    },
    {
      path: '/lianxi/lianxi',
      name: 'LianxiPage',
      component: lianxiPage
    }
  ]
})
