import 'prismjs'
import 'prismjs/components/prism-bash'
import Prism from 'vue-prism-component'

export default async ({ Vue }) => {
  Vue.component('prism', Prism)
}
