import axios from "axios"

const state = {
  allWisata: [],
  isLoading: false,
}
const getters = {
  wisataList: (state) => state.allWisata,
  loading: (state) => state.isLoading,
}
const actions = {
  async fetchAllWisata({ commit }) {
    commit("setLoading", true)

    const response = await axios
      .get("https://new-bali-island.000webhostapp.com/api/posts")
      .finally(() => commit("setLoading", false))

    commit("setAllWisata", response.data)
  },
}
const mutations = {
  setAllWisata: (state, resData) => (state.allWisata = resData),
  setLoading: (state, newLoadingStatus) => (state.isLoading = newLoadingStatus),
}

export default {
  state,
  getters,
  actions,
  mutations,
}
