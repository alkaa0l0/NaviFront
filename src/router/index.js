import { createRouter, createWebHistory } from 'vue-router';
import Main from '../views/Main.vue';
import Requests from '../views/Requests.vue';
import Reports from '../views/Reports.vue';
import Workers from '../views/Workers.vue';
import Login from '../views/Login.vue';

const routes = [
  { path: '/', name: 'Main', component: Main },
  { path: '/requests', name: 'Requests', component: Requests },
  { path: '/reports', name: 'Reports', component: Reports },
  { path: '/workers', name: 'Workers', component: Workers },
  { path: '/login', name: 'Login', component: Login }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
