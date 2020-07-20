<template lang="pug">
  .app-layout
    q-layout(view="hHh lpR fFf")
      q-header.bg-primary.text-white(bordered height-hint="98" )
        q-toolbar
          q-btn(dense flat round icon="menu" @click="left = !left")

          q-toolbar-title
            router-link(to="/") Blue

          q-space

          user-nav

        q-tabs(align="left")
          q-route-tab(to="/page1" label="Page One")
          q-route-tab(to="/page2" label="Page Two")
          q-route-tab(to="/page3" label="Page Three")

      q-drawer(show-if-above v-model="left" side="left" bordered)

      q-drawer(show-if-above v-model="right" side="right" bordered)

      q-page-container
        router-view

      app-footer(mode="app")

</template>
<script>
import AppFooter from '@/App/components/AppFooter'
import UserNav from '@/Users/components/UserNav'

export default {
  components: {
    AppFooter,
    UserNav
  },
  data: () => ({
    left: false,
    right: false
  })
}
</script>
<style lang="sass" scoped>

.app-layout
  background-color: $grey-1

.q-header
  .q-toolbar__title a
    color: #fff
    text-decoration: none

.q-page-container
  min-height: 100vh !important

</style>
