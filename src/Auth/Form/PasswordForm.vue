<template lang="pug">
  .auth-form-password
    blue-form(
      v-model="formData"
      title="Set Password"
      :fields="fields"
      :settings="settings"
      :on-submit="onSubmit"
      :errors="errors"
    )
</template>
<script>
import api from '@/services/api'

const fields = [
  {
    name: 'password',
    type: 'password',
    rules: 'required|min:6'
  },
  {
    name: 'password_confirm',
    label: 'Confirm Password',
    type: 'password',
    rules: 'required|same:password'
  }
]

const settings = {

}

export default {
  props: ['url', 'on-submit-done'],
  data: () => ({
    errors: [],
    formData: {},
    fields,
    settings
  }),
  methods: {
    onSubmit () {
      // eslint-disable-next-line camelcase
      const { password, password_confirm } = this.formData
      const url = this.url
      api.post('auth/verify', {
        password,
        password_confirm,
        url
      }).then(response => {
        this.onSubmitDone()
      }).catch(error => {
        try {
          const errors = error.response.data.errors
          Object.keys(errors).forEach(key => {
            this.errors.push(errors[key][0])
          })
        } catch (e) {
          this.errors = ['Unable to set password. Please use the reset password page.']
        }
      })
    }
  }
}
</script>
<style lang="sass" scoped>
  .auth-form-password
    margin 20px auto
    max-width 450px
</style>
