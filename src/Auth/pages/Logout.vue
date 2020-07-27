<script>
// Logs the user out and then redirects to the homepage
export default {
  mounted () {
    this.$store.dispatch('auth/logout').then(() => {
      this.$router.push('/')
    })
  }
}
</script>
