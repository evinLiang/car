import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import purse from '@/components/purse/purse'
import me from '@/components/me/me'
import recommend from '@/components/recommend/recommend'
import daysProze from '@/components/daysProze/daysProze'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect: '/home'	//默认第一个是active
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/purse',
      component: purse
    },    
    {
      path: '/me',
      component: me
    },
    {
      path: '/recommend',
      component: recommend
    },
    {
      path: '/daysProze',
      component: daysProze
    }           
  ],
  linkActiveClass: 'active'
})
