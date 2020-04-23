<template lang="pug">
  .landing-layout
    q-layout(view="lHh Lpr lff")
      q-header
        q-toolbar

          q-toolbar-title
            router-link(to="/") Blue

          q-btn(flat to="/pricing") Pricing

          q-btn(flat to="/features") Features

          q-space

          q-btn(flat to="/login") Login

          q-btn(flat to="/register") Register

      .hero-background-wrapper
        .hero-background

        .content-wrapper
          router-view
</template>
<script>
export default {
  data: () => ({

  })
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
  width: 880px
  z-index: 9
  padding-top: 200px
  text-align: center
  position: relative
  color: #fff

</style>
