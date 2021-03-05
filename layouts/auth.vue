<template>
  <div class="flex h-screen items-center justify-center bg-red-pokemon-100">
    <div class="absolute top-0 right-0 m-2">
      <sn-locales />
    </div>

    <nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  name: 'AuthLayout',

  computed: {
    ...mapGetters('auth', ['getToken']),
  },

  methods: {
    redirect(): void {
      if (this.getToken) {
        this.$router.push((this as any).localePath(`/`))
      }
    },
  },

  created(): void {
    this.redirect()
  },

  watch: {
    getToken(): void {
      this.redirect()
    },
  },
})
</script>
