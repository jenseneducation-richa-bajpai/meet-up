<template>
  <div class="history">
    <Header />
    <h1>Events Already Attended</h1>

    <EventsList v-bind:events="attendedList" />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

import EventsList from "@/components/EventsList.vue";

export default {
  components: {
    Header,
    EventsList,
  },

  created() {
    this.$store.dispatch("getAttendedData");
    this.$store.dispatch("getReview");
    this.$store.state.commentBtn = true;
  },
  computed: {
    attendedList() {
      return this.$store.state.attendedList;
    },
  },
  methods: {
    findId(id) {
      let itemD = this.$store.state.attendedList.find((item) => item.id === id);
      console.log(id);
      return itemD;
    },
  },
};
</script>

<style>
h1 {
  margin: auto 0;
  font-size: 2rem;
  padding: 40px 30px;
}
</style>