
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/Index.vue')
    },
    {
      path: '/product/:id',
      name: 'product',
      component: () => import('../views/Product.vue')
    },
    {
      path: '/products/:category',
      name: 'category',
      component: () => import('../views/Category.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/Cart.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/Dashboard.vue'),
      children: [
        {
          path: '',
          name: 'dash-index',
          component: () => import('../views/Dashboard/Index.vue')
        },
        {
          path: 'dashboard/add/product',
          name: 'addProduct',
          component: () => import('../views/Dashboard/AddProduct.vue')
        },
        {
          path: 'dashboard/product/:id',
          name: 'editProduct',
          component: () => import('../views/Dashboard/EditProduct.vue')
        },
      ]
    },
  ]
});

export default router;
