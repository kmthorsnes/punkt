<template>
  <div id="svg-sprite" class="pkt-hide" v-html="demoIconsSprite"></div>
</template>

<script>
import demoIconsSprite from "../pages/json/allIcons.svg?raw";
export default {
  data() {
    return { demoIconsSprite };
  },
};
</script>
