import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const Home = () => import('../views/Home');
const About = () => import('../views/About');

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/about/:id',
    component: About,
    meta: {
      title: '关于'
    }
  }
];

const router = new Router({
  routes,
  mode: 'history'
});

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next();
});

export default router