import 'prismjs'
import 'prismjs/components/prism-bash'
import Prism from 'vue-prism-component'
// import { BlueForm } from 'quasar-app-extension-blue'
import BlueForm from 'quasar-app-extension-blue/src/component/BlueForm'
import BlueDataTable from 'quasar-app-extension-blue/src/component/BlueDataTable'

export default async ({ Vue }) => {
  Vue.component('prism', Prism)
  BlueForm.setDefaults({
    props: {
      form: {
        // class: 'bg-green'
      },
      fields: {
        stackLabel: false
      },
      wrapper: {
        class: 'bg-grey-2'
      },
      text: {
        // class: 'bg-red'
      }
    }
  })
  BlueDataTable.setDefaults({
    props: {
      column: {
        // classes: 'bg-grey'
      }
    },
    show: {
      // paginationPerPage: false
    }
  })
}
