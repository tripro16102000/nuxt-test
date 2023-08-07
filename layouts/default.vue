<template>
  <component :is="nameComponent">
    <nuxt />
  </component>
</template>

<script>
import layoutMixin from '~/mixins/layoutMixin'
export default {
  components: {
    TheLayoutDesktop:() =>  import('~/components/desktop/layouts/TheLayout.vue'),
    TheLayoutMobile:() =>   import('~/components/mobile/layouts/TheLayout.vue')
  },
  mixins: [layoutMixin],
}
</script>
