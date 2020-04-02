import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home'
import About from '@/views/About'
import Item from '@/views/Item'

import User from './views/User'
import Profile from './views/User/Profile'
import Cart from './views/User/Cart'

import BookChoose from './views/Book/BookChoose'
import BookBoy from './views/Book/BookBoy'
import BookGirl from './views/Book/BookGirl'

import NotFound from '@/views/NotFound'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    
    {
      path: '/about',
      name: 'about',
      beforeEnter(to, from, next) {
        console.log('beforeEnter');
        next();
      },
      component: About
    },
    {
      path: '/item/:itemId',
      name: 'item',
      component: Item
    },
    {
      path: '/user',
      alias: '/member',
      component: User,
      children: [
          {
              path: '',
              name: 'user',
              component: Profile
          },
          {
            path: 'cart',
            name: 'user-cart',
            component: Cart
          }
      ]
    },
    

    {
        path: '/book',
        name: 'book',
        redirect: to => {
            let type = localStorage.getItem('book-type')
            return { name: type || 'book-choose' }
        }
    },
    {
        path: '/book-choose',
        name: 'book-choose',
        component: BookChoose
    },
    {
        path: '/book-boy',
        name: 'book-boy',
        component: BookBoy
    },
    {
        path: '/book-girl',
        name: 'book-girl',
        component: BookGirl
    },

    {
        path: '*',
        component: NotFound
    }
    
  ]
});

// const whiteLists = ['home', 'about'];

router.beforeEach((to, from, next) => {
  console.log('全局 - beforeEach');
  // console.log(to);
  // 鉴权
//   if (whiteLists.includes(to.name)) {
//     next();
//   } else {
//     // router.push({name: 'home'})
//     next({
//       name: 'about'
//     });
//   }


    next();

})

export default router;
