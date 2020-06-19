<template lang="pug">
  .page-header
    .row.page-top
      .col
        .page-title {{ title }}
        .page-nav
          q-btn(
            v-for="(link, i) in links"
            :key="`link-${i}`"
            color="primary"
            :label="link.label"
            :to="link.to"
            :icon="link.icon"
          )

</template>
<script>

export default {
  props: {
    title: {
      type: String
    },
    links: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data: () => ({

  }),
  methods: {

  }
}
</script>
<style lang="styl" scoped>
  .page-top
    .page-title
      margin: 12px 0
      color: $blue-grey-1
      display: inline-block
      font-size: 22px
    .page-nav
      margin-left 20px
      display inline-block
      .q-btn
        margin 0 2px
</style>
