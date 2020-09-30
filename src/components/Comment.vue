<template>
  <div class="commentReview">
    <p>{{ comment.comment }}</p>
  </div>
</template>

<script>
export default {
  props: ["eventId", "comment"],
  computed: {
    review() {
      return this.$store.state.review;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";
.commentReview {
  background: rgb(247, 244, 243);
  border: 1px solid gray;
  margin: 1.2rem;
  text-align: left;
  padding: 1.5rem;
}
</style>