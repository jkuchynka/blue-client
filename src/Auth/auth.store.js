import api from '@/services/api'
import { LocalStorage, Notify } from 'quasar'

export default {
  namespaced: true,
  state: {
    user: LocalStorage.has('user') ? LocalStorage.getItem('user') : null,
    token: LocalStorage.has('token') ? LocalStorage.getItem('token') : null
  },
  mutations: {
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
    login,
    logout,
    register,
    requestReset
  }
}

function login ({ commit }, { email, password }) {
  return api.post('auth/login', {
    email,
    password
  }).then(response => {
    const { user, token } = response.data
    commit('SET_USER', user)
    commit('SET_TOKEN', token)
    Notify.create(`Welcome back ${user.name}`)
    this.$router.push({ path: '/' })
  })
}

function logout ({ commit }) {
  function callback () {
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
