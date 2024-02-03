<template>
  <header id="dev-header" class="dev-header" aria-label="Topp">
    <div class="dev-header__logo">
      <router-link aria-label="Tilbake til forside" class="dev-header__logo-link" to="/">
        <pkt-icon
          name="oslologo"
          class="dev-header__logo-svg"
          aria-hidden="true"
          path="https://punkt-cdn.oslo.kommune.no/latest/logos/"
        ></pkt-icon>
      </router-link>
    </div>

    <nav class="dev-header__nav">
      <select class="pkt-input" name="dev-header__select" id="dev-header__select" v-on:change="changeRoute($event)">
        <option value="/" selected>Choose component</option>
        <option value="/Alert">Alert</option>
        <option value="/Backlink">BackLink</option>
        <option value="/Breadcrumbs">Breadcrumbs</option>
        <option value="/Button">Button</option>
        <option value="/Checkbox">Checkbox</option>
        <option value="/Footer">Footer</option>
        <option value="/Header">Header</option>
        <option value="/Messagebox">Messagebox</option>
        <option value="/Linkcard">Linkcard</option>
        <option value="/Radiobutton">Radiobutton</option>
        <option value="/SearchInput">SearchInput</option>
        <option value="/Select">Select</option>
        <option value="/Switch">Switch</option>
        <option value="/Tabs">Tabs</option>
        <option value="/Tag">Tag</option>
        <option value="/Textarea">Textarea</option>
        <option value="/Textinput">Textinput</option>
      </select>
    </nav>
  </header>
</template>

<script>
import { PktIcon } from '@/components/icon'
export default {
  name: 'DevHeader',
  components: {
    PktIcon,
  },
  methods: {
    changeRoute(e) {
      this.$router.push(e.target.value)
    },
  },
  mounted() {
    document.getElementById('dev-header__select').value = window.location.pathname
  },
}
</script>

<style lang="scss">
@use 'sass:map';
@use 'pkt/scss/abstracts/variables';
@use 'pkt/scss/abstracts/mixins/breakpoints' as *;

$-header-height: 50px;
$-header-height-phablet-up: 60px;
$-logo-width: calc($-header-height * 60 / 31);
$-logo-width-phablet-up: calc($-header-height-phablet-up * 60 / 31);

.dev-header {
  background-color: var(--pkt-color-background-default);
  border-bottom: 1px solid var(--pkt-color-border-subtle);
  display: grid;
  gap: 0 0;
  grid-area: header;
  grid-template-areas: 'dev-header-logo . dev-header-nav';
  grid-template-columns: minmax($-logo-width, $-logo-width-phablet-up) 1fr auto auto;
  padding: map.get(variables.$spacing, 'size-20') map.get(variables.$spacing, 'size-15');
  align-items: center;

  &__logo {
    grid-area: dev-header-logo;

    &-link {
      display: block;
    }

    &-svg {
      height: $-header-height;
      width: calc($-header-height * 60 / 31);

      @include bp('phablet-up') {
        height: $-header-height-phablet-up;
        width: calc($-header-height-phablet-up * 60 / 31);
      }
    }
  }

  &__nav {
    grid-area: dev-header-nav;
  }
}
</style>
