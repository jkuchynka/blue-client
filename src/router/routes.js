
const routes = [
  {
    path: '/',
    component: () => import('layouts/WelcomeLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Welcome.vue') },
      { path: 'installation', name: 'installation', component: () => import('pages/Installation.vue') },
      { path: 'blue-quasar-components', name: 'blue-quasar-components', component: () => import('pages/BlueQuasarComponents.vue') }
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
