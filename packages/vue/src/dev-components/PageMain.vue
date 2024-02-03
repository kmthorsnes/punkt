<template>
  <main class="page-main" :data-mode="mode">
    <div v-if="showToolbar" class="page-main__toolbar">
      <div class="bg-color-blue-dark p-size-5">
        <input @change="onChange" type="checkbox" class="page-main__checkbox" id="page-main-mode-toggle" />
        <label
          @keyup.space="select"
          @keyup.enter="select"
          class="page-main__label txt-color-white"
          for="page-main-mode-toggle"
          >Dark mode</label
        >
      </div>
    </div>
    <slot></slot>
  </main>
</template>

<script>
export default {
  data() {
    return {
      mode: 'light',
    }
  },
  props: {
    showToolbar: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onChange(e) {
      this.doEmit(e.target.checked, e.target)
    },
    select() {
      this.doEmit(!this.value, e.target)
    },
    doEmit(value) {
      this.mode = value ? 'dark' : 'light'
    },
  },
  mounted() {
    document.querySelectorAll('.page-main__checkbox').forEach((checkbox) => {
      checkbox.checked = false
    })
  },
}
</script>

<style lang="scss">
@use 'sass:map';
@use 'pkt/scss/abstracts/variables';
@use 'pkt/scss/abstracts/functions';
@use 'pkt/scss/abstracts/mixins/breakpoints' as *;

$-checkbox-img: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path fill='none' stroke='#fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/></svg>") !default;

.page-main {
  position: relative;
  grid-area: main;
  padding-bottom: map.get(variables.$spacing, 'size-15');
  padding-top: map.get(variables.$spacing, 'size-15');

  @include bp('tablet-up') {
    padding-bottom: map.get(variables.$spacing, 'size-30');
    padding-top: map.get(variables.$spacing, 'size-30');
  }

  &__toolbar {
    display: flex;
    position: absolute;
    right: 2rem;
    top: 2.25rem;
    justify-content: flex-end;
  }

  &__checkbox {
    appearance: none;
    background-color: var(--pkt-color-input-background-normal);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    border: 2px solid var(--pkt-color-input-border-normal);
    display: inline-block;
    margin: 0.125rem 0.25rem 0 0;
    width: 1.25rem;
    height: 1.25rem;
    transition: all 0.3s ease-out;
    vertical-align: top;

    &[type='checkbox'] {
      border-radius: 0;
    }

    &:checked {
      &[type='checkbox'] {
        background-color: var(--pkt-color-input-border-normal);
        background-image: functions.escape-svg($-checkbox-img);
        border-color: var(--pkt-color-input-border-normal);
      }
    }
  }
}
</style>
