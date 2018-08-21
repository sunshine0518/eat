import Vue from 'vue'
import Router from 'vue-router'
import sy from '@/components/sy'
import sg from '@/components/sg'
import gwc from '@/components/gwc'
import my from '@/components/my'
import login from '@/components/login'
import register from '@/components/register'
import foodDetails from '@/components/foodDetails'
import pj from '@/components/pj'
import dianpuMain from '@/components/dianpuMain'
import sj from '@/components/sj'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'sy',
      component: sy
    },
    {
      path: '/sg',
      name: 'sg',
      component: sg,
      redirect: 'dianpuMain',//设置默认路由
      children:[
        {
          path: '/dianpuMain',
          name: 'dianpuMain',
          component: dianpuMain
        },
        {
          path: '/pj',
          name: 'pj',
          component: pj
        },
        {
          path: '/sj',
          name: 'sj',
          component: sj
        },
      ]
    },
    {
      path: '/gwc',
      name: 'gwc',
      component: gwc
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/foodDetails',
      name: 'foodDetails',
      component: foodDetails
    },
  ]
})
