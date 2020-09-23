<template>
  <div class="attending">
    <Header />
    <Going v-bind:attendList="attendList" />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Going from "@/components/Going";
export default {
  components: { Header, Going },
  created() {
    this.$store.dispatch("getData");
  }, 
  computed: {
    /* event() {
      let id = this.$route.params.id;
      return this.$store.state.attendList.find((event) => event.id == id); 
    },*/
    attendList() {
      return this.$store.state.attendList;
    },
  },
  methods: {
    addToAttend(event) {
      this.$store.commit("addToAttend", event);
    },
  },
};
</script>



<style lang="scss" scoped>
@import "../scss/main.scss";
</style>