import Vue from "vue";
import Vuex from "vuex";
import { fetchData } from "@/data/data.js";
import { fetchAttendedData } from "@/data/data.js";
import { fetchReview } from "@/data/data.js";
import { fetchAttendList } from "@/data/data.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    events: [],
    attendList: [],
    attendedList: [],
    review: [],
    commentBtn: false,
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
    showAttend(state, data) {
      state.attendList = data;
    },

    showReview(state, data) {
      state.review = data;
    },
    updateReview(state, comment) {
      state.review.push(comment);
      console.log(comment);
      localStorage.setItem("review_list", JSON.stringify(state.review));
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
    async getAttend({ commit }) {
      const data = await fetchAttendList();
      if (data) {
        commit("showAttend", data);
      }
    },
    async getAttendedData({ commit }) {
      const data = await fetchAttendedData();
      commit("showAttendedData", data);
    },
    async getReview({ commit }) {
      const data = await fetchReview();
      if (data) {
        commit("showReview", data);
      }
    },
    addReview(context, comment) {
      context.commit("updateReview", comment);
      console.log(comment);
    },
  },

  modules: {},
});
