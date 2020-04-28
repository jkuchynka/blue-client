
const routes = [
  {
    path: '/docs',
    component: () => import('layouts/WelcomeLayout.vue'),
    name: 'docs',
    children: [
      { path: '', component: () => import('pages/Welcome.vue') },
      { path: 'installation', name: 'installation', component: () => import('pages/Installation.vue') },
      { path: 'blue-quasar-components', name: 'blue-quasar-components', component: () => import('pages/BlueQuasarComponents.vue') },
      { path: 'blue-data-table', name: 'blue-data-table', component: () => import('pages/BlueDataTable.vue') }
    ]
  }
]

export default routes
