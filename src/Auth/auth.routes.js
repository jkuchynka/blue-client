
const routes = [
  // This parent route should already be defined by the layouts module
  {
    path: '/',
    children: [
      { path: 'login', name: 'auth-login', component: () => import('@/Auth/Page/LoginPage.vue') },
      { path: 'register', name: 'auth-register', component: () => import('@/Auth/Page/RegisterPage.vue') },
      { path: 'request-reset', name: 'auth-request-reset', component: () => import('@/Auth/Page/RequestResetPage.vue') },
      { path: 'verify/account/:user_id', component: () => import('@/Auth/Page/VerifyAccountPage.vue') },
      { path: 'verify/reset/:user_id', component: () => import('@/Auth/Page/VerifyResetPage.vue') }
    ]
  }
]

export default routes
