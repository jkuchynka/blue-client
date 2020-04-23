<template lang="pug">
  .auth-reset-password-form
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
    errors: []
  }),
  methods: {
    onSubmit () {
      const { email } = this.formData
      this.$store.dispatch('auth/reset-password', email)
    }
  }
}
</script>
<style lang="sass" style="scoped">

</style>
