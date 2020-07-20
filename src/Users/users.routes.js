
const routes = [
  {
    path: '/user',
    component: () => import('@/App/layouts/AppLayout.vue'),
    children: [
      { path: ':userName', name: 'usersProfile', component: () => import('@/Users/pages/UserProfile.vue') }
    ]
  },
  {
    path: '/admin',
    children: [
      {
        path: 'users',
        component: () => import('@/Users/pages/UsersManage.vue'),
        children: [
          { path: '', component: () => import('@/Users/pages/admin/UsersTable.vue') },
          { path: 'create', component: () => import('@/Users/pages/UsersCreatePage.vue') },
          { path: ':user_id', component: () => import('@/Users/pages/admin/UserPage.vue') },
          { path: ':user_id/edit', component: () => import('@/Users/pages/admin/EditUserPage.vue') }
        ]
      }
    ]
  }
]

export default routes
