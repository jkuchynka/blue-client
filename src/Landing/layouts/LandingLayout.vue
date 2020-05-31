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

          .user-btns(v-if="!user || !user.id")
            q-btn(:to="{ name: 'auth-login' }" flat :class="{ active: $route.name === 'auth-login' }") Login

            q-btn(:to="{ name: 'auth-register' }" flat :class="{ active: $route.name === 'auth-register' }") Register

          .user-btns(v-else)
            q-btn-dropdown(flat :label="user.name")
              q-list
                q-item(clickable v-close-popup to="/admin")
                  q-item-section
                    q-item-label Admin
                q-item(clickable v-close-popup @click="onLogout")
                  q-item-section
                    q-item-label Logout

      .hero-background-wrapper
        .hero-background

      q-page-container
        q-page.content-wrapper
          router-view

      .footer
        .row
          .col-3.text-center Logo here
          .col-3
            q-list.footer-menu(dense)
              q-item
                q-item-section.title Blue
              q-item
                q-item-section
                  q-btn(:to="{ name: 'contact' }" flat align="left") Contact Us
              q-item
                q-item-section
                  q-btn(:to="{ name: 'contact' }" flat align="left") About Blue
              q-item
                q-item-section
                  q-btn(:to="{ name: 'contact' }" flat align="left") Careers
          .col-3
            q-list.footer-menu(dense)
              q-item
                q-item-section.title Follow Us
              q-item
                q-item-section
                  q-btn(:to="{ name: 'contact' }" flat align="left") Twitter
              q-item
                q-item-section
                  q-btn(:to="{ name: 'contact' }" flat align="left") Facebook
              q-item
                q-item-section
                  q-btn(:to="{ name: 'contact' }" flat align="left") Instagram
          .col-3
            q-list.footer-menu(dense)
              q-item
                q-item-section.title Support
              q-item
                q-item-section
                  q-btn(:to="{ name: 'contact' }" flat align="left") Forum
              q-item
                q-item-section
                  q-btn(:to="{ name: 'contact' }" flat align="left") Wiki
              q-item
                q-item-section
                  q-btn(:to="{ name: 'contact' }" flat align="left") Docs
        .row.footer-bottom
          .col-3
          .col-9
            span.copyright @ {{ year }} Blue. All rights reserved.
            span.links
              router-link(:to="{ name: 'contact' }") Terms of service
              router-link(:to="{ name: 'contact' }") Privacy Policy
              router-link(:to="{ name: 'contact' }") Sitemap
              router-link(:to="{ name: 'hero-test' }") Hero test
</template>
<script>
export default {
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
