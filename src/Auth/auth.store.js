import api from '@/services/api'
import { LocalStorage, Notify } from 'quasar'

export default {
  namespaced: true,
  state: {
    user: LocalStorage.has('user') ? LocalStorage.getItem('user') : null,
    permissions: LocalStorage.has('permissions') ? LocalStorage.getItem('permissions') : null,
    roles: LocalStorage.has('roles') ? LocalStorage.getItem('roles') : null,
    token: LocalStorage.has('token') ? LocalStorage.getItem('token') : null
  },
  mutations: {
    SET_PERMISSIONS (state, permissions) {
      state.permissions = permissions
      if (permissions === null) {
        LocalStorage.remove('permissions')
      } else {
        LocalStorage.set('permissions', permissions)
      }
    },
    SET_ROLES (state, roles) {
      state.roles = roles
      if (roles === null) {
        LocalStorage.remove('roles')
      } else {
        LocalStorage.set('roles', roles)
      }
    },
    SET_TOKEN (state, token) {
      state.token = token
      // Setting local storage item to null will result in it
      // being picked up as string null next refresh
      if (token === null) {
        LocalStorage.remove('token')
      } else {
        LocalStorage.set('token', token)
      }
    },
    SET_USER (state, user) {
      state.user = user
      if (user === null) {
        LocalStorage.remove('user')
      } else {
        LocalStorage.set('user', user)
      }
    }
  },
  actions: {
    hasPermissions,
    hasRoles,
    login,
    logout,
    register,
    requestReset
  }
}

function hasPermissions ({ state }, permissions) {
  let access = !permissions.length
  if (permissions.length && state.permissions) {
    access = permissions.every(perm => {
      return state.permissions.includes(perm)
    })
  }
  return access
}

function hasRoles ({ state }, roles) {
  let access = !roles.length
  if (roles.length && state.roles) {
    access = roles.every(role => {
      return state.roles.includes(role)
    })
  }
  return access
}

function login ({ commit }, { email, password }) {
  return api.post('auth/login', {
    email,
    password
  }).then(response => {
    const user = response.data.data
    const { permissions, roles, token } = response.data.meta
    commit('SET_USER', user)
    commit('SET_PERMISSIONS', permissions)
    commit('SET_ROLES', roles)
    commit('SET_TOKEN', token)
    Notify.create(`Welcome back ${user.name}`)
    const route = this.$router.currentRoute
    const path = route.query && route.query.go ? route.query.go : '/'
    this.$router.push({ path })
  })
}

function logout ({ commit }) {
  function callback () {
    commit('SET_PERMISSIONS', null)
    commit('SET_ROLES', null)
    commit('SET_TOKEN', null)
    commit('SET_USER', null)
    Notify.create('Logged out')
  }
  return api.get('auth/logout').then(callback).catch(callback)
}

function register ({ commit }, { email }) {
  return api.post('auth/register', {
    email
  }).then(response => {
    return response.data
  })
}

function requestReset ({ commit }, { email }) {
  return api.post('auth/request-reset', {
    email
  }).then(response => {
    return response.data
  })
}
