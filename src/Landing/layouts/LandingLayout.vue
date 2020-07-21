<template lang="pug">
  .landing-layout
    q-layout(view="lHh Lpr lff")
      q-header
        q-toolbar

          q-toolbar-title
            router-link(to="/") Blue

          q-btn(:to="{ name: 'pricing' }" flat :class="{ active: $route.name === 'pricing' }") Pricing

          q-btn(:to="{ name: 'features' }" flat :class="{ active: $route.name === 'features' }") Features

          q-btn(:to="{ name: 'docs' }" flat :class="{ active: $route.name === 'docs' }") Docs

          q-space

          user-nav

      .hero-background-wrapper
        .hero-background

      q-page-container
        q-page.content-wrapper
          router-view

      app-footer

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

  }),
  computed: {
    user () {
      return this.$store.state.auth.user
    },
    year () {
      return new Date().getFullYear()
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

.landing-layout
  background-color: $grey-10

.active
  border-bottom: 2px solid $grey-1

.q-header
  position: absolute
  top: 0
  left: 0
  right: 0
  z-index: 2
  background: none
  .q-toolbar__title a
    color: #fff
    text-decoration: none

.user-btns
  position: absolute
  right: 10px

.hero-background-wrapper
  height: 100vh
  width: 100%
  display: flex
  align-items: center
  position: absolute
  background: blue
  flex-direction: column
  background-image: linear-gradient(-280deg, blue, $grey-7)

.hero-background
  background-repeat: no-repeat
  background-position: 0% 28%
  background-size: cover
  position: absolute
  height: 100vh
  width: 100%
  background-image: url(~@/Landing/assets/hero-bg.jpg)
  background-color: #fff
  mix-blend-mode: overlay
  opacity: 0.7

.content-wrapper
  margin: 0 auto
  width: 880px
  z-index: 9
  position: relative
  padding: 100px 0
  top: 60px
  min-height: 100vh !important

.footer
  padding: 45px
  background-color: $grey-10
  color: #fff
  position: relative
  z-index: 9

.footer-menu
  .title
    font-size: 2rem
    font-weight: 400
    letter-spacing: 0.00735em
    padding-left: 12px

.footer-bottom
  margin: 60px 0 24px 0
  .copyright
    margin: 0 48px 0 20px
  .links a
    color: #fff
    margin: 0 12px

</style>
