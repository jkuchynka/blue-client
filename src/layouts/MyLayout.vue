<template lang="pug">
  q-layout(view="lHh Lpr lFf")
    q-header.app-header(elevated)
      q-toolbar
        q-btn(
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="fas fa-bars"
          aria-label="Menu"
        )

        q-toolbar-title
          router-link(to="/") Blue - Quasar App

        div Quasar v{{ $q.version }}

    q-drawer(
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      dark
    )
      q-list

        q-item-label(header) Quasar Links

        q-item(clickable tag="a" target="_blank" href="https://quasar.dev/start/pick-quasar-flavour")
          q-item-section(avatar)
            q-icon(name="fas fa-school")
          q-item-section
            q-item-label Docs
            q-item-label(caption) quasar.dev/start/pick-quasar-flavor

        q-item(clickable tag="a" target="_blank" href="https://github.quasar.dev")
          q-item-section(avatar)
            q-icon(name="fab fa-github")
          q-item-section
            q-item-label Github
            q-item-label(caption) github.com/quasarframework

        q-item(clickable tag="a" target="_blank" href="https://chat.quasar.dev")
          q-item-section(avatar)
            q-icon(name="fab fa-discord")
          q-item-section
            q-item-label Discord Chat Channel
            q-item-label(caption) chat.quasar.dev

        q-item(clickable tag="a" target="_blank" href="https://forum.quasar.dev")
          q-item-section(avatar)
            q-icon(name="fas fa-comments")
          q-item-section
            q-item-label Forum
            q-item-label(caption) forum.quasar.dev

        q-item(clickable tag="a" target="_blank" href="https://twitter.quasar.dev")
          q-item-section(avatar)
            q-icon(name="fab fa-twitter")
          q-item-section
            q-item-label Twitter
            q-item-label(caption) @quasarframework

        q-item(clickable tag="a" target="_blank" href="https://facebook.quasar.dev")
          q-item-section(avatar)
            q-icon(name="fab fa-facebook")
          q-item-section
            q-item-label Facebook
            q-item-label(caption) @QuasarFramework

      q-list
        q-item-label(header) Other Packages and Tools

        q-item(clickable tag="a" target="_blank" href="https://pugjs.org")
          q-item-section(avatar)
            q-icon(name="fas fa-paw")
          q-item-section
            q-item-label Pug
            q-item-label(caption) pugjs.org

        q-item(clickable tag="a" target="_blank" href="http://stylus-lang.com")
          q-item-section(avatar)
            q-icon(name="fas fa-pen")
          q-item-section
            q-item-label Stylus
            q-item-label(caption) stylus-lang.com

        q-item(clickable tag="a" target="_blank" href="https://fontawesome.com/icons?d=gallery&m=free")
          q-item-section(avatar)
            q-icon(name="fas fa-icons")
          q-item-section
            q-item-label Font Awesome
            q-item-label(caption) fontawesome.com/icons?d=gallery&m=free

    q-page-container
      router-view
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>

<style lang="stylus">
  .app-header
    .q-toolbar__title a
      color inherit
      text-decoration none
</style>
