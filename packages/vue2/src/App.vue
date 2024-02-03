<template>
  <div id="app" class="page-container">
    <dev-header></dev-header>
    <router-view></router-view>
  </div>
</template>

<script>
import { PktHeader } from "@/components";
import DevHeader from "@/dev-components/DevHeader.vue";

export default {
  name: "Dev",
  components: {
    PktHeader,
    DevHeader,
  },
  data: () => ({
    loggedIn: false,
  }),
  methods: {
    logIn() {
      this.loggedIn = true;
      console.log("Logging in");
    },
    logOut() {
      this.loggedIn = false;
      console.log("Logging out");
    },
  },
};
</script>

<style lang="scss">
.page-container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  grid-column-gap: 0;
  grid-row-gap: 0;
  grid-template-areas:
    "header"
    "main";
}
</style>
