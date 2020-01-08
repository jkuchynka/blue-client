<template lang="pug">
  q-layout(view="lHh Lpr lFf")
    q-header(elevated)
      q-toolbar
        q-btn(
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        )

        q-toolbar-title Blue - Quasar App

        div Quasar v{{ $q.version }}

    q-drawer(
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    )
      q-list
        q-item-label(header) Quasar Links
        q-item(clickable tag="a" target="_blank" href="https://quasar.dev/start/pick-quasar-flavour")
          q-item-section(avatar)
            q-icon(name="school")
          q-item-section
            q-item-label Docs
            q-item-label(caption) quasar.dev/start/pick-quasar-flavor
        q-item(clickable tag="a" target="_blank" href="https://github.quasar.dev")
          q-item-section(avatar)
            q-icon(name="code")
          q-item-section
            q-item-label Github
            q-item-label(caption) github.com/quasarframework
        q-item(clickable tag="a" target="_blank" href="https://chat.quasar.dev")
          q-item-section(avatar)
            q-icon(name="chat")
          q-item-section
            q-item-label Discord Chat Channel
            q-item-label(caption) chat.quasar.dev
        q-item(clickable tag="a" target="_blank" href="https://forum.quasar.dev")
          q-item-section(avatar)
            q-icon(name="record_voice_over")
          q-item-section
            q-item-label Forum
            q-item-label(caption) forum.quasar.dev
        q-item(clickable tag="a" target="_blank" href="https://twitter.quasar.dev")
          q-item-section(avatar)
            q-icon(name="rss_feed")
          q-item-section
            q-item-label Twitter
            q-item-label(caption) @quasarframework
        q-item(clickable tag="a" target="_blank" href="https://facebook.quasar.dev")
          q-item-section(avatar)
            q-icon(name="public")
          q-item-section
            q-item-label Facebook
            q-item-label(caption) @QuasarFramework

      q-list
        q-item-label(header) Other Packages and Tools
        q-item(clickable tag="a" target="_blank" href="https://pugjs.org")
          q-item-section(avatar)
            q-icon(name="dog")
          q-item-section
            q-item-label Pug
            q-item-label(caption) pugjs.org
        q-item(clickable tag="a" target="_blank" href="http://stylus-lang.com")
          q-item-section(avatar)
            q-icon(name="css")
          q-item-section
            q-item-label Stylus
            q-item-label(caption) stylus-lang.com

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
