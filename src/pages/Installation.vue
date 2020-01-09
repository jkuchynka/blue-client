<template lang="pug">
  .installation
    q-page
      h1 Installation
      p This is assuming you are installing each project in separate directories. For instance, myapp/ with myapp/client and myapp/api. You should have already have PHP 7.x and composer installed.
      h2 API
      prism(language="bash").
        git clone git@github.com:jbizzay/blue-api.git api
        cd api
        composer install
        cp .env.example .env
      p Create a database and set your credentials in your .env file
      prism(language="bash").
        php artisan migrate
      p Optionally seed some test data such as dummy users
      prism(language="bash").
        php artisan db:seed
        composer dev
      p The API should now be serving at http://localhost:8845

      h2 Client
      prism(language="bash").
        git clone git@github.com:jbizzay/blue-client.git client
        cd client
        yarn
        q dev
      p The app should now open in your browser at http://localhost:8844. You can now start coding away!

      prism(language="js").
        export default {
          name: 'hello'
        }

      q-btn(size="lg" icon-right="fas fa-arrow-right" color="primary" :to="{ name: 'blue-quasar-components' }") Using Blue Quasar components
</template>
<script>

export default {
  name: 'PageInstallation',
  data: () => ({

  }),
  methods: {

  }
}
</script>
<style lang="styl">

</style>
