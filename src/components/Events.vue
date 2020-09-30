<template>
  <div class="event">
    <router-link v-bind:to="'/description/' + event.id">
      <div class="imgEvent">
        <img v-bind:src="event.image" />
      </div>
      <div class="event-name">{{ event.name }}</div>
      <div class="event-date">{{ event.date }} {{ event.time }}</div>
      <div class="place">{{ event.location }}</div>
    </router-link>
    <div class="review">
      <Review
        v-if="commentBtn"
        v-bind:review="review"
        v-bind:eventId="event.id"
      />
    </div>
  </div>
</template>

<script>
import Review from "@/components/Review";
export default {
  name: "Events",
  components: { Review },
  props: { event: Object },
  
  computed: {
   
    review() {
      var list = this.$store.state.review;
      var forEventList = list.filter(
        (comment) => comment.eventId === this.event.id
      );
      return forEventList;
    },
    commentBtn() {
      return this.$store.state.commentBtn;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";
.event {
  background: $white;
  margin: 30px;
  display: flex;
  flex-direction: column;
  box-shadow: 1px 1px 8px #888888;
  border-radius: 20px;
  width: 400px;
  /* height: 500px; */

  a {
    text-decoration: none;
    .imgEvent {
      height: 240px;
      margin: 10px;
      border-radius: 20px;
    }
    img {
      width: 100%;
      height: 240px;
    }
    .event-date {
      text-align: left;
      border-top: 1px solid gray;
      color: $pink;
      font-size: 1.2rem;
      padding-top: 20px;
      margin: 20px auto 8px 16px;
      font-weight: bold;
    }
    .event-name {
      color: $black;
      margin: 8px auto 0px 16px;
      font-size: 1.4rem;
      text-align: left;
      font-weight: bold;
      padding-top: 50px;
    }
    .place {
      color: $black;
      margin: 8px auto 8px 16px;
      padding-top: 20px;
      font-size: 1.4rem;
      text-align: left;
    }
  }
}
</style>