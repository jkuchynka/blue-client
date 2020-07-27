/**
 * No layout is defined here
 * Same for the landing page / route
 * @see app.routes.js
 */
const routes = [
  {
    path: '/',
    children: [
      { path: 'features', name: 'features', component: () => import('@/Landing/pages/FeaturesPage.vue') },
      { path: 'pricing', name: 'pricing', component: () => import('@/Landing/pages/PricingPage.vue') }
    ]
  }
]

export default routes
