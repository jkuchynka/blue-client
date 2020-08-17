
const routes = [
  {
    path: '/user',
    component: () => import('@/App/layouts/AppLayout.vue'),
    props: {
      hasDrawerLeft: true
    },
    children: [
      {
        path: ':userName',
        components: {
          default: () => import('@/Users/layouts/ProfileLayout.vue'),
          drawerLeft: () => import('@/Users/components/ProfileNav.vue')
        },
        children: [
          { path: '', name: 'UsersProfile', component: () => import('@/Users/pages/profile/ProfilePage.vue') },
          { path: 'password', name: 'UsersProfilePassword', component: () => import('@/Users/pages/profile/PasswordPage.vue') },
          { path: 'plans', name: 'UsersProfilePlans', component: () => import('@/Users/pages/profile/PlansPage.vue') },
          { path: 'settings', name: 'UsersProfileSettings', component: () => import('@/Users/pages/profile/SettingsPage.vue') }
        ]
      }
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
