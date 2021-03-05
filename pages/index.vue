<template>
  <div class="sn-grid">
    <div v-for="item in generations" :key="item.id">
      <nuxt-link :to="localePath(`/${item.id}/geration`)" class="game-card">
        <sn-imgs :geration="item" />
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import snImgs from '~/components/sn-imgs.vue'

type Geration = {
  id: number
  games: number
}

type DataType = {
  generations: Geration[]
}

export default Vue.extend({
  components: { snImgs },
  name: 'Home',

  data: (): DataType => {
    return {
      generations: [
        {
          id: 1,
          games: 6,
        },
        {
          id: 2,
          games: 5,
        },
        {
          id: 3,
          games: 5,
        },
        {
          id: 4,
          games: 3,
        },
        {
          id: 5,
          games: 4,
        },
        {
          id: 6,
          games: 2,
        },
        {
          id: 7,
          games: 4,
        },
        {
          id: 8,
          games: 2,
        },
      ],
    }
  },
})
</script>
