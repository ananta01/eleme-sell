import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import Goods from '../components/goods/goods'
import Ratings from '../components/ratings/ratings'
import Seller from '../components/seller/seller'

Vue.use(Router);

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: Goods
    },
    {
      path: '/goods',
      component: Goods
    },
    {
      path: '/ratings',
      component: Ratings
    },
    {
      path: '/seller',
      component: Seller
    }
  ]
})
