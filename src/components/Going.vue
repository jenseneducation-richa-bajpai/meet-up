<template>
  <div class="going">
    <div class="going-wrap">
      <h1 class="title">{{ title }}</h1>
    </div>
    <div class="event-item">
      <ul>
        <li v-for="event in attendList" v-bind:key="event.id">
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
export default {
  name: "Going",
  data() {
    return {
      title: "Events Attending",
    };
  },
  props: {
    attendList: Array,
  },
  computed: {},

  methods: {},
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
    width: 200px;
    height: 170px;
    margin-left: 20px;
  }
  ul {
    width: 100%;

    & li {
      list-style: none;
      margin-bottom: 20px;
      box-shadow: 1px 1px 8px #888888;
      height: 200px;
    }
  }
}
.event-image {
  margin-bottom: 30px;
}
.event-item-wrap {
  display: grid;
  grid-template-columns: 2fr 2fr 2fr;
  grid-template-rows: 50px 50px;
  text-align: center;
  padding: 20px 0;
  background: $white;
}
.event-name {
  font-size: 1.7rem;
  font-weight: bold;
}
.event-date {
  font-size: 1.5rem;
}
.place {
  font-size: 1.5rem;
}
.info-event {
  font-size: 1rem;

  padding-top: 30px;
  padding-left: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>