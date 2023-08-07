import { mapActions } from 'vuex'

export default {
  data () {
    return {
      innerWidth: 1024
    }
  },
  computed: {
    isDeviceDesktop () {
      return this.innerWidth >= 1024
    },
    nameComponent() {
      return this.isDeviceDesktop ? 'TheLayoutDesktop' : 'TheLayoutMobile'
    }
  },
  watch: {
    isDeviceDesktop: {
      handler () {
        this.changeDevice(this.isDeviceDesktop)
      }
    }
  },
  mounted () {
    this.innerWidth = window.innerWidth
    window.addEventListener('resize', this.changeInnerWidth)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.changeInnerWidth)
  },
  methods: {
    ...mapActions({
      changeDevice: 'changeDevice',
    }),
    changeInnerWidth () {
      this.innerWidth = window.innerWidth
    }
  }
}
