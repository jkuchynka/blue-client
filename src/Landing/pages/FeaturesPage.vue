<template lang="pug">

.features-page
  .intro
    .intro-message Features

  q-card.features
    q-card-section

      div This is a detailed rundown of what Blue has to offer. Everything here is completely customizable and you are not locked into any implementation. Blue is in it's early stages, so not everything here is implemented yet. Code, structure and modules will rapidly change until we hit a solid release. That being said, it should still be a solid starting app and/or resource for new projects at any time.

      .feature
        .title Landing Page
        .about A nice, simple landing page and public layout to get you started. Includes common sample pages you might need. Includes a working contact page and pricing page.

      q-separator

      .feature
        .title Authentication
        .about Registration, login, email verification and reset password flows are all setup and ready to use out of the box.

      q-separator

      .feature
        .title Administration
        .about A beautiful, easy to use administration panel. Users can be given the admin role to access it as well.

      q-separator

      .feature
        .title User Dashboard
        .about A custom layout for end users. This is where your users will use your app after they signup and login. Contains some things you will probably need to start out, such as profiles and messaging. You can immediately start developing your app here and getting it to market.

      q-separator

      .feature
        .title Supercharged Development
        .about Blue uses and encourages using modules for grouping related features. This allows for quicker access to finding something in the code, especially when working on a specific module. This also makes it much easier to use a module in another project, whether you use copy and paste or git submodules is up to you. There are lots of code helpers and tools setup to encourage DRY and reduce the amount of code you need to write. This makes code more readable, less error prone and quicker to create and update. Most of Blue's functionality isn't hidden away in a package, but right in your project repo so you can easily customize modules and use them as a reference for your own. No need for complicated overrides or worrying about modifying core code.

      q-separator

      .feature
        .title Blazing Fast Frontend Development
        .about Easy to use front-end components built on top of Quasar's already awesome components makes redundant tasks easier. Things like an API connection, Vuex store, token handling, protected routes, validation, error handling and more are all setup and ready to use. Easily generate new modules with Quasar's cli (For example, quasar module Tasks, or quasar module Tasks --store --controller).

      q-separator

      .feature
        .title Turbo Backend Development
        .about Out of the box you get a working API, with common modules such as Auth and Users ready to use. You can generate new modules with the Artisan cli (For example, php artisan make:module Tasks) to setup a module API with things like migration, model, controller, routes. Automatically have CRUD setup for your models so you can focus on other things.

      q-separator

      .feature
        .title Testing
        .about Blue comes with automated tests and makes testing your features easy with helpers and a nice testing workflow.

      q-separator

      .feature
        .title Documentation
        .about Blue's documentation is right in your repo, and you can remove it, or change it to add your own app's docs. You can easliy move it to the admin panel. It can also be a great place to demo and work on your own app-wide components.

</template>
<script>

export default {
  data: () => ({

  }),
  methods: {

  }
}
</script>
<style lang="sass" scoped>

.intro-message
  font-family: 'Jomolhari', serif
  font-size: 48px
  line-height: 48px
  color: #fff
  margin-bottom: 12px

.intro-message-sub
  font-size: 18px
  line-height: 22px
  margin: 12px 0
  color: #fff

.features
  padding: 24px 12px

.feature
  padding: 24px 0 12px 0

.title
  font-size: 24px

</style>
