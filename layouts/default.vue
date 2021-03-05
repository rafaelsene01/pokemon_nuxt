<template>
  <div class="flex flex-col h-screen">
    <sn-header />

    <main class="flex-1 overflow-y-auto py-2">
      <nuxt />
    </main>

    <!-- <sn-footer /> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  name: 'DefaultLayout',

  computed: {
    ...mapGetters('auth', ['getToken']),
  },

  methods: {
    redirect(): void {
      if (!this.getToken) {
        this.$router.push((this as any).localePath(`/login`))
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
