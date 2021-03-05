type StateType = {
  token: String
}

export const state = (): StateType => ({
  token: '',
})

export const getters = {
  getToken: (state: StateType): String => {
    return state.token
  },
}

export const mutations = {
  changeToken(state: StateType, text: String): void {
    state.token = text
  },
}
