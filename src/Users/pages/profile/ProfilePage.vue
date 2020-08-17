<template lang="pug">
q-page.user-profile
  .row.items-baseline(v-if="!loading")
    .text-h1.heading.username {{ user.username }}
  div.relative-position
    items-list(:model="user", :exclude-keys="['image']")
      template(v-slot:Roles-value)
        q-badge.q-mr-sm(v-for="role in user.roles" :key="`role-${role.id}`" color="secondary") {{ role.display_name }}

  app-loading(:loading="loading")
</template>
<script>
import ItemsList from '@/Admin/components/ItemsList'

export default {
  components: {
    ItemsList
  },
  data: () => ({
    loading: true,
    user: {}
  }),
  computed: {
    userImage () {
      if (this.user.image) {
        return 'http://localhost:8844/api/files/' + this.user.image.id + '/image'
      }
      return '/statics/kitty.jpg'
    }
  },
  mounted () {
    this.getUser()
  },
  methods: {
    getUser () {
      const username = this.$route.params.userName
      this.$api.get(`users/${username}`).then(response => {
        this.user = response.data.data
        this.loading = false
      })
    }
  }
}
</script>
<style lang="sass" scoped>
.username
  margin: 0 0 0 6px
</style>
