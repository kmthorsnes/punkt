<template>
  <div class="contrast-checker__tag">
    <span
      :class="[
        'pkt-tag',
        {
          'pkt-tag--red': !wcagResults.pass,
          'pkt-tag--green': wcagResults.pass,
        },
        'pkt-tag--medium',
      ]"
    >
      <svg class="pkt-tag__icon" viewBox="0 0 32 32">
        <use :href="!wcagResults.pass ? '#close' : '#check-big'"></use>
      </svg>
      {{ wcagResults.pass ? "Pass" : "Fail" }}
    </span>
    <p style="margin: 0">{{ title }}</p>
  </div>
</template>

<script>
export default {
  name: "ContrastResults",
  props: {
    wcagResults: {
      type: Object,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
