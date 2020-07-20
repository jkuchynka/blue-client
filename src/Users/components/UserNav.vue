<template lang="pug">
  .user-nav
    .user-btns(v-if="!user || !user.id")
      q-btn(:to="{ name: 'auth-login' }" flat :class="{ active: $route.name === 'auth-login' }") Login

      q-btn(:to="{ name: 'auth-register' }" flat :class="{ active: $route.name === 'auth-register' }") Register

    .user-btns(v-else)
      q-btn-dropdown(flat :label="user.name")
        q-list
          q-item(clickable v-close-popup :to="{ name: 'usersProfile', params: { userName: user.username }}")
            q-item-section
              q-item-label Your Profile
          q-item(clickable v-close-popup to="/admin")
            q-item-section
              q-item-label Admin
          q-item(clickable v-close-popup @click="onLogout")
            q-item-section
              q-item-label Logout
</template>
<script>
export default {
  computed: {
    user () {
      return this.$store.state.auth.user
    }
  },
  methods: {
    onLogout () {
      this.$store.dispatch('auth/logout')
    }
  }
}
</script>
<style lang="sass" scoped>
</style>
