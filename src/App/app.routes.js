
const routes = [
  {
    path: '/',
    component: () => import('./layouts/AppOrLandingLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('./pages/DashboardOrLandingPage.vue') }
    ]
  }
]

export default routes
