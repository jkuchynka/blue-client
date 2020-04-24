<template lang="pug">
  .auth-login-form
    blue-form(
      v-model="formData"
      title="Login"
      :fields="fields"
      :actions="actions"
      :settings="settings"
      :errors="errors"
      :on-submit="onSubmit"
    )

    .footer
      router-link(:to="{ name: 'auth-request-reset' }") Forget password?

    .register-link No account yet? #[router-link(:to="{ name: 'auth-register' }") Sign up here!]

</template>
<script>

const fields = [
  {
    name: 'email',
    autofocus: true,
    rules: 'required|email'
  },
  {
    name: 'password',
    type: 'password',
    rules: 'required'
  }
]

const actions = {
  cancel: {
    enabled: false
  },
  submit: {
    label: 'Login',
    class: 'full-width'
  }
}

export default {
  data: () => ({
    formData: {
      email: '',
      password: ''
    },
    actions,
    errors: [],
    fields,
    settings: {}
  }),
  methods: {
    onSubmit () {
      const { email, password } = this.formData
      this.$store.dispatch('auth/login', {
        email,
        password
      }).catch(() => {
        this.errors = ['Invalid credentials']
      })
    }
  }
}
</script>
<style lang="sass" scoped>

.auth-login-form
  margin: 20px auto

  .form-title
    text-align: center
    text-transform: uppercase

.footer
  padding: 6px 0 24px 18px
  max-width: 450px
  margin: 0 auto
  background: $grey-2
  a
    color: $grey-8

.register-link
  margin: 12px 0
  text-align: center

.register-link, .register-link a
  color: #fff

</style>
