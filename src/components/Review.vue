<template>
  <div class="review">
    <form @submit.prevent="createReview" class="create-review">
      <h2>Review</h2>

      <textarea
        v-model="content"
        class="input"
        placeholder="Your thoughts on the event.."
        rows="8"
        cols="40"
      ></textarea>
      <button type="submit" class="addComment">Add Comments</button>
    </form>
    <div v-if="comments">
      <h4>Comments:</h4>
      <Comment
        v-for="comment in review"
        v-bind:key="comment.id"
        v-bind:comment="comment"
      />
    </div>
  </div>
</template>

<script>
import Comment from "@/components/Comment";
export default {
  components: { Comment },
  props: ["review", "eventId"],
  data() {
    return {
      content: "",
    };
  },

  methods: {
    async createReview() {
      if (this.content !== "") {
        var comment = {
          id: Date.now(),
          comment: this.content,
          eventId: this.eventId,
        };
        console.log(comment);
        this.$store.dispatch("addReview", comment);
        console.log(comment);
        this.content = "";
      }
    },
  },
  created() {},
  computed: {
    comments() {
      var comments = this.$store.state.review;

      var forEventList = comments.filter(
        (comment) => comment.eventId === this.eventId
      );
      if (forEventList.length !== 0) {
        return true;
      } else {
        return false;
      }
    },
    commentListLength() {
      var comments = this.$store.state.review;
      return comments.length;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

.input {
  width: 90%;
}

.addComment {
  margin: 1rem;
}
</style>