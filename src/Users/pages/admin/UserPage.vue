<template lang="pug">
  .users-admin-user-page
    .title User: {{ user.name }}
    admin-items-list(:model="user")
      template(v-slot:Roles-value)
        q-badge.q-mr-sm(v-for="role in user.roles" :key="`role-${role.id}`" color="secondary") {{ role.display_name }}
    div.q-my-md
      q-btn(:to="`/admin/users/${user.id}/edit`" color="secondary") Edit
</template>
<script>

export default {
  data: () => ({
    user: {}
  }),
  mounted () {
    const userId = this.$route.params.user_id
    this.$api.get(`users/${userId}`).then(response => {
      this.user = response.data.data
    })
  }
}
</script>
<style lang="sass" scoped>
  .users-admin-user-page
    padding: 48px 12px
    background: $grey-1
</style>
