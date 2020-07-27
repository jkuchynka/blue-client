<template lang="pug">
  .landing-page

    .intro
      .intro-message Welcome to Blue.
      .intro-message-sub Enjoy your new supercharged development environment. Focus on building your app, not the mundane stuff. Powered by Laravel, VueJS and Quasar.

      .intro-message-about
        .bg
        p We love building web apps. We hate building the same things over and over, or taking too much time to get a new idea up and running. So, we bundled up our favorite tools in an easy to use package, and put together common features that come with most web apps. Of course, every starter app is opiononated, but we think the frameworks and packages used in Blue are 1) Quick to learn 2) Fun to use 3) Enable fast development. We've also added some tools of our own.
        p The frontend and the backend are separate projects, so you can use either one if you want a Node API instead of Laravel, or a React frontend instead of Vue. But for fans of Laravel and Vue it could be a perfect fit for your next killer project.
        p Here's a quick rundown of the features that work out of the box. Check out the #[router-link(:to="{ name: 'features' }") Features] page for more details.
        ul
          li Landing Page
          li Authentication
          li Administration
          li User Dashboard
          li Testing
          li Documentation
        p We're looking forward to seeing the awesome stuff you build with it! #[router-link(:to="{ name: 'contact' }") Contact us] if you would like us to showcase your project, or if you want to give feedback or just say hi. Feel free to file issues or give back to the project at our #[a(href="https://github.com/jkuchynka/blue") Github].

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
  color: #fff
  text-align: center

.intro-message-sub
  font-size: 22px
  margin: 12px 0
  color: #fff
  text-align: center

.intro-message-about

  > *
    position: relative
    z-index: 9

  font-size: 18px
  margin: 24px 0
  padding: 42px 24px
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
    // opacity: 0.8
    z-index: 1
</style>
