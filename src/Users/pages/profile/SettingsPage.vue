<template lang="pug">
q-page.position-relative.users-profile-settings
  user-image-form(
    v-if="!loading"
    :user="user"
  )

  user-profile-form(
    v-if="!loading"
    :user="user"
    @cancel="done"
    @done="done"
  )
  app-loading(:loading="loading")
</template>
<script>
import UserImageForm from '../../components/UserImageForm'
import UserProfileForm from '../../components/UserProfileForm'

export default {
  components: {
    UserImageForm,
    UserProfileForm
  },
  data: () => ({
    loading: true,
    user: {}
  }),
  created () {
    this.getUser()
  },
  methods: {
    getUser () {
      const userName = this.$route.params.userName
      this.$api.get(`users/${userName}`).then(response => {
        this.user = response.data.data
        this.loading = false
      })
    },
    done () {
      // this.$router.push({
      //   name: 'usersProfile',
      //   params: {
      //     userName: this.user.username
      //   }
      // })
    }
  }
}
</script>
<style lang="sass">
.user-profile-settings
  .blue-form
    margin: 24px 0
    background: #eee !important
</style>
