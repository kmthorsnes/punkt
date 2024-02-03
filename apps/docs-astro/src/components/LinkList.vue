<template>
  <section class="pkt-grid pkt-grid--gap-size-24-tablet-up">
    <div
      class="pkt-cell pkt-cell--span12 pkt-cell--span6-tablet-up"
      v-for="(item, index) in links"
      :key="`links-${index}`"
    >
      <a :href="item.href" class="pkt-linkcard pkt-linkcard--blue pkt-link">
        <span class="pkt-icon pkt-link__icon">
          <svg viewBox="0 0 32 32">
            <use :href="item.iconName" />
          </svg>
        </span>
        <div class="pkt-linkcard__content">
          <div class="pkt-linkcard__title pkt-link">
            {{ item.title }}
          </div>
          <div class="pkt-linkcard__text">{{ item.content }}</div>
        </div>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: "LinkList",
  props: {
    links: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
};
</script>

<style lang="scss">
@use "sass:map";
@use "@pkt/scss/abstracts/mixins/breakpoints" as *;
@use "@pkt/scss/abstracts/mixins/typography";

.pkt-grid {
  margin-bottom: 2.5rem;

  @include bp("phablet-up") {
    max-width: 988px;
    margin-bottom: 128px;
  }
}
.pkt-linkcard {
  background-color: white;
  width: 100%;
  height: 100%;
}
</style>
