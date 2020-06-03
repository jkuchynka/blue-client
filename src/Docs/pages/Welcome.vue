<template lang="pug">
  q-page.welcome
    p
      span.text-h1.text-blue.q-mr-sm.blue Blue
      | is a starter app built with Quasar (VueJS) and Laravel. The frontend and the backend are separate projects, which allows for using them separately. Together, they provide a fully working landing page, auth and admin. The app is setup as a SPA, with a Laravel API.
    h2 Features
    ul
      li Login
      li Registration
      li Password Resets
      li JWT
      li Admin dashboard
      li Administer users
    h2 Packages and tools used by Blue
    h3 Frontend
    ul
      li Quasar 1.x
      li Blue Quasar components
      li Vuex
      li Pug
      li Stylus
    h3.text-h3 API
    ul
      li Laravel 6.x
      li Tymon jwt-auth
    q-btn(size="lg" color="primary" icon-right="fas fa-arrow-right" :to="{ name: 'installation' }") Installation
</template>

<script>
export default {
  name: 'PageWelcome'
}
</script>

<style lang="stylus">
  .welcome
    .blue
      line-height 5rem
</style>
