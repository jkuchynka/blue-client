
import deepmerge from 'deepmerge'
import { routes as landingRoutes } from './../Landing'
import { routes as authRoutes } from './../Auth'
import { routes as docRoutes } from './../Docs'

// Merge routes from all modules
// Multiple modules can use the same parent routes
let routesDict = {}
const moduleRoutes = [landingRoutes, authRoutes, docRoutes]
moduleRoutes.forEach(modRoutes => {
  modRoutes.forEach(route => {
    if (!routesDict[route.path]) {
      routesDict[route.path] = {}
    }
    routesDict[route.path] = deepmerge(routesDict[route.path], route)
  })
})

let routes = Object.values(routesDict)

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
