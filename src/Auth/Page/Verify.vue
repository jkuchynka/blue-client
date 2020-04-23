<template lang="pug">
  .auth-page-verify
    q-banner.bg-grey-3.q-pt-lg(v-if="validUrl === false") Oops! You've used either an invalid or expired link. Click the button below if you need to reset your password.
      q-btn.reset-btn(to="/auth/password" color="primary") Reset Password

    div(v-if="validUrl")
      q-banner.bg-indigo.text-white Please set your password to finish setting up your account.
      auth-form-password(:url="url" :on-submit-done="onSubmitDone")
</template>
<script>
/**
 * Validate this entire url with the API.
 * If not valid, the URL is not valid, and display error message.
 * If valid, allow user to set their password, passing
 * this URL in the payload.
 * The API shouldn't allow changing password if the email
 * has already been verified.
 */
import api from '@/services/api'
import AuthFormPassword from '../Form/Password'

export default {
  components: {
    AuthFormPassword
  },
  data: () => ({
    url: null,
    validUrl: null
  }),
  mounted () {
    this.validateSignedUrl()
  },
  methods: {
    onSubmitDone () {
      this.$q.notify('Success! Please login.')
      this.$router.push('/login')
    },
    validateSignedUrl () {
      this.url = window.location.href
      console.log(this.$route)
      api.post('auth/validate-verify', {
        url: this.url
      }).then(response => {
        this.validUrl = true
      }).catch(() => {
        this.validUrl = false
      })
    }
  }
}
</script>
<style lang="sass" scoped>
  .auth-page-verify
    margin 50px auto
    max-width 450px
    .reset-btn
      margin 12px 0

</style>
