<template>
  <div v-bind="$attrs">
    <component :is="name" v-bind="$props" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MessageLoad from './message-load.vue'
import Previous from './previous.vue'
import Next from './next.vue'

export default Vue.extend({
  name: 'SNIconComponent',

  components: {
    MessageLoad,
    Previous,
    Next,
  },

  props: {
    name: { type: String, required: true },
    color: { type: String },
    size: { type: [Number, String] },
    opacity: { type: Boolean },
  },
})
</script>
