<template lang="pug">
  .user-info
    .title {{ user.name }}
    .sub-title {{ user.email }}

    q-list.data(bordered separator)
      q-item.entry(v-for="(entry, i) in data" :key="'entry-' + i")
        q-item-section
          q-item-label {{ entry.label }}
            .copy
              blue-copy(v-if="entry.copy" v-model="entry.value")
          q-item-label(caption)
            div(v-if="entry.valueHtml" v-html="entry.valueHtml")
            div(v-else-if="entry.values")
              div(v-for="(value, i_v) in entry.values" :key="'entry-' + i + '-value-' + i_v") {{ value }}
            div(v-else-if="entry.value") {{ entry.value }}

</template>
<script>

export default {
  props: ['user'],
  data: () => ({

  }),
  computed: {
    data () {
      if (!this.lender.id) {
        return []
      }
      let data = []
      return data
    }
  },
  methods: {

  }
}
</script>
<style lang="styl">
  .user-info
    max-width 650px
    .data
      margin 12px 0
    .text-caption > div
      white-space initial
</style>
