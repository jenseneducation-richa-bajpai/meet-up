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
  </div>
</template>

<script>
export default {
  name: "Events",
  components: {},
  props: { event: Object },
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
  width: 300px;
  height: 400px; 

  a {
    text-decoration: none;
    .imgEvent {
      height: 200px;
    }
    img {
      /*   width: 240px; */
      width: 100%;
      height: 200px;
    }
    .event-date {
      text-align: left;
      border-top: 1px solid gray;
      color: $pink;
      font-size: 1.2rem;
      padding-top: 20px;
      /*padding-bottom: 12px;
      padding-right: 16px; */
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
      font-size: 1.2rem;
      text-align: left;
    }
  }
}
</style>