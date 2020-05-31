
const routes = [
  {
    path: 'users',
    component: () => import('pages/admin/users/UsersManage.vue'),
    children: [
      { path: '', component: () => import('pages/admin/users/UsersBrowse.vue') },
      { path: 'create', component: () => import('pages/admin/users/UsersCreatePage.vue') }
    ]
  }
]

export default routes
