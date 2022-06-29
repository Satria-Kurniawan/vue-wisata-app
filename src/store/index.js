import { createStore } from "vuex"
import wisata from "./modules/wisata"

const store = createStore({
  modules: {
    wisata,
  },
})

export default store
