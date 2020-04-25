
const routes = [
  {
    path: '/',
    component: () => import('../Landing/Layout/LandingLayout.vue'),
    children: [
      { path: '', name: 'Landing', component: () => import('../Landing/Page/LandingPage.vue') },
      { path: 'login', name: 'auth-login', component: () => import('@/Auth/Page/LoginPage.vue') },
      { path: 'register', name: 'auth-register', component: () => import('@/Auth/Page/RegisterPage.vue') },
      { path: 'request-reset', name: 'auth-request-reset', component: () => import('@/Auth/Page/RequestResetPage.vue') },
      { path: 'verify/account/:user_id', component: () => import('@/Auth/Page/VerifyAccountPage.vue') },
      { path: 'verify/reset/:user_id', component: () => import('@/Auth/Page/VerifyResetPage.vue') },

      { path: 'pricing', name: 'pricing', component: () => import('@/Landing/Page/PricingPage.vue') }
    ]
  },
  {
    path: '/docs',
    component: () => import('layouts/WelcomeLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Welcome.vue') },
      { path: 'installation', name: 'installation', component: () => import('pages/Installation.vue') },
      { path: 'blue-quasar-components', name: 'blue-quasar-components', component: () => import('pages/BlueQuasarComponents.vue') },
      { path: 'blue-data-table', name: 'blue-data-table', component: () => import('pages/BlueDataTable.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
