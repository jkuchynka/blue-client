<template lang="pug">
  .admin-layout

    q-layout.bg-blue-grey-9(view="hHh lpR fFf")

      q-drawer.left-drawer(side="left" v-model="left" content-class="bg-blue-grey-10" :scroll="false")
        router-link.logo-box(to="/") Logo
        admin-nav
        user-nav

      q-drawer(side="right" elevated)

      q-page-container
        .page-inner
          router-view

</template>
<script>

import AdminNav from './../components/AdminNav'
import UserNav from './../components/UserNav'

export default {
  components: {
    AdminNav,
    UserNav
  },
  data: () => ({
    left: true
  }),
  methods: {

  }
}
</script>
<style lang="sass" scoped>

.admin-layout
  .logo-box
    display: block
    padding: 12px 14px
    color: $blue-grey-1
    font-size: 16px
    line-height: 26px
    text-decoration: none
    background-color: $primary
    span
      padding-left: 16px
      position: relative
      top: 3px
  .left-drawer
    .q-drawer--left
      position: fixed
    .q-drawer__content
      overflow: hidden
  .page-inner
    padding: 20px

</style>
