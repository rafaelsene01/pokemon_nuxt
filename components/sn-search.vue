<template>
  <div class="flex items-center justify-end relative">
    <input
      :placeholder="$t('search')"
      class="search w-36 border focus:border-green-600"
      v-model="search.input"
    />
    <sn-icon
      size="24"
      class="absolute mr-2"
      v-if="search.status === 'WRITE'"
      name="message-load"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations, mapState } from 'vuex'

type SearchType = {
  input: string
  status: string
  startTimeout: any // Evite uso de any
}

type DataType = {
  search: SearchType
}

export default Vue.extend({
  name: 'SearchComponent',

  data: (): DataType => {
    return {
      search: {
        input: '',
        status: '',
        startTimeout: null,
      },
    }
  },

  beforeMount(): void {
    this.search.input = this.name
  },

  computed: {
    ...mapState('search', ['name']),
  },

  methods: {
    ...mapMutations('search', ['changeName']),
  },

  watch: {
    'search.input'() {
      this.search.status = 'WRITE'
      clearTimeout(this.search.startTimeout)
      this.search.startTimeout = setTimeout(() => {
        this.search.status = 'LOADING'
        setTimeout(() => {
          this.changeName(this.search.input)
          this.search.status = ''
        }, 100)
      }, 500)
    },
  },
})
</script>

<style lang="postcss" scoped>
.search {
  padding: 5px 34px 5px 10px;
  -moz-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.16) !important;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.16) !important;
  -webkit-box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.16) !important;
  border-radius: 4px;
  outline: none;
}

.search--icon {
  position: absolute;
  margin-right: 6px;
}
</style>
