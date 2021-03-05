<template>
  <div :style="optionStyle" class="flex justify-items-center items-center">
    <svg
      :class="{ opacity }"
      viewBox="0 0 120 30"
      xmlns="http://www.w3.org/2000/svg"
      :fill="color"
    >
      <defs>
        <svg:style>
          .opacity {
            -webkit-filter: grayscale(100%);
            filter: grayscale(1);
          }
        </svg:style>
      </defs>
      <circle cx="15" cy="15" r="15">
        <animate
          attributeName="r"
          from="15"
          to="15"
          begin="0s"
          dur="0.8s"
          values="15;9;15"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="fill-opacity"
          from="1"
          to="1"
          begin="0s"
          dur="0.8s"
          values="1;.5;1"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="60" cy="15" r="9" fill-opacity="0.3">
        <animate
          attributeName="r"
          from="9"
          to="9"
          begin="0s"
          dur="0.8s"
          values="9;15;9"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="fill-opacity"
          from="0.5"
          to="0.5"
          begin="0s"
          dur="0.8s"
          values=".5;1;.5"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="105" cy="15" r="15">
        <animate
          attributeName="r"
          from="15"
          to="15"
          begin="0s"
          dur="0.8s"
          values="15;9;15"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="fill-opacity"
          from="1"
          to="1"
          begin="0s"
          dur="0.8s"
          values="1;.5;1"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
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
  name: 'MessageLoaderComponent',

  props: {
    size: { type: [String, Number], default: 120 },
    opacity: { type: Boolean, default: false },
    color: { type: String, default: '#999' },
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
