
import ItemsList from './components/ItemsList'
import PageHeader from './components/PageHeader'

export default ({ Vue }) => {
  Vue.component('admin-items-list', ItemsList)
  Vue.component('admin-page-header', PageHeader)
}
