
const routes = [
  // This parent route should already be defined by the layouts module
  {
    path: '/',
    children: [
      { path: 'login', name: 'auth-login', component: () => import('@/Auth/pages/LoginPage.vue') },
      { path: 'register', name: 'auth-register', component: () => import('@/Auth/pages/RegisterPage.vue') },
      { path: 'request-reset', name: 'auth-request-reset', component: () => import('@/Auth/pages/RequestResetPage.vue') },
      { path: 'verify/account/:user_id', component: () => import('@/Auth/pages/VerifyAccountPage.vue') },
      { path: 'verify/reset/:user_id', component: () => import('@/Auth/pages/VerifyResetPage.vue') }
    ]
  }
]

export default routes
