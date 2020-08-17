<template lang="pug">
q-page.users-profile-password
  auth-change-password-form(
    :user="user"
    @done="done"
    ref="form"
  )

  app-loading(:loading="loading")
</template>
<script>
import AuthChangePasswordForm from '@/Auth/components/ChangePasswordForm'

export default {
  components: {
    AuthChangePasswordForm
  },
  data: () => ({
    loading: true,
    user: {}
  }),
  mounted () {
    this.getUser()
  },
  methods: {
    done () {
      // this.$refs.form.reset()
    },
    getUser () {
      const username = this.$route.params.userName
      this.$api.get(`users/${username}`).then(response => {
        this.user = response.data.data
        this.loading = false
      })
    }
  }
}
</script>
<style lang="sass">
.user-profile-edit
  .blue-form
    margin: 24px 0
    background: #eee !important
</style>
