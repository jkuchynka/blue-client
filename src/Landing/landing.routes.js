
const routes = [
  {
    path: '/',
    component: () => import('../Landing/Layout/LandingLayout.vue'),
    children: [
      { path: '', name: 'landing', component: () => import('../Landing/Page/LandingPage.vue') },
      { path: 'features', name: 'features', component: () => import('@/Landing/Page/FeaturesPage.vue') },
      { path: 'hero-test', name: 'hero-test', component: () => import('@/Landing/Page/HeroTestPage.vue') },
      { path: 'pricing', name: 'pricing', component: () => import('@/Landing/Page/PricingPage.vue') }
    ]
  }
]

export default routes
