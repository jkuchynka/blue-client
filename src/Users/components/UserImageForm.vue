<template lang="pug">
.user-image-form
  blue-form(
    v-model="image"
    title="Image"
    :fields="fields"
    :errors="errors"
    :actions="actions"
    :settings="settings"
    :on-submit="onSubmit"
    @upload-added="onAdded"
    @upload-removed="onRemoved"
  )
    template(#field-showImage)
      q-img(src="/statics/kitty.jpg")

</template>
<script>
const actions = {
  cancel: {
    enabled: false
  },
  submit: {
    enabled: false
  }
}

const settings = {}

export default {
  data: () => ({
    actions,
    errors: [],
    fields: [
      {
        name: 'showImage'
      },
      {
        name: 'upload',
        type: 'uploader',
        label: 'Upload',
        accept: 'jpg, png, image/*',
        class: ''
      }
    ],
    image: {},
    imagePreview: null,
    settings,
    upload: null
  }),
  methods: {
    onAdded () {
      this.fields.find(field => field.name === 'upload').class = 'has-value'
    },
    onRemoved () {
      this.fields.find(field => field.name === 'upload').class = ''
    },
    onCancel () {
      this.upload = null
      this.imagePreview = null
    },
    onSubmit () {

    },
    onSave () {
      this.$api.post(`users/${this.user.id}/image`, this.upload).then(response => {
        console.log('image response', response)
      })
    },
    onUploaded (input) {
      const reader = new FileReader()
      reader.onload = () => {
        this.imagePreview = reader.result
      }
      reader.readAsDataURL(input)
    }
  }
}
</script>
<style lang="sass">
.user-image-form
  .q-img
    max-width: 200px
  .q-uploader
    margin: 6px 0
    width: 220px
    .q-uploader__header
      border-bottom-left-radius: inherit
      border-bottom-right-radius: inherit
    .q-uploader__subtitle
      display: none
    .q-uploader__list
      display: none
    &.has-value
      .q-uploader__list
        display: block
</style>
