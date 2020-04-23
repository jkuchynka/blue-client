<template lang="pug">
  .landing-layout
    q-layout(view="lHh Lpr lff")
      q-header
        q-toolbar

          q-toolbar-title
            router-link(to="/") Blue

          q-btn(flat to="/pricing") Pricing

          q-btn(flat to="/features") Features

          q-btn(flat to="/docs") Docs

          q-space

          .user-btns(v-if="!user || !user.id")
            q-btn(flat to="/login") Login

            q-btn(flat to="/register") Register

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

        .content-wrapper
          router-view
</template>
<script>
export default {
  data: () => ({

  }),
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

.landing-layout
  background: blue

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
  min-height: 100vh
  display: flex
  align-items: center
  flex-direction: column
  // background-image linear-gradient(-280deg, #3f51b5, #a832d7)
  // background-image linear-gradient(-280deg, $cyan-6 , $deep-purple-4)
  background-image linear-gradient(-280deg, $cyan-2, $deep-purple-6)
  // background-image: linear-gradient(-280deg, $cyan-2, $blue-10)

.hero-background
  background-repeat: no-repeat
  background-position: 0% 28%
  background-size: cover
  position: absolute
  height: 100%
  width: 100%
  background-image: url(~@/Landing/assets/hero-bg.jpg)
  mix-blend-mode: overlay
  opacity: 0.5

.content-wrapper
  margin-top: 200px
  width: 880px
  z-index: 9
  position: relative

</style>
