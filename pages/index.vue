<template>
  <component
    :is="nameComponent"
    :posts="posts"
  />
</template>

<script>
import pageMixin from '~/mixins/pageMixin'

export default {
  components: {
    DesktopComponent: () => import('~/components/desktop/pages/Home'),
    MobileComponent: () => import('~/components/mobile/pages/Home')
  },
  mixins: [
    pageMixin
  ],
  data(){
    return{
      posts: [],
    }
  },
  async mounted() {
    await this.fetchData();
    // Now, the data has been fetched and is available in this.posts
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch(
          'https://6458a8458badff578ef6f21a.mockapi.io/ed'
        );
        this.posts = await response.json();
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
  },
}
</script>

