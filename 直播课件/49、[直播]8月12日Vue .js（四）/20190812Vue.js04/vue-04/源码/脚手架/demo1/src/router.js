import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'

Vue.use(Router);

const myRouter = new Router({
  mode: 'history',
  routes: [{
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    }
  ]
});

export default myRouter;
