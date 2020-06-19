<template lang="pug">
  .admin-items-list
    q-list(bordered separator)
      q-item(
        v-for="(item, i) in __items"
        :key="`item-${i}`"
      )
        q-item-section
          q-item-label {{ item.label }}
            blue-copy(v-if="item.copy" v-model="item.value")
          q-item-label(caption)
            slot(:name="`${item.label}-value`" :props="item")
              div(v-if="item.html" v-html="item.html")
              div(v-else-if="item.value") {{ item.value }}

</template>
<script>

import { itemsFromModel } from '..'

/**
 * Admin component for displaying a list of
 * data for an entity
 */
export default {
  props: ['items', 'model'],
  computed: {
    __items () {
      if (!this.items && this.model) {
        return itemsFromModel(this.model)
      }
      return this.items
    }
  }
}
</script>
<style lang="sass" scoped>

</style>
