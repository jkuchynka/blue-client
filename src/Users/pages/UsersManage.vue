<template lang="pug">
  .users-manage

    admin-page-header(title="Manage Users", :links="links")

    router-view

</template>
<script>

const links = [
  {
    label: 'Browse',
    to: '/admin/users'
  },
  {
    label: 'New',
    icon: 'fas fa-plus',
    to: '/admin/users/create'
  }
]

export default {
  data: () => ({
    links
  }),
  methods: {

  }
}
</script>
<style lang="sass">

</style>
