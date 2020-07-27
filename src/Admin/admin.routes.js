
const routes = [
  {
    path: '/admin',
    component: () => import('./layouts/AdminLayout.vue'),
    meta: {
      permissions: ['access-administration']
    },
    children: [
      { path: '', component: () => import('./pages/DashboardPage.vue') }
    ]
  }
]

export default routes
