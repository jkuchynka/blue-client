import api from '@/services/api'

export default {
  namespaced: true,
  actions: {
    post
  }
}

function post ({ commit }, { name, email, subject, message }) {
  return api.post('messages/contact-messages', {
    name,
    email,
    subject,
    message
  }).then(response => {
    return response.data
  })
}
