import { lazy } from 'react';

const Home = lazy(() => import('./views/Home'));
const Profile = lazy(() => import('./views/Profile'));
// const AdsCategory = lazy(() => import('./views/AdsCategory'));
// const AdsList = lazy(() => import('./views/AdsList'));
// const AdsDetail = lazy(() => import('./views/AdsDetail'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: Home },
  { path: '/home', exact: true, name: 'Home', component: Home },
  { path: '/profile', exact: true, name: 'Profile', component: Profile },
  // { path: '/ads/:id', exact: true, name: 'Profile', component: AdsList },
  // { path: '/ads/detail/:id', exact: true, name: 'Profile', component: AdsDetail },
];

export default routes;