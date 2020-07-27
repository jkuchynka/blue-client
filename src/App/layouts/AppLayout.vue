<template lang="pug">
  .app-layout
    q-layout(view="hHh Lpr lff")
      q-header.bg-primary.text-white(bordered height-hint="98" )
        q-toolbar
          q-btn(dense flat round icon="menu" @click="left = !left" v-if="hasDrawerLeft")

          q-toolbar-title
            router-link(to="/") Blue

          q-space

          user-nav

        q-tabs(align="left")
          q-route-tab(to="/page1" label="Page One")
          q-route-tab(to="/page2" label="Page Two")
          q-route-tab(to="/page3" label="Page Three")

      q-drawer(show-if-above v-model="left" side="left" :breakpoint="500" bordered v-if="hasDrawerLeft")
        router-view(name="drawerLeft")

      q-drawer(show-if-above v-model="right" side="right" :width="180" bordered v-if="hasDrawerRight")
        router-view(name="drawerRight")

      q-page-container
        router-view

      app-footer(mode="app")

</template>
<script>
import AppFooter from '@/App/components/AppFooter'
import UserNav from '@/Users/components/UserNav'

export default {
  props: {
    hasDrawerLeft: {
      type: Boolean,
      default: false
    },
    hasDrawerRight: {
      type: Boolean,
      default: false
    }
  },
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
