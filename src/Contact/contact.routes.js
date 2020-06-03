
const routes = [
  {
    path: '/',
    children: [
      {
        path: 'contact',
        name: 'contact',
        component: () => import('@/Contact/ContactPage.vue')
      }
    ]
  }
]

export default routes
