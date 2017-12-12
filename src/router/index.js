import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Layouts from '@/components/layouts'
import Todo from '@/components/todo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Layouts',
      component: Layouts
    },
    {
      path: '/',
      name: 'Todo',
      component: Todo
    },
  ]
})
