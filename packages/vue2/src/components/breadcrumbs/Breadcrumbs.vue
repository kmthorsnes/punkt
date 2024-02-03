<template>
  <nav aria-label="brødsmulemeny" class="pkt-breadcrumbs">
    <ol class="pkt-breadcrumbs__list pkt-breadcrumbs--desktop">
      <li v-for="(item, index) in displayedBreadcrumbs" :key="`breadcrumb-${index}`" class="pkt-breadcrumbs__item">
        <!-- Last item(Current) is not a link -->
        <span v-if="index === displayedBreadcrumbs.length - 1" class="pkt-breadcrumbs__label" aria-current="true">
          <span class="pkt-breadcrumbs__text">{{ item.text }}</span>
        </span>

        <!-- Regular breadcrumb link -->
        <template v-else>
          <component
            :is="linkElement"
            :to="navigationType === 'router' ? item.href : null"
            :href="navigationType === 'anchor' ? item.href : null"
            class="pkt-link pkt-link--icon-right pkt-breadcrumbs__label pkt-breadcrumbs__link"
          >
            <pkt-icon class="pkt-icon pkt-breadcrumbs__icon pkt-link__icon" name="chevron-thin-right"></pkt-icon>

            <span class="pkt-breadcrumbs__text">{{ item.text }}</span>
          </component>
        </template>
      </li>
    </ol>

    <!-- Mobile backlink - show second last item in array -->
    <template>
      <component
        :is="linkElement"
        :to="navigationType === 'router' ? backLink.href : null"
        :href="navigationType === 'anchor' ? backLink.href : null"
        class="pkt-link pkt-link--icon-left pkt-breadcrumbs--mobile"
      >
        <pkt-icon class="pkt-back-link__icon pkt-icon pkt-link__icon" name="chevron-thin-left"></pkt-icon>

        <span class="pkt-breadcrumbs__text">{{ backLink.text }}</span>
      </component>
    </template>
  </nav>
</template>

<script>
import PktIcon from '../icon/Icon.vue'

export default {
  name: 'PktBreadcrumbs',
  components: {
    PktIcon,
  },
  props: {
    breadcrumbs: {
      type: Array,
      required: true,
      default: () => [],
    },
    navigationType: {
      type: String,
      default: 'anchor',
      validator: (value) => ['router', 'anchor'].includes(value),
    },
  },
  computed: {
    linkElement() {
      if (this.navigationType === 'router') {
        return 'router-link'
      } else {
        return 'a'
      }
    },
    backLink() {
      return this.displayedBreadcrumbs[this.displayedBreadcrumbs.length - 2]
    },
    // Max 4 breadcrumbs
    displayedBreadcrumbs() {
      return this.breadcrumbs.slice(0, 4)
    },
  },
}
</script>
