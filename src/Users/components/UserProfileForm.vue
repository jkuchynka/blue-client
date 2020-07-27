<template lang="pug">
.user-profile-form
  blue-form(
    v-model="user"
    title="Edit Profile"
    :fields="fields"
    :errors="errors"
    :settings="settings"
    :on-action="onAction"
    :on-submit="onSubmit"
  )
</template>
<script>
const settings = {}

const fields = [
  {
    name: 'name'
  },
  {
    name: 'email',
    type: 'email',
    rules: 'required|email'
  }
]

export default {
  props: ['user'],
  data: () => ({
    errors: [],
    fields,
    settings
  }),
  methods: {
    onAction (action) {
      switch (action) {
        case 'cancel':
          this.$emit('cancel', this.user)
          break
      }
    },
    onSubmit () {
      this.errors = []
      this.$api.put(`users/${this.user.id}`, this.user).then(response => {
        this.$q.notify('Profile updated')
        this.$emit('done', this.user)
      }).catch(error => {
        try {
          this.errors = [
            error.response.data.errors
          ]
          console.log(this.errors)
        } catch (e) {
          this.errors = error.response.data.message ? [error.response.data.message] : ['Server error submitting form']
        }
      })
    }
  }
}
</script>
