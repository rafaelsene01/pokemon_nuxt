<template>
  <nav class="flex shadow-sm -space-x-px">
    <a
      @click="previous()"
      class="items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
    >
      <sn-icon size="24" name="Previous" />
    </a>
    <a
      v-for="key in 8"
      :key="key"
      @click="changeValue(key)"
      :class="[
        { 'bg-gray-200': key === version },
        { 'hidden md:flex': key !== version },
      ]"
      class="flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
    >
      {{ key }}
    </a>
    <a
      @click="next()"
      class="items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
    >
      <sn-icon size="24" name="Next" />
    </a>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PaginationComponent',

  props: {
    version: { type: Number },
  },

  methods: {
    changeValue(value: Number): void {
      this.$emit('update:version', value)
    },

    previous(): void {
      if (this.version > 1) {
        this.$emit('update:version', this.version - 1)
      }
    },

    next(): void {
      if (this.version < 8) {
        this.$emit('update:version', this.version + 1)
      }
    },
  },
})
</script>
