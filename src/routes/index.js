// routes.js
import layout from '../views/Template/LayoutPage.vue';

const loadView = (view) => {
  return () => import(`../views/${view}.vue`);
};

export default [
  {
    path: '/',
    redirect: { name: 'CatalogTalentPage' }, // Tentukan halaman default di sini
  },
  {
    path: '/catalog-talent',
    name: 'CatalogTalentPage',
    meta: {value: 'Catalog'},
    component: layout,
    children: [
      {
        path: '',
        name: 'CatalogTalentIndex',
        meta: {value: 'Index'},
        component: loadView('CatalogTalent/IndexPage')
      },
      {
        path: '/catalog-talent/:id/detail',
        name: 'CatalogTalentDetail',
        meta: {value: 'Detail'},
        component: loadView('CatalogTalent/DetailPage')
      },
    ]
  },
  {
    path: '/term-and-condition',
    name: 'TermAndCondition',
    component: loadView('TermAndCondition/IndexPage'),
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: loadView('PrivacyPolicy/IndexPage'),
  },
  {
    path: '/cookie-policy',
    name: 'CookiePolicy',
    component: loadView('CookiePolicy/IndexPage'),
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
