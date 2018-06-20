import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import purse from '@/components/purse/purse'
import me from '@/components/me/me'
import recommend from '@/components/recommend/recommend'
import daysProze from '@/components/daysProze/daysProze'
import feedback from '@/components/feedback/feedback'
import trafficRegulationst from '@/components/trafficRegulationst/trafficRegulationst'
import detail from '@/components/detail/detail'

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
      component: home,
    },
    {
      path: '/purse',
      component: purse,
      //name:'purse'
    },    
    {
      path: '/me',
      component: me,
      //name:'me'
    },
    {
      path: '/recommend',
      component: recommend,
      //name:'recommend'
    },
    {
      path: '/daysProze',
      component: daysProze
    },
    {
      path: '/feedback',
      component: feedback,
      name:'feedback'
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: detail
    }            
  ],
  linkActiveClass: 'active'
})
