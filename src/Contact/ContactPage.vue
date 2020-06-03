<template lang="pug">
  .contact-page
    div(v-if="!submitted")
      blue-form(
        v-model="formData"
        title="Contact Us"
        :errors="errors"
        :fields="fields"
        :settings="settings"
        :on-submit="onSubmit"
      )
    div.submitted(v-else) Thanks for contacting us! We'll be in touch shortly.

</template>
<script>

const fields = [
  {
    name: 'name',
    rules: 'required'
  },
  {
    name: 'email',
    rules: 'required|email'
  },
  {
    name: 'subject',
    rules: 'required'
  },
  {
    name: 'message',
    rules: 'required',
    type: 'textarea',
    filled: true
  }
]

export default {
  data: () => ({
    errors: [],
    formData: {},
    fields,
    settings: {},
    submitted: false
  }),
  methods: {
    onSubmit () {
      this.errors = []
      this.$store.dispatch('contact/post', this.formData)
        .then(response => {
          this.submitted = true
        }, err => {
          this.errors = [err.response.data.message]
        })
    }
  }
}
</script>
<style lang="sass" scoped>

.submitted
  padding: 24px
  background: #fff

</style>
