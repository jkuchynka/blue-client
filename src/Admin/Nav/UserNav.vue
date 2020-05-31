<template lang="pug">
  .user-dashboard-nav
    q-expansion-item(
      :label="user.name"
      dark
      header-class="user-nav-header"
    )
      template(v-slot:header)
        q-item-section(avatar)
          q-avatar(square size="64px")
            img(:src="user.picture")
        q-item-section.user-name {{ user.name }}

      q-list.nav-list(dark)
        q-item.text-blue-grey-3(
          clickable
          v-for="(link, i) in links"
          :key="i"
          :to="link.to"
        )
          q-item-section(side)
            q-icon(:name="link.icon")
          q-item-section {{ link.label }}
</template>
<script>

const links = [
  {
    label: 'Your Profile',
    to: '/profile',
    icon: 'fas fa-user'
  },
  {
    label: 'Logout',
    to: '/logout',
    icon: 'logout'
  }
]

export default {
  data: () => ({
    links
  }),
  computed: {
    user () {
      return this.$store.state.auth.user
    }
  },
  methods: {

  }
}
</script>
<style lang="sass">

.user-dashboard-nav
  position: absolute
  bottom: 0
  left: 0
  right: 0
  .user-name
    font-size: 16px
  .q-expansion-item__container
    > .q-item
      padding-top: 0
      padding-bottom: 0
      padding-left: 0
  .nav-list
    padding: 12px 0
    .q-item
      min-height: auto
    .q-icon
      color: $blue-grey-3
      font-size: 16px
  .user-nav-header
    background-color: $primary

</style>
