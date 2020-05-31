<template lang="pug">
  .admin-main-nav

    // q-input(ref="filter" filled v-model="filter" label="Filter")

    q-list.nav-list(dark)
      q-item(
        clickable
        to="/"
      )
        .active-box
        q-item-section(avatar)
          q-avatar(icon="fas fa-home")
        q-item-section Dashboard

    q-list.text-primary(dense)
      q-expansion-item(
        v-for="(item, idx) in links"
        :key="idx"
        v-model="item.expanded"
        group="navgroup"
        :label="item.label"
        :icon="item.icon"
        :header-class="['bg-grey-10', item.active ? 'router-active': '']"
        dark
      )
        div(v-if="item.component" :is="item.component")

        q-list.nav-list(dark v-else)
          q-item(
            clickable
            v-for="(link, linkIdx) in item.links"
            :key="idx + '-' + linkIdx"
            :to="link.to"
            :class="[link.active ? 'active': '']"
          )
            .active-box
            q-item-section(avatar)
              q-avatar(:icon="link.icon" v-if="link.icon")
              q-avatar(v-else) {{ link.label[0] }}
            q-item-section
              q-item-label {{ link.label }}
              q-item-label(caption v-if="link.active && link.caption") {{ link.caption }}

</template>
<script>

const items = [
  {
    key: 'lenders',
    label: 'Lenders',
    icon: 'fas fa-building',
    links: [
      {
        key: 'lenders-manage',
        label: 'Manage Lenders',
        icon: 'fas fa-building',
        to: '/admin/lenders'
      },
      {
        key: 'lenders-submissions',
        label: 'Manage Submissions',
        icon: 'fas fa-envelope-open',
        to: '/admin/lenders/submissions'
      }
    ]
  },
  {
    key: 'users',
    label: 'Users',
    icon: 'fas fa-users',
    links: [
      {
        key: 'users-manage',
        label: 'Manage Users',
        icon: 'fas fa-users',
        to: '/admin/users'
      }
    ]
  },
  {
    key: 'settings',
    label: 'Settings',
    icon: 'fas fa-cog',
    links: [

    ]
  }
]

items.forEach(item => {
  item.active = false
  item.expanded = false
  if (item.links) {
    item.links.forEach(link => {
      link.active = false
    })
  }
})

export default {
  data: () => ({
    filter: null,
    items
  }),
  methods: {

  },
  computed: {
    links () {
      console.log('COMPUTE LINKS')
      const path = this.$route.fullPath
      this.items.forEach(item => {
        if (item.links) {
          item.links.forEach(link => {
            link.active = false
            if (path.includes(link.to)) {
              item.expanded = true
              item.active = true
            }
            if (path === link.to || (link.edit && path === link.edit)) {
              link.active = true
            }
          })
        }
        if (item.key === 'notebooks' && path !== '/notebooks/create' && path.includes('/notebooks')) {
          item.expanded = true
          item.active = true
        }
      })
      return this.items
    }
  }
}
</script>
<style lang="sass" scoped>

.admin-main-nav
  .q-item__section--avatar
    min-width: auto
    padding-right: 20px
    .q-icon
      font-size: 16px
  .nav-list
    .q-item
      color: $blue-grey-3
      min-height: auto
      padding: 0 4px
      .q-item__section--side
        padding-right: 8px
    .q-icon, .q-avatar
      color: $blue-grey-2
    .active-box
      display: none
      width: 3px
      height: 100%
      position: absolute
      left: 0
      top: 0
      background: $blue-5
    .q-router-link--exact-active, .router-active
      color: $red-9

</style>
