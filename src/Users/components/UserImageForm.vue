<template lang="pug">
.user-image-form
  blue-form(
    v-model="image"
    title="Image"
    :fields="fields"
    :errors="errors"
    :actions="actions"
    :settings="settings"
    @image-added="onAdded"
    @image-removed="onRemoved"
    @image-start="onStartUpload"
    @image-failed="onFailedUpload"
    @image-uploaded="onUploaded"
    ref="form"
  )
    template(#field-showImage)
      q-img(:src="userImage")

</template>
<script>
import { LocalStorage } from 'quasar'

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
  props: ['user'],
  data: () => ({
    actions,
    errors: [],
    fields: [
      {
        name: 'showImage'
      },
      {
        name: 'image',
        fieldName: 'image',
        ref: 'image',
        type: 'uploader',
        label: 'Upload',
        accept: 'jpg, png, image/*',
        class: ''
      }
    ],
    image: {},
    imagePreview: null,
    settings
  }),
  computed: {
    userImage () {
      if (this.user.image) {
        return 'http://localhost:8844/api/files/' + this.user.image.id + '/image'
      }
      return '/statics/kitty.jpg'
    }
  },
  mounted () {
    const image = this.fields.find(field => field.name === 'image')
    const token = LocalStorage.getItem('token')
    image.factory = () => ({
      url: `${this.$api.defaults.baseURL}/users/${this.user.id}/image`,
      headers: [
        { name: 'Authorization', value: `Bearer ${token}` }
      ]
    })
  },
  methods: {
    onAdded () {
      this.fields.find(field => field.name === 'image').class = 'has-value'
    },
    onRemoved () {
      this.fields.find(field => field.name === 'image').class = ''
    },
    onFailedUpload (info) {
      this.errors = ['There was an error uploading the image']
    },
    onStartUpload () {
      this.errors = []
    },
    onUploaded (info) {
      this.user.image = JSON.parse(info.xhr.response)
      this.$refs.form.$refs.image.reset()
      this.onRemoved()
      this.$q.notify('Image updated')
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
