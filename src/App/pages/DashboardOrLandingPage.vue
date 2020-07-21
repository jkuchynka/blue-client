<template lang="pug">
  div
    component(:is="page")
      router-view
</template>
<script>
import DashboardPage from './DashboardPage'
import LandingPage from '@/Landing/Page/LandingPage'

export default {
  components: {
    DashboardPage,
    LandingPage
  },
  computed: {
    page () {
      return this.$store.state.auth.user ? 'DashboardPage' : 'LandingPage'
    }
  }
}
</script>
