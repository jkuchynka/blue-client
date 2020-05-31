import { LocalStorage, Notify } from 'quasar'

export default function ({ store }) {
  /**
   * Access control for routes
   * @param to
   * @param from
   * @param next
   */
  return async function beforeEach (to, from, next) {
    // Check if route or parent requires permission(s) or role(s)
    // If protected route and user is not logged in,
    // redirect to login page and back to this route after logging in.
    // If protected route and user is logged in but not
    // permitted to access this route, show unauthorized page
    // @todo: For now using AND logic
    let access = true
    const isLoggedIn = LocalStorage.has('user')

    const permissions = metaValues(to, 'permissions')
    const roles = metaValues(to, 'roles')

    if (permissions.length || roles.length) {
      access = await store.dispatch('auth/hasPermissions', permissions) &&
               await store.dispatch('auth/hasRoles', roles)
    }

    if (access) {
      next()
    } else if (!isLoggedIn) {
      Notify.create({
        type: 'negative',
        message: 'Please login to access this page'
      })
      next({
        name: 'auth-login',
        query: {
          go: to.fullPath
        }
      })
    } else {
      Notify.create({
        type: 'negative',
        message: 'You are not authorized to access this page'
      })
      next(from)
    }
  }
}

/**
 * Get all unique meta values from all matched routes
 *
 * @param to
 * @param key
 */
function metaValues (to, key) {
  let values = []
  if (to.matched.some(route => route.meta[key])) {
    to.matched.forEach(route => {
      if (route.meta && route.meta[key]) {
        values = values.concat(
          route.meta[key].filter(value => values.indexOf(value) < 0)
        )
      }
    })
  }
  return values
}
