<template>
  <div class="going">
    <div class="going-wrap">
      <h1 class="title">{{ title }}</h1>
    </div>
    <div class="event-item">
      <ul>
        <li v-for="event in attendedList" v-bind:key="event.id">
          <div class="event-item-wrap">
            <div class="event-image">
              <img v-bind:src="event.image" />
            </div>
            <div class="info-event">
              <div class="event-name">{{ event.name }}</div>
              <div class="event-date">{{ event.date }} {{ event.time }}</div>
              <div class="place">{{ event.location }}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
/* import Review from "@/components/Review" ;*/

export default {
  name: "Attended",
  /*  components: { Review }, */
  data() {
    return {
      /* 
      id: null */ content: "",

      title: "Events Attended",
    };
  },

  props: ["attendedList", "review", "eventId"],

  computed: {},
  methods: {
    createReview() {
      this.$store.commit("setEventReview", {
        reviewContent: this.content,
        eventid: event.id,
        date: new Date(),
      });

      this.content = {};
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

.going {
  margin: 20px;
  display: flex;
  flex-direction: column;
}
.going-wrap {
  margin: 20px;
}
.event-item {
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  img {
    width: 100px;
    height: 100px;
    margin-left: 20px;
  }
  ul {
    width: 100%;

    & li {
      list-style: none;
      margin-bottom: 20px;
      box-shadow: 1px 1px 8px #888888;
    }
  }
}
.event-item-wrap {
  display: grid;
  grid-template-columns: 2fr 2fr 4fr;
  grid-template-rows: 50px 50px;
  text-align: center;
  padding: 20px 0;
  background: $white;
}
.add-review {
  min-width: 100px;
}
</style>