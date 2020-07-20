<template lang="pug">
  q-page.user-profile
    h1.heading {{ user.username }}
    items-list(:model="user")
      template(v-slot:Roles-value)
        q-badge.q-mr-sm(v-for="role in user.roles" :key="`role-${role.id}`" color="secondary") {{ role.display_name }}
    div.q-my-md
      q-btn(:to="`/user/${user.username}/edit`" color="grey") Edit
</template>
<script>
import ItemsList from '@/Admin/components/ItemsList'

export default {
  components: {
    ItemsList
  },
  data: () => ({
    user: {}
  }),
  mounted () {
    this.getUser()
  },
  methods: {
    getUser () {
      const username = this.$route.params.userName
      this.$api.get(`users/${username}`).then(response => {
        this.user = response.data.data
      })
    }
  }
}
</script>
