// routes.js

const loadView = (view) => {
  return () => import(`../views/${view}.vue`);
};

export default [
  { 
    path: '/',
    name: 'Beranda',
    component: loadView('Home'), 
  },
  { 
    path: '/about',
    name: 'About',
    component: loadView('About'), 
  },
  { 
    path: '/contact',
    name: 'Contact Us',
    component: loadView('Contact'), 
  },
];
