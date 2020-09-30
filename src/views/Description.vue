<template>
  <div class="description-view">
    <Header />
    <div class="description">
      <div class="info">
        <div class="disc-event-name">{{ event.name }}</div>
        <div class="disc-event-date">{{ event.date }} {{ event.time }}</div>
        <div class="disc-place">{{ event.location }}</div>
        <router-link class="ico-bag__wrap" to="/attending">
          <button class="attend" @click="addEvent(event)">Attend</button>
        </router-link>
      </div>

      <div class="imageD">
        <img v-bind:src="event.image" />
      </div>

      <div class="detail-disc">
        <div class="details">Details: {{ event.details }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "Description",
  components: {
    Header,
  },

  created() {
    this.$store.dispatch("getData");
  },
  computed: {
    event() {
      let id = this.$route.params.id;
      return this.$store.state.events.find((event) => event.id == id);
    },
    events() {
      return this.$store.state.events;
    },
  },
  methods: {
    addEvent(event) {
      this.$store.dispatch("addEvent", event);
    },
  },
};
</script>


<style lang="scss">
@import "../scss/main.scss";

.description-view {
  height: 100vh;
}
.discription {
  width: 80%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  box-shadow: 1px 1px 8px #888888;
  margin-left: 100px;
  padding-left: 50px;
}
.imageD {
  height: 400px;
}
img {
  width: 500px;
  height: 400px;
  float: left;
  margin-left: 110px;
  margin-top: 25px;
  box-shadow: 1px 1px 8px #888888;
}
.info {
  height: 300px;
  font-size: 1 rem;
  text-align: left;
  padding-top: 50px;
  padding-left: 100px;
  display: flex;
  flex-direction: column;
}
.disc-event-name {
  color: $black;
  margin: 18px auto 8px 16px;
  border-bottom: 1px solid gray;
  font-size: 2rem;
  text-align: left;
  font-weight: bold;
}
.disc-event-date {
  text-align: left;

  color: $dark-gray;
  font-size: 1.2rem;
  padding-top: 10px;
  margin: 5px auto 8px 16px;
}
.disc-place {
  color: $black;
  margin: 8px auto 8px 16px;
  padding-top: 20px;
  font-size: 1.2rem;
  text-align: left;
}
.details {
  color: $black;
  margin: 10px auto 8px 56px;
  width: 600px;
  padding-top: 30px;
  font-size: 1.5rem;
  text-align: left;
  padding-left: 70px;
}
.attend {
  width: 300px;
  float: left;
  margin-left: 16px;
  margin-top: 20px;
}

img {
  float: left;
  width: 400px;
  height: 400px;
}
</style>
