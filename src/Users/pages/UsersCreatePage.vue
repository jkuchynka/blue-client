<template lang="pug">
  .users-create
    user-form(:on-submit-done="onSubmitDone")
</template>
<script>

import UserForm from '@/Users/components/UserForm'

export default {
  components: {
    UserForm
  },
  data: () => ({

  }),
  methods: {
    onSubmitDone () {
      this.$router.push('/admin/users')
    }
  }
}
</script>
<style lang="sass">
  .users-create
    .blue-form
      max-width: 650px
</style>
