<template>
  <div class="header">
    <router-link to="/">
      <span class="logo" v-bind:class="{
        'logo-text': $route.path == '/',
      }">MeetUp</span>
    </router-link>
    <router-link to="/Attending" class="hist">Attending</router-link>
    <router-link to="/History" class="hist">History</router-link>
  </div>
</template>

<script>
export default {
  name: "Header",

  /* props: {
    msg: String,
  }, */
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../scss/main.scss";

div.header {
  background: red;
  height: 63px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 24px;
  position: sticky;
  top: 0;
  justify-content: space-between;

  .logo {
    color: white;
    font-size: 40px;
    font-weight: bold;
    font-family: "Caveat Brush", cursive;
    /* 	font-family: 'Montez', cursive; */
    z-index: 999;
  }

  .logo-text {
    margin-left: 8px;
  }
  a {
    text-decoration: none;
  }
  .hist {
    font-size: 1.2rem;
    font-weight: bold;
  }
}
</style>
