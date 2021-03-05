<template>
  <div class="relative inline-block text-left">
    <div>
      <button
        type="button"
        @click="isOn = !isOn"
        class="inline-flex justify-center items-center rounded-md pl-1 pr-2 py-1 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-gray-200"
        id="options-menu"
      >
        <img
          id="img-locale"
          :src="require(`@images/locales/${locale}.png`)"
          width="24"
          height="24"
          alt=""
        />
        <svg
          class="ml-1 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>

    <transition
      enter-active-class="transition ease-out duration-100 transform"
      enter-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75 transform"
      leave-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-show="isOn"
        class="origin-top-right absolute right-0 mt-2 rounded-md bg-white border-2 border-gray-300 z-50"
      >
        <div class="py-1">
          <nuxt-link
            v-for="item in $i18n.locales"
            :key="item.code"
            :to="switchLocalePath(item.code)"
            class="block px-2 py-1 hover:bg-blue-pokemon-200 hover:text-gray-900"
          >
            <img
              :src="require(`@images/locales/${item.code}.png`)"
              width="40"
              height="40"
              class=""
              alt=""
            />
          </nuxt-link>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

type DataType = {
  locale: string
  isOn: boolean
}

export default Vue.extend({
  name: 'LocaleComponent',

  data: (): DataType => {
    return {
      locale: '',
      isOn: false,
    }
  },

  created(): void {
    this.locale = (this as any).$i18n.locale
  },

  computed: {
    i18nLocale(): string {
      return (this as any).$i18n.locale
    },
  },

  watch: {
    i18nLocale(): void {
      const img = <HTMLImageElement | null>document.getElementById('img-locale')

      this.locale = (this as any).$i18n.locale
      this.isOn = false
      if (img) {
        img.src = require(`@images/locales/${this.locale}.png`)
      }
    },
  },
})
</script>

<style scoped lang="postcss"></style>
