import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/login'
import Home from '@/components/home/home'
import UserList from '@/components/user-list/user-list'
import RoleList from '@/components/role-list/role-list'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      name: 'login',
      path: '/login',
      component: Login
    },
    {
      name: 'home',
      path: '/',
      component: Home,
      children: [
        {
          name: 'user-list',
          path: '/users',
          component: UserList
        },
        {
          name: 'role-list',
          path: '/roles',
          component: RoleList
        }
      ]
    }
  ]
})

// 1.添加路由拦截器
// to 从哪来
// from 去哪
// next 用来放行的
router.beforeEach((to, from, next) => {
  // 拿到当前请求的视图路径标识、
  // 如果是登录组件，直接放行
  // 如果是非登录组件，检查token令牌
  //   有 过去
  //   没有 登录
  if (to.name === 'login') {
    next()
  } else {
    // 检查登录令牌
    const token = window.localStorage.getItem('admin-token')
    if (!token) {
      next({
        name: 'login'
      })
    } else {
      next()
    }
  }
})
//

export default router
