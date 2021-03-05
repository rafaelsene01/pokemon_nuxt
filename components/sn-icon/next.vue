<template>
  <div :style="optionStyle" class="flex justify-items-center items-center">
    <svg
      :class="{ opacity }"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fill-rule="evenodd"
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        clip-rule="evenodd"
      />
    </svg>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

type OptionsType = {
  width: string
  height: string
  opacity: boolean
}

export default Vue.extend({
  name: 'NextComponent',

  props: {
    size: { type: [String, Number], default: 120 },
    opacity: { type: Boolean, default: false },
  },

  methods: {
    convertValue(value: string | number): string {
      if (
        (typeof value === 'string' && /^(\d+)$/.test(value)) ||
        typeof value === 'number'
      ) {
        value = value + 'px'
      }
      return value
    },
  },

  computed: {
    optionStyle(): OptionsType {
      return {
        width: this.convertValue(this.size),
        height: this.convertValue(this.size),
        opacity: this.opacity,
      }
    },
  },
})
</script>
