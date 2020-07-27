<template lang="pug">
  .auth-page-verify-reset
    div(v-if="loading") Loading...
    q-banner.bg-grey-3.q-pt-lg(v-if="validUrl === false") Oops! You've used either an invalid or expired link. Click #[router-link(:to="{ name: 'auth-request-reset' }") here] to reset your password.

    div(v-if="validUrl")
      q-banner.bg-indigo.text-white Please reset your password.
      password-form(:url="url" :on-submit-done="onSubmitDone")
</template>
<script>

import api from '@/App'
import PasswordForm from '../components/PasswordForm'

export default {
  components: {
    PasswordForm
  },
  data: () => ({
    loading: false,
    url: null,
    validUrl: null
  }),
  mounted () {
    this.loading = true
    this.validateSignedUrl()
  },
  methods: {
    onSubmitDone () {
      this.$q.notify('Success! Please login.')
      this.$router.push('/login')
    },
    validateSignedUrl () {
      this.url = window.location.href
      api.post('auth/validate-verify', {
        url: this.url
      }).then(response => {
        this.validUrl = true
        this.loading = false
      }).catch(() => {
        this.validUrl = false
        this.loading = false
      })
    }
  }
}
</script>
<style lang="sass" scoped>

.auth-page-verify-reset
  margin: 0 auto
  max-width: 450px

.reset-btn
  margin: 12px 0

.q-banner
  max-width: 450px
  margin: 0 auto

</style>
