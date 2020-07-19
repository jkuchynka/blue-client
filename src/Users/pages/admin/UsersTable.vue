<template lang="pug">
  .users-table
    blue-data-table(
      title="Manage Users"
      :columns="columns"
      :filters="filters"
      :filter-sets="filterSets"
      :on-action="onAction"
      :on-request="onRequest"
      :pagination.sync="pagination"
      :settings="settings"
      :filter-sets-group="filterSetsGroup"
      ref="table"
      @create-filter-set="onCreateFilterSet"
      @update-filter-set="onUpdateFilterSet"
      @delete-filter-set="onDeleteFilterSet"
    )
      template(v-slot:expanded="props")
        div(v-if="props.props.expandView === 'view'")
          user-info(:user="props.props.row")
        div(v-else-if="props.props.expandView === 'edit'")
          user-form(:user-id="props.props.row.id" :on-submit-done="onSubmitDone")

      template(v-slot:body-cell-roles="props")
        div
          q-badge.q-mr-sm(v-for="role in props.props.row.roles" :key="`role-${role.id}`" color="secondary") {{ role.display_name }}
</template>
<script>

import { date } from 'quasar'
import { getRoles } from '@/Auth/services/auth.api'
import { api } from '@/Base'
import FilterSetsMixin from '@/Filtersets/mixins/FilterSetsMixin'
import UserInfo from '@/Users/components/UserInfo'
import UserForm from '@/Users/components/UserForm'
console.log(FilterSetsMixin)
const columns = [
  {
    name: 'id',
    align: 'right'
  },
  {
    name: 'name'
  },
  {
    name: 'email'
  },
  {
    name: 'roles',
    label: 'Roles'
  },
  {
    name: 'created_at',
    label: 'Created',
    format: val => date.formatDate(val, 'M-D-YYYY')
  },
  {
    name: 'updated_at',
    label: 'Updated',
    format: val => date.formatDate(val, 'M-D-YYYY')
  }
]

const filters = [
  {
    field: 'id',
    label: 'ID',
    operators: ['=', '>', '<']
  },
  {
    field: 'name',
    label: 'Name',
    operators: ['*', '=', '!']
  },
  {
    field: 'email',
    label: 'Email',
    operators: ['*']
  },
  {
    field: 'created_at',
    label: 'Created',
    operators: ['>', '<']
  },
  {
    field: 'updated_at',
    label: 'Updated',
    operators: ['>', '<']
  },
  {
    field: 'roles.id',
    label: 'Roles',
    operators: ['=', '!'],
    options: []
  }
]

const pagination = {
  rowsPerPage: 10
}

const settings = {
  entityName: 'User',
  show: {
    import: false
  }
}

export default {
  components: {
    UserInfo,
    UserForm
  },
  mixins: [
    FilterSetsMixin
  ],
  data: () => ({
    columns,
    filters,
    filterSetsGroup: 'admin-users-table',
    pagination,
    settings
  }),
  mounted () {
    // Get all roles and add them as filterSets
    getRoles().then(roles => {
      this.filterSets = roles.map(role => {
        return {
          name: role.display_name,
          button: true,
          filters: [
            {
              field: 'roles.id',
              operator: '=',
              value: role.id
            }
          ]
        }
      })
      let filter = this.filters.find(filter => filter.field === 'roles.id')
      filter.options = roles.map(role => {
        return {
          label: role.display_name,
          value: role.id
        }
      })

      this.filterSets.push({
        name: 'Created Today',
        button: true,
        filters: [
          {
            field: 'created_at',
            operator: '>=',
            value: new Date().toDateString()
          }
        ]
      })

      this.filterSets.push({
        name: 'Active',
        filters: [
          {
            field: 'active',
            operator: '=',
            value: true
          }
        ]
      })
    })

    // Get user defined filterSets from api
    this.loadFilterSets(this.filterSetsGroup)
  },
  methods: {
    onAction (action, props, resolve, reject) {
      console.log('action', action)
      switch (action) {
        case 'delete':
          api.delete(`users/${props.row.id}`).then(response => {
            resolve()
            this.$refs.table.doRequest()
          })
          break
        case 'deleteSelected':
          api.delete('users', {
            params: {
              ids: props.selected.map(row => row.id)
            }
          }).then(response => {
            resolve()
            this.$refs.table.doRequest()
          })
          break
        case 'view':
          this.$router.push(`/admin/users/${props.row.id}`)
          break
        case 'edit':
          this.$router.push(`/admin/users/${props.row.id}/edit`)
          break
      }
    },
    onRequest (params, resolve, reject) {
      console.log('request', params)
      const sort = params.descending ? '-' + params.sortBy : params.sortBy
      let requestParams = {
        include: 'roles',
        'page[number]': params.page,
        'page[size]': params.rowsPerPage,
        sort,
        'filter[search]': params.filter
      }
      params.filters.forEach(filter => {
        let operator
        switch (filter.operator) {
          case '=':
            operator = ''
            break
          case '*':
            operator = 'like'
            break
          case '>':
            operator = 'gt'
            break
          case '<':
            operator = 'lt'
            break
          case '!':
            operator = '!'
            break
        }
        let key
        switch (operator) {
          case '':
          case '!':
            key = `filter[${filter.field}${operator}]`
            break
          default:
            key = `filter[${filter.field}:${operator}]`
        }
        requestParams[key] = filter.value
      })
      api.get('users', {
        params: requestParams
      }).then(response => {
        console.log('response', response)
        resolve({
          data: response.data.data,
          count: response.data.meta.total
        })
      })
    },
    onSubmitDone (id) {
      this.$refs.table.expand(id)
      this.$refs.table.doRequest()
    },
    onUploaded (info) {
      console.log('info', info)
    }
  }
}
</script>
<style lang="sass">
  .users-table
    .import
      background: #fff
      margin: 24px 0
</style>
