<template lang="pug">
  q-page.blue-quasar-components
    h1 Blue Quasar Components
    p This package extends Quasar's already awesome components library with extra functionality. It is meant to shorten the code required to build your components, while also enforcing a common look and functionality across your app's components. Your app's components are located at components/app, and these are already loaded globally in boot/app, so you don't need to require them when using them.
    p An example is if you have a lot of confirmation popups, you want them all to look and work the same. If you need to change the color of a button, or modify the layout, you can edit the file at components/app/Confirm.vue. This component extends the BlueConfirm component, which has a default template and some props to display a title, message and button labels. You would simply use it like this somewhere else in your app:
    prism(language="js").
      app-confirm(
        :show="showConfirm"
        :on-confirm="onConfirm"
        :message="confirmMessage"
        :title="confirmTitle"
      )
    p See the docs below for more info on using the blue-confirm component. The examples below show blue- components, but inside the starter app, you would generally want to use app- instead.

    h2 BlueConfirm
    p Used to confirm actions, such as deleting a user.
    q-table(
      title="Props"
      :columns="columnsProps"
      :data="dataConfirm"
      :hide-bottom="true"
    )

    h2 BlueDataTable
    p Used to create a data table, for example creating an adminstration table for users, with pagination, search, sorting, filtering, batch actions, exporting and importing.
    q-table(
      title="Props"
      :columns="columnsProps"
      :data="dataDataTable"
      :hide-bottom="true"
    )

    h2 BlueForm
    p Used for creating dynamic forms. Includes validation and submit callbacks
    q-table(
      title="Props"
      :columns="columnsProps"
      :data="dataForm"
      :hide-bottom="true"
    )

    q-table.q-mt-md(
      title="Fields"
      :columns="columnsFormFields"
      :data="dataFormFields"
      :hide-bottom="true"
      :wrap-cells="true"
    )

</template>
<script>

let columnsProps = [
  {
    label: 'Name',
    field: 'name',
    style: 'font-weight: bold'
  },
  {
    label: 'Type',
    field: 'type'
  },
  {
    label: 'Required',
    field: 'required'
  },
  {
    label: 'Default',
    field: 'default'
  },
  {
    label: 'Description',
    field: 'description'
  }
]
columnsProps.forEach(column => {
  column.align = 'left'
})

const dataConfirm = [
  {
    name: 'show',
    type: 'Boolean',
    required: true,
    description: 'Whether to show the component.'
  },
  {
    name: 'on-submit',
    type: 'Function',
    required: true,
    description: 'Called when the submit button is clicked.'
  },
  {
    name: 'on-cancel',
    type: 'Function',
    required: false,
    default: 'Hides the component.',
    description: 'Called when the cancel button is clicked.'
  },
  {
    name: 'title',
    type: 'String',
    required: false,
    default: 'Confirm this action',
    description: 'The title to display.'
  },
  {
    name: 'message',
    type: 'String',
    required: false,
    default: '',
    description: 'The message to display.'
  },
  {
    name: 'label-cancel',
    type: 'String',
    required: false,
    default: 'Cancel',
    description: 'Cancel button label'
  },
  {
    name: 'label-submit',
    type: 'String',
    required: false,
    default: 'Confirm',
    description: 'Submit button label'
  }
]

const dataDataTable = [
  {
    name: 'columns',
    type: 'Array',
    required: true,
    description: 'Columns definitions. See below for more info.'
  },
  {
    name: 'on-request',
    type: 'Function',
    required: true,
    description: 'Called when the table needs to request data, passing in params, resolve and reject. params includes pagination, search and filtering data. resolve an object with data and count properties.'
  },
  {
    name: 'on-batch-action',
    type: 'Function',
    required: false,
    description: 'Called when a batch action is performed on the table, passing in action and selected.'
  },
  {
    name: 'settings',
    type: 'Object',
    required: false,
    description: 'Table level settings'
  }
]

const dataForm = [
  {
    name: 'data',
    type: 'Object',
    required: true,
    description: 'Form data object'
  },
  {
    name: 'title',
    type: 'String',
    required: false,
    description: 'The title to display.'
  },
  {
    name: 'fields',
    type: 'Array',
    required: true,
    description: 'The field definitions. See table below for more info'
  },
  {
    name: 'settings',
    type: 'Object',
    required: false,
    description: 'Form level settings, such as require all fields, etc. See below for more info'
  },
  {
    name: 'on-submit',
    type: 'Function',
    required: true,
    description: 'Called when the submit button is clicked.'
  }
]

let columnsFormFields = [
  {
    label: 'Name',
    field: 'name',
    style: 'font-weight: bold'
  },
  {
    label: 'Type',
    field: 'type'
  },
  {
    label: 'Options',
    field: 'options'
  },
  {
    label: 'Required',
    field: 'required'
  },
  {
    label: 'Default',
    field: 'default'
  },
  {
    label: 'Description',
    field: 'description'
  }
]
columnsFormFields.forEach(column => {
  column.align = 'left'
})

const dataFormFields = [
  {
    name: 'name',
    type: 'String',
    required: true,
    description: 'The field name. This field maps to the formData object.'
  },
  {
    name: 'type',
    type: 'String',
    required: false,
    default: 'text',
    options: 'text|password|email|search|tel|url|time|date|checkbox|select|toggle',
    description: 'The field type'
  },
  {
    name: 'align',
    type: 'String',
    required: false,
    default: 'right',
    options: 'left|right',
    description: 'Align the field'
  }
]

export default {
  name: 'PageBlueQuasarComponents',
  data: () => ({
    columnsProps,
    dataConfirm,
    dataDataTable,
    dataForm,
    columnsFormFields,
    dataFormFields
  }),
  methods: {

  }
}
</script>
<style lang="styl">

</style>
