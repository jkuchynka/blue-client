<template lang="pug">
  .user-form
    blue-form(
      v-model="user"
      :title="title"
      :fields="fields"
      :errors="errors"
      :settings="settings"
      :on-action="onAction"
      :on-submit="onSubmit"
    )
      template(v-slot:field-help-text)
        div An email will be sent to this user with instructions for them to set their password.
</template>
<script>

import { getRoles } from '@/Auth/services/auth.api'

const settings = {
  form: {
    autofocus: false
  }
}

export default {
  props: ['userId', 'onSubmitDone'],
  mounted () {
    if (this.userId) {
      this.$api.get(`users/${this.userId}`).then(response => {
        this.user = response.data.data
      })
      this.mode = 'edit'
    } else {
      this.mode = 'create'
    }
    getRoles().then(roles => {
      this.roles = roles
    })
  },
  data: () => ({
    mode: null,
    roles: [],
    user: {},
    errors: [],
    settings
  }),
  computed: {
    fields () {
      let fields = [
        {
          name: 'name',
          required: true,
          lazyRules: true
        },
        {
          name: 'email',
          type: 'email',
          rules: 'required|email',
          lazyRules: true
        },
        {
          name: 'roles',
          type: 'select',
          options: this.roles,
          optionValue: 'id',
          optionLabel: 'display_name',
          emitValue: true,
          mapOptions: true,
          multiple: true
        }
      ]
      if (this.mode === 'create') {
        fields.push({
          name: 'help-text'
        })
      }
      return fields
    },
    title () {
      return this.mode === 'create' ? 'Create User' : 'Edit User'
    }
  },
  methods: {
    onAction (action, props) {
      switch (action) {
        case 'cancel':
          this.$router.go(-1)
          break
      }
    },
    onSubmit () {
      this.errors = []
      console.log('onSubmitDone')
      let promise
      if (this.mode === 'create') {
        promise = this.$api.post('users', this.user)
      } else {
        promise = this.$api.put(`users/${this.user.id}`, this.user)
      }
      promise.then(response => {
        this.$q.notify(this.mode === 'create' ? 'User created.' : 'User updated.')
        if (this.onSubmitDone) {
          this.onSubmitDone(this.user.id)
          this.user = {}
        }
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
<style lang="styl">

</style>
