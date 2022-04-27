import { createStore } from "vuex";

const adminData = {
  namespaced: true,
  state: {
    name: "admin",
  },
  mutations: {
    changeName(state, payload) {
      state.name = payload.name;
    },
  },
};

export default createStore({
  modules: {
    adminData,
  },
  state: {
    name: "aman",
    title: "VueX",
    secretKey: 1313,
  },
  mutations: {
    setTitle(state, payLoad) {
      //state.title = payLoad;               //1 way
      //state.title = payLoad.title;        //2 way
      state.title = payLoad.title; //3 way
    },
  },
  actions: {
    newTitle(contaxt, payload) {
      //   contaxt.commit("setTitle", payload);

      //   setTimeout(() => {
      //     contaxt.commit("setTitle", payload);
      //   }, 2000);

      return new Promise((resolve) => {
        setTimeout(() => {
          contaxt.commit("setTitle", payload);
          resolve("okey");
        }, 2000);
      });
    },

    newTitle2(contaxt, payload) {
      contaxt
        .dispatch({
          type: "newTitle",
          title: payload.title,
        })
        .then((res) => console.log(res));
    },
  },
  getters: {
    WaheGuruAdd(state) {
      return state.secretKey + "waheGuru";
    },
    newWaheGuruAdd(state, getters) {
      return state.secretKey + " " + getters.WaheGuruAdd;
    },
    abcWaheGuru: (state) => (data) => data + state.title,
  },
});
