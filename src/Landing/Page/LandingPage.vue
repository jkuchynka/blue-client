<template lang="pug">
  .landing-page

    .intro
      .intro-message Welcome to Blue.
      .intro-message-sub A full-fledged spa starter app built with Quasar (VueJS) and Laravel API.

      .intro-message-about
        .bg
        .text The frontend and the backend are separate projects, which allows for using them separately. Together, they provide a fully working landing page, auth flow and admin.
</template>
<script>
export default {
  data: () => ({

  })
}
</script>
<style lang="sass" scoped>

.intro-message
  font-family: 'Jomolhari', serif
  font-size: 48px
  line-height: 48px

.intro-message-sub
  font-size: 22px
  margin: 12px 0

.intro-message-about
  font-size: 18px
  margin: 24px 0
  padding: 24px
  text-align: left
  position: relative
  color: $grey-10
  .text
    position: relative
    z-index: 9
  .bg
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    background: $grey-1
    opacity: 0.8
    z-index: 1
</style>
