<template>
  <nav id="page-nav" class="page-nav" aria-label="Hoved">
    <ul
      class="pkt-linklist pkt-show-laptop-up"
      v-for="(cat, i) in getCategories(filteredArticles)"
      :key="cat + i"
    >
      <li class="page-nav__item">
        <div class="page-nav__category">{{ beautify(cat) }}</div>
        <ul class="pkt-linklist">
          <li
            class="page-nav__item mb-size-10"
            v-for="links in filteredLinks(cat)"
            :key="links.id"
          >
            <a
              class="page-nav__link pkt-truncate-text"
              :class="{ active: isActive(links.url) }"
              :href="links.url"
              >{{ links.frontmatter.title }}
              <svg
                v-if="isActive(links.url)"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <use href="#chevron-right"></use>
              </svg>
            </a>
          </li>
        </ul>
      </li>
    </ul>

    <ul
      class="pkt-linklist pkt-hide-laptop-up"
      v-for="(cat, i) in getCategories(articles)"
      :key="cat + i"
    >
      <li class="page-nav__item">
        <div class="page-nav__category">
          {{ beautify(cat) }}
        </div>
        <ul class="pkt-linklist">
          <li
            class="page-nav__item mb-size-10"
            v-for="links in filteredLinks(cat)"
            :key="links.id"
          >
            <a
              class="page-nav__link"
              :class="{ active: isActive(links.url) }"
              :href="links.url"
              >{{ links.frontmatter.title }}
              <svg
                v-if="isActive(links.url)"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <use href="#chevron-right"></use>
              </svg>
            </a>
          </li>
        </ul>
      </li>
    </ul>

    <div class="page-nav__item pkt-hide-tablet-up">
      <div>
        <a
          aria-label="Punkt på Slack"
          class="pkt-header-docs__social-link"
          target="_blank"
          href="https://oslokommune.slack.com/archives/C01EWV9U07R"
        >
          <svg viewBox="0 0 32 32" aria-hidden="true">
            <use href="#slack"></use>
          </svg>
          <span class="pkt-sr-only">Punkt på Slack</span>
        </a>
        <a
          aria-label="Punkt på GitHub"
          class="pkt-header-docs__social-link"
          target="_blank"
          href="https://github.com/oslokommune/punkt/"
        >
          <svg viewBox="0 0 32 32" aria-hidden="true">
            <use href="#github"></use>
          </svg>
          <span class="pkt-sr-only">Punkt på GitHub</span>
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
//import GitHubLogo from '@pkt-assets/icons/github.svg?inline';
const { BASE_URL } = import.meta.env;

const baseUrlLevels = BASE_URL.split("/").length - 2;

const props = defineProps<{
  articles: Array<any>;
  page: string;
}>();

const category = props.page.split("/")[baseUrlLevels + 1];

const sortedArticles = props.articles.sort(function (a, b) {
  let priorityA = a.frontmatter.priority || Infinity;
  let priorityB = b.frontmatter.priority || Infinity;
  if (priorityA !== Infinity || priorityB !== Infinity) {
    return priorityA - priorityB;
  }
  return a.frontmatter.title.localeCompare(b.frontmatter.title);
});

const filteredArticles = props.articles.filter((art) =>
  art.url.includes(category)
);

function filteredLinks(cat) {
  return props.articles.filter((link) => link.frontmatter.categoryName === cat);
}

function isActive(paths) {
  const normalizedPath = paths.endsWith("/") ? paths : paths + "/";
  const currentPage = props.page.endsWith("/") ? props.page : props.page + "/";
  return currentPage.startsWith(normalizedPath);
}

function getCategories(art) {
  const articles = art.map((arr) => {
    const urlArray = arr.url.split("/");
    let shifted = urlArray.shift();

    for (var i = 0; i < baseUrlLevels; i++) {
      shifted = urlArray.shift();
    }

    return urlArray.filter((value) => {
      return value && value.length;
    })[0];
  });
  const findUniqueCat = filterCategories(articles).filter(Boolean);
  return findUniqueCat;
}

var outputArray = [];
function filterCategories(arr) {
  let outputArray = arr.filter(function (v, i, self) {
    return i == self.indexOf(v);
  });
  return outputArray;
}

function beautify(str) {
  let re = /-/gi;
  str = str.replace(re, " ");

  if (str.includes("universellutforming")) {
    str = str.replace("universellutforming", "universell utforming");
  }

  if (str.includes("maler og monstre")) {
    str = str.replace("maler og monstre", "maler og mønstre");
  }

  return str;
}
</script>

<style lang="scss">
@use "sass:map";
@use "@pkt/scss/abstracts/variables";
@use "@pkt/scss/abstracts/functions";
@use "@pkt/scss/abstracts/mixins/breakpoints" as *;
@use "@pkt/scss/abstracts/mixins/typography";

@mixin -svg-arrow($type: down, $color: #2a2859) {
  $-iconColor: $color;
  $-arrow: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><path d='M16 19.41L6.33 10 5 11.29 16 22l11-10.71L25.67 10 16 19.41z' fill-rule='evenodd' fill='#{$-iconColor}' /></svg>");

  @if $type == up {
    $-arrow: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><path d='M16 12.59L6.33 22 5 20.71 16 10l11 10.71L25.67 22 16 12.59z' fill-rule='evenodd' fill='#{$-iconColor}' /></svg>");
  }
  background-image: functions.escape-svg($-arrow);
}

$navigation-width: 272px;
$header-height: 69px;
$max-content-width: 720px;
$max-page-width: calc(
  $navigation-width + 32px + $max-content-width + 32px + $navigation-width +
    32px
);

.page-nav {
  height: 100%;
  background-color: var(--pkt-color-brand-neutrals-100);
  display: none;
  z-index: 50;
  padding: 2rem 1rem;
  overflow-x: hidden;
  overflow-y: auto;

  @media screen and (min-width: 0) and (max-width: 47.938rem) {
    top: $header-height;
    left: 0;
    right: 0;
    height: calc(100vh - #{$header-height});
    position: fixed;
  }

  @include bp("tablet-up") {
    z-index: 50;
    display: block;
    height: 100vh;
    top: 0;
    padding-top: $header-height;
    overflow: auto;
    position: fixed;
    max-width: $navigation-width;
    padding-left: 2rem;
    width: 100%;
  }

  @media screen and (min-width: 85rem) {
    padding-left: max(2rem, calc((100% - $max-page-width) / 2 + 2rem));
    max-width: calc((100% - $max-page-width) / 2 + $navigation-width);
  }

  @at-root .show-mobile-menu & {
    display: block;
  }
  &__item {
    margin-bottom: 48px;
  }
  &__category {
    @include typography.get-text("pkt-txt-20-medium");
    margin-bottom: map.get(variables.$spacing, "size-16");
    &::first-letter {
      text-transform: uppercase;
    }
  }

  &__link {
    @include typography.get-text("pkt-txt-18-light");
    display: block;
    text-decoration: none;

    svg {
      height: 23px;
      margin-left: 8px;
    }
    &.active {
      text-decoration: underline;
    }
    &:visited {
      color: var(--pkt-color-brand-dark-blue-1000);
    }
    &::first-letter {
      text-transform: uppercase;
    }
  }
}

.pkt-header-docs__social {
  &-link {
    display: inline-block;
    height: 2rem;
    margin-right: 8px;

    svg {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
