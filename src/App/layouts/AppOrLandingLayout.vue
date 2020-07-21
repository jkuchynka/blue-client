<template lang="pug">
.app-or-landing-layout
  component(:is="layout")
    router-view
</template>
<script>
import AppLayout from './AppLayout'
import LandingLayout from '@/Landing/layouts/LandingLayout'

export default {
  components: {
    AppLayout,
    LandingLayout
  },
  computed: {
    layout () {
      return this.$store.state.auth.user ? 'AppLayout' : 'LandingLayout'
    }
  }
}
</script>
