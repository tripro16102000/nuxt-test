import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'isDeviceWeb'
    ]),
    nameComponent () {
      return this.isDeviceWeb ? 'DesktopComponent' : 'MobileComponent'
    }
  }
}
