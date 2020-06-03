<template lang="pug">
  .blue-data-table
    h2 BlueDataTable
    p Used to create a data table, for example creating an adminstration table for users, with pagination, search, sorting, filtering, batch actions, exporting and importing.

    h3 Demo

    .q-my-md
      demo-blue-data-table
</template>
<script>

import DemoBlueDataTable from 'quasar-app-extension-blue/src/demo/DemoBlueDataTable'
export default {
  name: 'BlueDataTable',
  components: { DemoBlueDataTable },
  data: () => ({

  }),
  methods: {

  }
}
</script>
<style lang="styl">

</style>
