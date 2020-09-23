<template>
  <div class="home">
    <Header />
    <div class="home-wrap">
      <div class="message">
        <h1>{{ msg }}</h1>
        <button class="join">JOIN</button>
      </div>
      <div class="image">
        <img class="meetup" alt="meetup" src="../assets/meetup2.jpg" />
      </div>
    </div>
    <EventsList v-bind:events="events" />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import EventsList from "@/components/EventsList.vue";
export default {
  name: "Home",
  components: {
    Header,
    EventsList,
  },
  data() {
    return {
      msg: "Meet people and let them become chapters in your stories",
    };
  },
  created() {
    this.$store.dispatch("getData");
  },
  computed: {
    events() {
      return this.$store.state.events;
    },
  },
};
</script>
<style lang="scss">
@import "../scss/main.scss";

.home-wrap {
  display: flex;
  flex-direction: row;
  margin: 20px;
}
div.image {
  width: 90%;
  height: 400px;
  margin: 10px;
  margin-bottom: 0px;
}
.meetup {
  width: auto;
  height: 400px;
}
.message {
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  justify-content: center;
  padding-left: 50px;
  h1 {
    font-size: 3rem;
    padding-top: 50px;
  }

  .join {
    margin-top: 25px;
  }
}
</style>
