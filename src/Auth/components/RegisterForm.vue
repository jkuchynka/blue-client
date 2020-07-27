<template lang="pug">
  .auth-login-form

    div(v-if="!submitted")
      blue-form(
        v-model="formData"
        title="Sign Up"
        :fields="fields"
        :actions="actions"
        :settings="settings"
        :errors="errors"
        :on-submit="onSubmit"
      )

    div(v-else)
      .thanks Thanks for signing up! We've sent you an email with a link you can use to verify your account, and set your name and password.

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
    label: 'Sign Up',
    class: 'full-width'
  }
}

export default {
  data: () => ({
    formData: {},
    actions,
    errors: [],
    fields,
    settings: {},
    submitted: false
  }),
  methods: {
    onSubmit () {
      const { email } = this.formData
      this.$store.dispatch('auth/register', {
        email
      }).then(response => {
        this.submitted = true
      }).catch(() => {
        this.errors = ['Sumthing wrong']
      })
    }
  }
}
</script>
<style lang="sass" scoped>

</style>
