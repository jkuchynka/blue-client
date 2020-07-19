
import { api } from '@/Base'

export function getFilterSets (group = null) {
  let uri = 'filtersets?include=filters'
  if (group) {
    uri += '&filter[group]=admin-users-table'
  }
  return api.get(uri).then(response => {
    return response.data.data
  })
}

export function postFilterSet (filterSet) {
  return api.post('filtersets', filterSet).then(response => {
    console.log('response', response)
    return response.data.data
  })
}

export function putFilterSet (filterSet) {
  return api.put(`filtersets/${filterSet.id}`, filterSet).then(response => {
    return response.data.data
  })
}

export function deleteFilterSet (filterSet) {
  return api.delete(`filtersets/${filterSet.id}`).then(response => {
    return response.data
  })
}
