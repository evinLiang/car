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
import storeDetail from '@/components/storeDetail/storeDetail'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      //默认第一个是active
      path: '/',
      redirect: '/home'
    },
    {
      //首页
      path: '/home',  
      component: home,
      name:'home'
    },
    {
      //钱包
      path: '/purse',  
      component: purse,
      name:'purse'
    },    
    {
      //个人中心
      path: '/me',  
      component: me,
      name:'me'
    },
    {
      //分享
      path: '/recommend',   
      component: recommend,
      name:'recommend'
    },
    {
      //天天奖
      path: '/daysProze',  
      component: daysProze,
      name:'daysProze'
    },
    {
      //反馈意见
      path: '/feedback',     
      component: feedback,
      name:'feedback'
    },
    {
      //文章详情页
      path: '/detail/:id',  
      component: detail,
      name: 'detail'
    },
    {
      //门店详情页
      path: '/storeDetail/:id',  
      component: storeDetail,
      name: 'storeDetail'
    }            
  ],
  linkActiveClass: 'active'
})
