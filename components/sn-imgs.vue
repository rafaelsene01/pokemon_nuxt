<template>
  <img
    :id="`img-geration-${geration.id}`"
    class="h-full w-full"
    :src="require(`@images/version/${geration.id}/0.png`)"
    @error="setDefaultImg"
    alt=""
  />
</template>

<script lang="ts">
import Vue from 'vue'

type Geration = {
  id: number
  games: number
}

type EventType = {
  [key: string]: any // Fiz isso porque o que me interessa e somente a chave de baixo.
  target: HTMLImageElement
}

type DataType = {
  url: string
  imgIndex: number
  startInterval: any // Evite uso de any
}

export default Vue.extend({
  name: 'SNImgsComponent',

  props: { geration: { type: Object as () => Geration } },

  data: (): DataType => {
    return {
      url: '@images/version',
      imgIndex: 0,
      startInterval: null,
    }
  },

  methods: {
    setDefaultImg(event: EventType): void {
      event.target.src = require('@images/pokeball.png')
    },
    changeImg(): void {
      const img = <HTMLImageElement | null>(
        document.getElementById(`img-geration-${this.geration.id}`)
      )

      if (img) {
        img.src = require(`@images/version/${this.geration.id}/${this.imgIndex}.png`)
      }
    },
  },

  beforeMount(): void {
    this.startInterval = setInterval(() => {
      this.imgIndex =
        this.imgIndex + 1 < this.geration.games
          ? (this.imgIndex += 1)
          : (this.imgIndex = 0)

      this.changeImg()
    }, Math.floor(Math.random() * (3000 - 2000)) + 2000)
  },

  beforeDestroy(): void {
    clearInterval(this.startInterval)
  },
})
</script>

<style lang="postcss" scoped></style>
