import { createStore } from "vuex";

export default createStore({
  state: {
    name: "aman",
    title: "VueX",
  },
  mutations: {
    setTitle(state, payLoad) {
      //state.title = payLoad;               //1 way
      //state.title = payLoad.title;        //2 way
      state.title = payLoad.title; //3 way
    },
  },
});
