<template lang="pug">
.app-loading
  q-inner-loading(:showing="loading")
    q-spinner-ios(color="primary" size="2rem")
</template>
<script>
export default {
  props: ['loading']
}
</script>
