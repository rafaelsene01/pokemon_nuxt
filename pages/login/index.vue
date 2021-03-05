<template>
  <form
    @submit.prevent="login"
    class="w-96 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col"
  >
    <div class="mb-4">
      <label class="block text-sm font-bold mb-2">
        {{ $t('emailAddress') }}
      </label>
      <input type="" placeholder="pokemon@pokemon.com" />
    </div>
    <div class="mb-6">
      <label class="block font-bold text-sm mb-2">
        {{ $t('password') }}
      </label>
      <input type="" placeholder="******************" />
      <p class="mt-1 text-xs italic">{{ $t('enterPassword') }}</p>
    </div>
    <div class="flex items-center justify-between">
      <button
        :class="[
          { 'bg-gray-400': loading },
          { 'bg-blue-pokemon-100': !loading },
        ]"
        class="flex justify-center hover:bg-blue-dark text-white font-bold py-2 px-4 rounded w-20 focus:outline-none"
        type="submit"
        :disabled="loading"
      >
        <template v-if="loading">
          <sn-icon size="24" color="#fff" name="message-load" />
        </template>
        <template v-else>
          {{ $t('login') }}
        </template>
      </button>
      <a
        class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
      >
        {{ $t('forgotPassword') }}
      </a>
    </div>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import { wait } from '@/plugins/utils'
import { mapMutations } from 'vuex'

type DataType = {
  loading: boolean
}

export default Vue.extend({
  name: 'Authentication',

  layout: 'auth',

  data: (): DataType => {
    return {
      loading: false,
    }
  },

  methods: {
    ...mapMutations('auth', ['changeToken']),
    async login() {
      this.loading = true
      // Aqui seria a chamada em sua API
      await wait(2000)
      this.changeToken('token')
      this.loading = false
    },
  },
})
</script>

<style lang="postcss" scoped>
input {
  @apply shadow border-2 rounded w-full py-2 px-3;
  @apply focus:outline-none focus:border-blue-pokemon-100;
}
</style>
