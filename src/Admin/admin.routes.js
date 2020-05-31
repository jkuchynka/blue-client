
const routes = [
  {
    path: '/admin',
    component: () => import('./Layout/AdminLayout.vue'),
    meta: {
      permissions: ['access-administration']
    },
    children: [
      { path: '', component: () => import('./Page/DashboardPage.vue') }
    ]
  }
]

export default routes
