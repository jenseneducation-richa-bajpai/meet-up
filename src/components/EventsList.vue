<template>
  <div class="event-list">
    <Events v-bind:event="event" v-for="event in events" v-bind:key="event.id" />
  </div>
</template>

<script>
import Events from "@/components/Events";
export default {
  name: "EventsList",
  components: { Events },
  props: {
    events: Array,
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";
.event-list {
  width: 92%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 75px;
  padding-top: 50px;
}
</style>