<template lang="pug">
  .auth-request-reset-form
    div.success(v-if="submitted")
      | Thanks! Please check your email for a link where you can set your new password.
    div.error(v-else-if="error")
      | Oops, something went wrong. We were unable to find your email address.
    div(v-else)
      blue-form(
        v-model="formData"
        title="Reset Password"
        :fields="fields"
        :actions="actions"
        :settings="settings"
        :errors="errors"
        :on-submit="onSubmit"
      )
</template>
<script>

const fields = [
  {
    name: 'email',
    autofocus: true,
    rules: 'required|email'
  }
]

const actions = {
  cancel: {
    enabled: false
  },
  submit: {
    label: 'Reset Password',
    class: 'full-width'
  }
}

export default {
  data: () => ({
    formData: {},
    actions,
    fields,
    settings: {},
    submitted: false,
    error: false,
    errors: []
  }),
  methods: {
    onSubmit () {
      const { email } = this.formData
      this.$store.dispatch('auth/requestReset', { email }).then(response => {
        this.submitted = true
      }).catch(() => {
        this.error = true
      })
    }
  }
}
</script>
<style lang="sass" style="scoped">
.success, .error
  background: #fff
  padding: 25px
.error
  color: red
</style>
