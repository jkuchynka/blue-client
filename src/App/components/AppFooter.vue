<template lang="pug">
  .footer(:class="`mode-${mode}`")

    mixin btn(to)
      q-btn(:to=to v-bind="btnProps")
        block

    .row
      .col-3.text-center Logo here
      .col-2
        q-list.footer-menu(dense)
          q-item
            q-item-section.title Blue
          q-item
            q-item-section
              +btn("{ name: 'contact' }") Contact Us
          q-item
            q-item-section
              +btn("{ name: 'contact' }") About Blue
          q-item
            q-item-section
              +btn("{ name: 'contact' }") Careers
      .col-2
        q-list.footer-menu(dense)
          q-item
            q-item-section.title &nbsp;
          q-item
            q-item-section
              +btn("{ name: 'pricing' }") Pricing
          q-item
            q-item-section
              +btn("{ name: 'features' }") Features
          q-item
            q-item-section
              +btn("{ name: 'docs' }") Docs
      .col-2
        q-list.footer-menu(dense)
          q-item
            q-item-section.title Follow Us
          q-item
            q-item-section
              +btn("{ name: 'contact' }") Twitter
          q-item
            q-item-section
              +btn("{ name: 'contact' }") Facebook
          q-item
            q-item-section
              +btn("{ name: 'contact' }") Instagram
      .col-2
        q-list.footer-menu(dense)
          q-item
            q-item-section.title Support
          q-item
            q-item-section
              +btn("{ name: 'contact' }") Forum
          q-item
            q-item-section
              +btn("{ name: 'contact' }") Wiki
          q-item
            q-item-section
              +btn("{ name: 'contact' }") Docs
    .row.footer-bottom
      .col-12
        span.copyright @ {{ year }} Blue. All rights reserved.
        span.links
          router-link(:to="{ name: 'contact' }") Terms of service
          router-link(:to="{ name: 'contact' }") Privacy Policy
          router-link(:to="{ name: 'contact' }") Sitemap
          router-link(:to="{ name: 'hero-test' }") Hero test
</template>
<script>
export default {
  name: 'AppFooter',
  props: {
    mode: {
      type: String,
      default: 'default'
    }
  },
  data: () => ({
    year: new Date().getFullYear()
  }),
  computed: {
    btnProps () {
      if (this.mode === 'app') {
        return {
          size: 'sm',
          flat: true,
          align: 'left',
          noCaps: true
        }
      }
      return {
        size: 'md',
        flat: true,
        align: 'left'
      }
    }
  }
}
</script>
<style lang="sass" scoped>

.footer
  padding: 45px
  background-color: $grey-10
  color: #fff

.footer-menu
  .title
    font-size: 2rem
    font-weight: 400
    letter-spacing: 0.00735em
    padding-left: 12px

.footer-bottom
  margin: 60px 0 24px 0
  text-align: center
  .copyright
    margin: 0 48px 0 20px
  .links a
    color: #fff
    margin: 0 12px

.mode-app
  max-width: 900px
  margin-left: auto
  margin-right: auto
  background-color: inherit
  color: #000
  padding-top: 64px
  margin-top: 64px
  border-top: 1px solid $grey-4
  .title
    font-size: 1rem
  .copyright
    font-size: 0.8rem
  .links a
    color: #000
    font-size: 0.8rem

</style>
