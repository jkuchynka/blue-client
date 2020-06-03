
const routes = [
  {
    path: '/docs',
    component: () => import('@/Docs/layouts/DocsLayout.vue'),
    name: 'docs',
    children: [
      { path: '', component: () => import('@/Docs/pages/Welcome.vue') },
      { path: 'installation', name: 'installation', component: () => import('@/Docs/pages/Installation.vue') },
      { path: 'blue-quasar-components', name: 'blue-quasar-components', component: () => import('@/Docs/pages/BlueQuasarComponents.vue') },
      { path: 'blue-data-table', name: 'blue-data-table', component: () => import('@/Docs/pages/BlueDataTable.vue') }
    ]
  }
]

export default routes
