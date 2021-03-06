import FlashMessage from '../../components/common/flash-message.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    FlashMessage
  },

  computed: {
    ...mapGetters(['flashMessages'])
  },

  mounted() {
    let messages = JSON.parse(this.$el.dataset.messages)
    this.$store.dispatch('setFlashMessages', messages)
  }
}
