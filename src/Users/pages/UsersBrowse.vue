<template lang="pug">
  .users-browse
    blue-data-table(
      title="Users"
      :columns="columns"
      :on-action="onAction"
      :on-request="onRequest"
      :pagination.sync="pagination"
      :settings="settings"
      ref="table"
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
import { api } from '@/Base'
import UserInfo from '@/Users/components/UserInfo'
import UserForm from '@/Users/components/UserForm'

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
  data: () => ({
    columns,
    pagination,
    settings
  }),
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
      api.get('users', {
        params: {
          include: 'roles',
          'page[number]': params.page,
          'page[size]': params.rowsPerPage,
          sort,
          'filter[search]': params.filter
        }
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
  .users-browse
    .import
      background: #fff
      margin: 24px 0
</style>
