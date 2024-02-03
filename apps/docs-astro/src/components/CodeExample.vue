<template>
  <div
    class="pkt-code-example p-size-32 my-size-20"
    :class="{ 'px-size-20': !noHorisontalPadding }"
    :data-mode="mode"
    :id="compId"
  >
    <div v-if="toggleMode" class="pkt-code-example__toolbar">
      <div class="pkt-code-example__toggle p-size-5">
        <input
          v-model="checked"
          type="checkbox"
          class="pkt-code-example__checkbox"
          :class="{ checked: checked }"
          :id="formElm"
        />
        <label class="pkt-code-example__label" :for="formElm">Dark mode</label>
      </div>
    </div>
    <div
      class="pkt-code-example__container"
      :class="{ centered: centerContent }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
let uid = 0;

export default {
  name: "code-example",
  data() {
    uid += 1;
    return {
      compId: `codeExample${uid}`,
      formElm: `codeExampleToolbarCheck${uid}`,
      checked: false,
    };
  },
  props: {
    toggleMode: {
      type: Boolean,
      default: false,
    },
    noHorisontalPadding: {
      type: Boolean,
      default: false,
    },
    centerContent: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    mode() {
      return this.checked ? "dark" : "light";
    },
  },
};
</script>

<style lang="scss">
@use "sass:map";
@use "@pkt/scss/abstracts/variables";
@use "@pkt/scss/abstracts/mixins/breakpoints" as *;

.pkt-code-example {
  background-color: #fff;
  border: 1px solid var(--pkt-color-grays-gray-100);
  position: relative;

  .pkt-link p,
  .pkt-input-check__input-label p {
    margin: 0;
  }

  &__container {
    margin: auto;
    width: 100%;
    &.centered {
      @include bp("laptop-up") {
        width: 50%;
      }
    }

    .pkt-btn:not(.pkt-inputwrapper__helptext-expandable):not(
        .pkt-header__user-btn
      ):not(.pkt-searchinput__button) {
      margin: 0.5rem;
    }
  }

  &[data-mode="dark"] {
    background-color: var(--pkt-color-brand-dark-blue-1000);
    color: #fff;

    .pkt-code-example__toggle {
      color: var(--pkt-color-brand-dark-blue-1000);
    }
  }

  &__toolbar {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    justify-content: flex-end;
  }

  &__toggle {
    background-color: var(--pkt-color-brand-neutrals-white);
    border-bottom: 1px solid var(--pkt-color-grays-gray-100);
    border-left: 1px solid var(--pkt-color-grays-gray-100);
  }

  &__checkbox {
    appearance: none;
    background-color: var(--pkt-color-brand-neutrals-white);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    border: 2px solid var(--pkt-color-brand-dark-blue-1000);
    display: inline-block;
    margin: 0.125rem 0.25rem 0 0;
    width: 1.25rem;
    height: 1.25rem;
    transition: all 0.3s ease-out;
    vertical-align: top;

    &[type="checkbox"] {
      border-radius: 0;
    }

    &:checked {
      &[type="checkbox"] {
        --svg: url(https://punkt-cdn.oslo.kommune.no/latest/components/checkbox.svg);
        background-color: var(--pkt-color-brand-warm-blue-1000);
        border-color: var(--pkt-color-brand-warm-blue-1000);
        -webkit-mask-image: var(--svg);
        mask-image: var(--svg);
      }
    }
  }
}
</style>
