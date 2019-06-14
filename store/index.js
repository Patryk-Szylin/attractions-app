import Vuex from "vuex";
import ResultStore from "./modules/resultStore";

const createStore = () => {
  return new Vuex.Store({
    modules: {
      result: ResultStore
    }
  });
};

export default createStore;
