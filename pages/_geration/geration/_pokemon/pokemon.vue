<template>
  <div class="overflow-y-auto py-5">
    <div class="w-full flex flex-col items-center">
      <div class="pokemon-card-top">
        <img
          class="object-contain h-44 xl:h-48 mb-2"
          :src="pokemon.img"
          @error="setAltImg"
          alt=""
        />

        <div
          class="absolute capitalize w-full h-8 bottom-0 flex justify-center items-center border-t border-blue-pokemon-200"
        >
          {{ pokemon.name }}
        </div>
      </div>
      <div class="pokemon-card-bottom">
        <dl>
          <dt>Jogos</dt>
          <dd
            class="capitalize"
            :class="{ 'bg-gray-100': index % 2 === 0 }"
            v-for="game in games"
            :key="game"
          >
            Pokémon {{ game }}
          </dd>
          <template v-if="locales.length > 0">
            <dt>Localização</dt>
            <dd
              class="capitalize"
              :class="{ 'bg-gray-100': index % 2 === 0 }"
              v-for="locale in locales"
              :key="locale"
            >
              {{ locale }}
            </dd>
          </template>
        </dl>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

type PokemonType = {
  id: number
  name: string
  img: string
}

type GameType = {
  name: string
}

type LocationAreaType = {
  name: string
}

type LocalesType = {
  location_area: LocationAreaType
}

type EventType = {
  [key: string]: any // Fiz isso porque o que me interessa e somente a chave de baixo.
  target: HTMLImageElement
}

type AsyncDataType = {
  pokemon: PokemonType
  locales: string[]
  games: string[]
}

export default Vue.extend({
  name: 'Pokemon',

  async asyncData({ params, $axios }): Promise<AsyncDataType> {
    let pokemon = await $axios.$get(`pokemon/${params.pokemon}`)

    pokemon = <PokemonType>{
      id: pokemon.id,
      name: pokemon.name,
      img: `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`,
    }

    const { version_groups } = await $axios.$get(
      `generation/${params.geration}`
    )

    const games = <string[]>(
      version_groups.map((item: GameType): string =>
        item.name.replace('-', ' & ')
      )
    )

    let locales = await $axios.$get(`pokemon/${params.pokemon}/encounters`)
    locales = <string[]>(
      locales.map((item: LocalesType): string =>
        item.location_area.name.replace(/[-]/g, ' ')
      )
    )

    return { pokemon, locales, games }
  },

  methods: {
    setAltImg(event: EventType): void {
      event.target.src = require('@images/pokeball.png')
    },
  },
})
</script>

<style lang="postcss" scoped>
dl {
  @apply mb-2;
}

dt {
  @apply bg-gray-300 px-4;
}

dd {
  @apply px-8 py-1;
}
</style>
