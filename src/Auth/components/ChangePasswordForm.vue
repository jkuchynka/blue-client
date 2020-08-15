<template lang="pug">
  .auth-change-password-form
    blue-form(
      v-if="mode === 'initial'"
      v-model="formData"
      title="Change Password"
      :fields="fields"
      :errors="errors"
      :actions="actions"
      :on-submit="onSubmit"
    )
      template(v-slot:field-forgot)
        a(href="#" @click="mode = 'request-reset'") Forget password?

    .send-reset-email(v-if="mode === 'request-reset'")
      p Send reset password link to {{ user.email }}?
      q-btn(@click="sendResetPassword" color="primary") Confirm
      q-btn(@click="mode === 'initial'") Cancel

</template>
<script>
const actions = {
  cancel: {
    enabled: false
  }
}

const fields = [
  {
    name: 'current_password',
    type: 'password',
    title: 'Current Password',
    rules: 'required'
  },
  {
    name: 'password',
    type: 'password',
    title: 'New',
    rules: 'required|min:6'
  },
  {
    name: 'password_confirm',
    type: 'password',
    title: 'Confirm',
    rules: 'required|same:password'
  },
  {
    name: 'forgot'
  }
]

export default {
  props: ['user'],
  data: () => ({
    actions,
    mode: 'initial',
    errors: [],
    fields,
    formData: {}
  }),
  methods: {
    onSubmit () {
      this.errors = []
      this.$api.put(`auth/update-password`, this.formData).then(response => {
        this.$q.notify('Password updated')
        this.$emit('done')
      }).catch(error => {
        try {
          const errors = error.response.data.errors
          for (const i in errors) {
            this.errors.push(errors[i][0])
          }
        } catch (e) {
          this.errors = error.response.data.message ? [error.response.data.message] : ['Server error submitting form']
        }
      })
    },
    sendResetPassword () {
      console.log('here')
    }
  }
}
</script>
