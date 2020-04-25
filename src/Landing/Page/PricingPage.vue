<template lang="pug">
  .landing-pricing-page
    q-table(
      title="Sample Pricing Table"
      :data="data"
      :columns="columns"
      :pagination="{rowsPerPage: 0}"
      row-key="name"
      wrap-cells
      separator="vertical"
      hide-bottom
    )
</template>
<script>

const features = [
  {
    name: 'price',
    label: 'Price'
  },
  {
    name: 'sites',
    label: 'Sites'
  },
  {
    name: 'storage',
    label: 'Disk Storage'
  },
  {
    name: 'support',
    label: 'Support'
  },
  {
    name: 'teams',
    label: 'Teams'
  },
  {
    name: 'api',
    label: 'Custom API'
  }
]

const plans = [
  {
    name: 'free',
    label: 'Free',
    headerClasses: 'bg-grey-4',
    classes: 'bg-grey-2',

    price: 'Free',
    sites: 1,
    storage: '1G',
    support: 'X',
    teams: 'X',
    api: 'X'
  },
  {
    name: 'pro',
    label: 'Pro',
    headerClasses: 'bg-green-5',
    classes: 'bg-green-2',

    price: '$10/Month',
    sites: 1,
    storage: '50G',
    support: 'Email Support',
    teams: '$5/month per User',
    api: 'X'
  },
  {
    name: 'enterprise',
    label: 'Enterprise',
    headerClasses: 'bg-blue-4',
    classes: 'bg-blue-2',

    price: '$50/Month',
    sites: 10,
    storage: '200G',
    support: 'Full Chat & Email Support',
    teams: '$5/month per User',
    api: 'Full Access'
  }
]

const columns = [
  {
    name: 'name',
    required: true,
    label: 'Feature',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    classes: 'bg-grey-8 text-white ellipsis',
    style: 'width: 25%',
    headerClasses: 'bg-grey-9 text-white'
  }
]

plans.forEach(plan => {
  columns.push({
    name: plan.name,
    field: plan.name,
    label: plan.label,
    headerClasses: plan.headerClasses,
    classes: plan.classes,
    style: 'width: 25%'
  })
})

const data = features.map(feature => {
  let row = {
    name: feature.label
  }
  plans.forEach(plan => {
    row[plan.name] = plan[feature.name]
  })
  return row
})

export default {
  data: () => ({
    columns,
    data
  }),
  methods: {

  }
}
</script>
<style lang="sass" scoped>

</style>
