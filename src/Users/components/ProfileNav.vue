<template lang="pug">
.users-profile-nav.fit.scroll
  q-scroll-area(
    style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd"
  )
    q-list(padding)
      q-item(
        v-for="(link, i) in links"
        :key="i"
        :to="link.to"
        clickable
        v-ripple
        exact
      )
        q-item-section(avatar)
          q-icon(:name="link.icon")
        q-item-section {{ link.label }}

  q-img.absolute-top(src="https://cdn.quasar.dev/img/material.png" style="height: 150px")
    div.absolute-bottom(bg-transparent)
      q-avatar.q-mb-sm(size="56px")
        img(src="https://cdn.quasar.dev/img/boy-avatar.png")

      div.text-weight-bold Razvan Stoenescu
      div @rstoenescu
</template>
<script>
const navLinks = [
  {
    icon: 'face',
    label: 'Profile',
    to: { name: 'UsersProfile' }
  },
  {
    icon: 'settings',
    label: 'Settings',
    to: { name: 'UsersProfileSettings' }
  },
  {
    icon: 'lock',
    label: 'Password',
    to: { name: 'UsersProfilePassword' }
  },
  {
    icon: 'apps',
    label: 'Plans',
    to: { name: 'UsersProfilePlans' }
  }
]

export default {
  computed: {
    links () {
      let links = [...navLinks]
      links.forEach(link => {
        link.to.params = {
          userName: this.$route.params.userName
        }
      })
      return links
    }
  }
}
</script>
