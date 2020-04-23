<template lang="pug">
  .auth-login-form
    blue-form(
      v-model="formData"
      title="Login"
      :fields="fields"
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
  },
  {
    name: 'password',
    type: 'password',
    rules: 'required'
  }
]

const settings = {}

export default {
  name: 'AuthFormLogin',
  data: () => ({
    formData: {
      email: '',
      password: ''
    },
    errors: [],
    fields,
    settings
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
    margin 20px auto
    max-width 450px
</style>
