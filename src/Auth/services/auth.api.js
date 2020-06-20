
import { api } from '@/Base'

export function getRoles () {
  return api.get('auth/roles').then(response => {
    return response.data.data
  })
}
