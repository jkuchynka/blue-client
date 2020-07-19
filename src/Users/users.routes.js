
const routes = [
  // {
  //   path: 'users',
  //   component: () => import('pages/admin/users/UsersManage.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/admin/users/UsersBrowse.vue') },
  //     { path: 'create', component: () => import('pages/admin/users/UsersCreatePage.vue') }
  //   ]
  // },
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
