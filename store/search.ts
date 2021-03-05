type StateType = {
  name: String
}

export const state = (): StateType => ({
  name: '',
})

export const getters = {
  getName: (state: StateType): String => {
    return state.name
  },
}

export const mutations = {
  changeName(state: StateType, text: String): void {
    state.name = text
  },
}
