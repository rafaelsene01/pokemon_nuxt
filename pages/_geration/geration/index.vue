<template>
  <div class="sn-grid">
    <div v-for="item in pokemonList" :key="item.id">
      <nuxt-link
        :to="localePath(`/${geration}/geration/${item.id}/pokemon`)"
        class="pokemon-cards"
      >
        <img
          class="object-contain h-28 xl:h-32 mb-2"
          :src="item.img"
          @error="setAltImg"
          alt=""
        />

        <div class="name">
          {{ item.name }}
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

type PokemonSpeciesType = {
  name: string
  url: string
}

type PokemonType = {
  id: number
  name: string
  img: string
}

type EventType = {
  [key: string]: any // Fiz isso porque o que me interessa e somente a chave de baixo.
  target: HTMLImageElement
}

type AsyncDataType = {
  pokemons: PokemonType[]
}

export default Vue.extend({
  name: 'Geration',

  async asyncData({ params, $axios }): Promise<AsyncDataType> {
    const { pokemon_species } = await $axios.$get(
      `generation/${params.geration}`
    )

    const pokemons: PokemonType[] = pokemon_species.map(
      (pokemon: PokemonSpeciesType): PokemonType => {
        const id = Number(
          pokemon.url.replace(
            /(https:\/\/pokeapi.co\/api\/v2\/pokemon-species\/)|(\/)/g,
            ''
          )
        )

        return {
          id,
          name: pokemon.name,
          img: `https://pokeres.bastionbot.org/images/pokemon/${id}.png`,
        }
      }
    )

    return { pokemons }
  },

  computed: {
    ...mapGetters('search', ['getName']),
    pokemonList(): PokemonType[] {
      // por algum motivo ele n reconheco pokemons retornado pelo asyncData...
      // Embora funcione da maneira que esta abaixo, tive que colocar (this as any)
      // para não mostrar erro no console.
      const list: PokemonType[] =
        (this as any).pokemons.filter((item: PokemonType) => {
          if (!this.getName) {
            return true
          }

          return item.name
            .toLowerCase()
            .match(new RegExp(this.getName.toLowerCase()))
        }) || []
      return list
    },

    geration(): string {
      return this.$route.params.geration
    },
  },

  methods: {
    setAltImg(event: EventType): void {
      event.target.src = require('@images/pokeball.png')
    },
  },
})
</script>

<style lang="postcss" scoped>
.name {
  @apply absolute capitalize w-full h-9 bottom-0 flex justify-center items-center border-t border-blue-pokemon-200;
}
</style>
