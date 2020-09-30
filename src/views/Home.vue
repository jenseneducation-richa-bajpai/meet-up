<template>
  <div class="home">
    <Header />
    <div class="home-wrap">
      <div class="image">
        <img class="meetup" alt="meetup" src="../assets/meetup2.jpg" />
      </div>
      <div class="message">
        <h1>{{ msg }}</h1>
      </div>
    </div>
    <h2 id="event">Upcoming Events</h2>
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
      msg: "Meet people and let them become chapters in your stories!",
    };
  },
  created() {
    this.$store.dispatch("getData");
    this.$store.state.commentBtn = false;
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
  flex-direction: column;
}
/* div.image {
  width: 100%;
  height: 400px;
  margin: 10px;
  margin-left: 220px;
} */
.meetup {
  width: 90%;
  height: 450px;
}
.message {
  h1 {
    font-size: 2rem;
    padding-top: 50px;
    font-style: italic;
  }

  .join {
    margin-top: 25px;
  }
}
</style>
