<template>
  <a
    :href="href"
    class="pkt-tabs__link"
    :class="{ active: active }"
    :aria-selected="active"
  >
    {{ title }}
  </a>
</template>

<script>
export default {
  name: "tab",
  props: {
    active: Boolean,
    href: String,
    title: String,
  },
};
</script>
