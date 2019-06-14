const state = {};

const mutations = {};

const actions = {
  async nuxtServerInit({ commit }, { $axios }) {
    console.log("request");
    const res = await this.$axios.get(
      "https://maps.googleapis.com/maps/api/place/textsearch/json?query=diving+in+Cyprus&key=AIzaSyDCGhBztBDyeZq9frQ5dg9cZ1eADinJz54"
    );
    console.log("res", res);
  }
};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters
};
