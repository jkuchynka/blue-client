<template lang="pug">
  .users-admin-edit-user
    user-form(v-if="userId" :on-submit-done="onSubmitDone" :user-id="userId")
</template>
<script>

import UserForm from '@/Users/components/UserForm'

export default {
  components: {
    UserForm
  },
  data: () => ({
    userId: null
  }),
  mounted () {
    this.userId = this.$route.params.user_id
  },
  methods: {
    onSubmitDone () {
      this.$router.push('/admin/users')
    }
  }
}
</script>
<style lang="sass">
  .users-admin-edit-user
    .blue-form
      max-width: 650px
</style>
