// routes.js

const loadView = (view) => {
  return () => import(`../views/${view}.vue`);
};

export default [
  {
    path: '/',
    redirect: { name: 'Login' }, // Tentukan halaman default di sini
  },
  {
    path: '/service-talent',
    name: 'ServiceTalentPage',
    component: loadView('ServiceTalent/IndexPage'),
  },
  {
    path: '/login',
    name: 'Login',
    component: loadView('Login/IndexPage'),
  },
  {
    path: '/form',
    name: 'Form',
    component: loadView('Form/IndexPage'),
  },
  { 
    path: '/dashboard',
    name: 'Dashboard',
    component: loadView('Home'), 
  },
  { 
    path: '/about',
    name: 'About',
    component: loadView('Main/About'), 
  },
  { 
    path: '/contact',
    name: 'ContactUs',
    component: loadView('Main/Contact'), 
  },
];
