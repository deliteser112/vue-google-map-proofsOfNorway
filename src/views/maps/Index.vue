<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Map',

    metaInfo: { title: 'Map' },

    extends: View,

    mixins: [
      LoadSections(['map-view']),
    ],

    props: {
      id: {
        type: String,
        default: 'maps',
      },
    },
  }
</script>
