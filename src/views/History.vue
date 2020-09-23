<template>
  <div class="history">
    <Header />
    <Attended v-bind:attendedList="attendedList" />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Attended from "@/components/Attended";
export default {
  components: {
    Header,
    Attended,
  },
  created() {
    this.$store.dispatch("getAttendedData");
  },
  computed: {
    /* event() {
      let id = this.$route.params.id;
      return this.$store.state.attendList.find((event) => event.id == id); 
    },*/
    attendedList() {
      return this.$store.state.attendedList;
    },
  },
};
</script>

<style>
</style>