import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/Home'),
    redirect: '/content',
    children: [
      {
        path: '/content',
        name: 'Content',
        component: () => import('@/views/Content')
      },
      {
        path: '/content2',
        name: 'Content2',
        component: () => import('@/views/Content2')
      },
      {
        path: '/PseudoClass',
        name: 'PseudoClass',
        component: () => import('@/views/PseudoClass')
      },
      {
        path: '/GroupHover',
        name: 'GroupHover',
        component: () => import('@/views/GroupHover')
      },
      {
        path: '/Plugin',
        name: 'Plugin',
        component: () => import('@/views/Plugin')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes // short for `routes: routes`
})

export default router
