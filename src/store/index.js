import Vue from "vue";
import Vuex from "vuex";
import { fetchData } from "@/data/data.js";
import { fetchAttendedData } from "@/data/data.js";

/* import meetup from "../assets/meetup.jpg"; */

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    events: [],
    attendList: [],
    attendedList: [],
  },
  mutations: {
    showData(state, data) {
      state.events = data;
    },
    showAttendedData(state, data) {
      state.attendedList = data;
    },
    addToAttend(state, event) {
      if (!state.attendList.find((i) => i.id === event.id)) {
        state.attendList.push(event);
        localStorage.setItem("attendList", JSON.stringify(state.attendList));
      }
    },
  },
  actions: {
    async getData({ commit }) {
      const data = await fetchData();
      commit("showData", data);
    },
    addEvent(context, event) {
      context.commit("addToAttend", event);
    },
    async getAttendedData({ commit }) {
      const data = await fetchAttendedData();
      commit("showAttendedData", data);
    },
  },
  modules: {},
});
