<template>
  <header class="header">
    <nuxt-link to="/">
      <img
        class="min-w-44 h-16 xl:h-20"
        src="@images/pokemon-logo.png"
        alt=""
      />
    </nuxt-link>

    <sn-locales v-if="home" />

    <sn-pagination v-if="show" :version.sync="version" />
    <sn-search v-if="show" />
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import snLocales from './sn-locales.vue'

type DataType = {
  home: boolean
  show: boolean
  version: number
}

type EventType = {
  [key: string]: any // Fiz isso porque o que me interessa e somente a chave de baixo.
  name: string
}

export default Vue.extend({
  components: { snLocales },
  name: 'HeaderComponent',

  data: (): DataType => {
    return {
      home: false,
      show: false,
      version: 1,
    }
  },

  created(): void {
    const name = <string>this.$route.name
    this.home = !!/^index/.test(name)
    this.show = !!/^geration-geration/.test(name)
    this.version = Number(this.$route.params.geration)
  },

  watch: {
    $route(event: EventType): void {
      this.home = /^index/.test(event.name)
      this.show = /^geration-geration/.test(event.name)
      if (!!this.$route.params.geration) {
        this.version = Number(this.$route.params.geration)
      }
    },

    version(value: Number): void {
      if (value >= 0)
        this.$router.push((this as any).localePath(`/${value}/geration`))
    },
  },
})
</script>

<style scoped lang="postcss">
.header {
  @apply w-full flex justify-between h-20 xl:h-24 items-center p-4 xl:p-6;
  @apply bg-header;
}
</style>
