<template>
  <footer class="pkt-footer" data-mode="dark">
    <div class="pkt-footer__container">
      <div class="pkt-grid pkt-grid--rowgap-size-32 pkt-grid--gap-size-16">
        <div class="pkt-footer__column pkt-cell pkt-cell--span12 pkt-cell--span4-laptop-up">
          <h2 class="pkt-footer__title">{{ columnOne.title }}</h2>
          <ul class="pkt-footer__list">
            <li class="pkt-footer__text" v-if="columnOne.text">
              {{ columnOne.text }}
            </li>
            <li class="pkt-footer__list-item" v-for="(link, index) in columnOne.links" :key="`links-${index}`">
              <a
                class="pkt-footer__link"
                :href="link.href"
                :class="{ 'pkt-link--external': link.external }"
                :target="link.openInNewTab ? '_blank' : '_self'"
                :rel="link.openInNewTab ? 'noopener noreferrer' : undefined"
              >
                <pkt-icon class="pkt-footer__link-icon" name="chevron-right"></pkt-icon>
                {{ link.text }}
              </a>
            </li>
          </ul>
        </div>
        <div class="pkt-footer__column pkt-cell pkt-cell--span12 pkt-cell--span4-laptop-up">
          <h2 class="pkt-footer__title">{{ columnTwo.title }}</h2>
          <ul class="pkt-footer__list">
            <li class="pkt-footer__list-item" v-for="(link, index) in columnTwo.links" :key="`links-${index}`">
              <a
                class="pkt-footer__link"
                :href="link.href"
                :class="{ 'pkt-link--external': link.external }"
                :target="link.openInNewTab ? '_blank' : '_self'"
                :rel="link.openInNewTab ? 'noopener noreferrer' : undefined"
              >
                <pkt-icon class="pkt-footer__link-icon" name="chevron-right"></pkt-icon>
                {{ link.text }}
              </a>
            </li>
          </ul>
        </div>
        <div class="pkt-footer__column pkt-cell pkt-cell--span12 pkt-cell--span4-laptop-up">
          <h2 class="pkt-footer__title">Om nettstedet</h2>
          <ul class="pkt-footer__list">
            <li class="pkt-footer__list-item">
              <a :href="personvernOgInfoLink" class="pkt-footer__link">
                <pkt-icon class="pkt-footer__link-icon" name="chevron-right"></pkt-icon>
                Personvern og informasjonskapsler
              </a>
            </li>
            <li class="pkt-footer__list-item">
              <a :href="tilgjengelighetLink" class="pkt-footer__link">
                <pkt-icon class="pkt-footer__link-icon" name="chevron-right"></pkt-icon>
                Tilgjengelighet
              </a>
            </li>
          </ul>
        </div>
      </div>
      <template v-if="socialLinks">
        <div class="pkt-footer__social" aria-label="standard lenker">
          <template v-for="(link, index) in socialLinks">
            <div v-if="link.language" :key="`language-${index}`" class="pkt-footer__social-language">
              <a
                :href="link.href"
                :aria-label="`til ${link.language} versjon av nettsiden`"
                :target="link.openInNewTab ? '_blank' : '_self'"
                :rel="link.openInNewTab ? 'noopener noreferrer' : null"
                >{{ link.language }}</a
              >
            </div>
          </template>
          <div class="pkt-footer__social-icons">
            <template v-for="(link, index) in socialLinks">
              <a
                :key="`sociallinks-${index}`"
                :href="link.href"
                :aria-label="`til ${link.iconName}`"
                :target="link.openInNewTab ? '_blank' : '_self'"
                :rel="link.openInNewTab ? 'noopener noreferrer' : null"
                class="pkt-footer__social-icon-link"
                v-if="link.iconName"
              >
                <pkt-icon class="pkt-footer__social-icon" :name="link.iconName"></pkt-icon>
              </a>
            </template>
          </div>
        </div>
      </template>
    </div>
  </footer>
</template>

<script>
import PktIcon from '../icon/Icon.vue'

export default {
  name: 'PktFooter',
  components: {
    PktIcon,
  },
  props: {
    columnOne: {
      type: Object,
      required: true,
      validator: (value) => {
        return (
          'title' in value &&
          (!('links' in value) ||
            (Array.isArray(value.links) && value.links.every((link) => 'href' in link && 'text' in link)))
        )
      },
    },
    columnTwo: {
      type: Object,
      required: true,
      validator: (value) => {
        return (
          'title' in value &&
          (!('links' in value) ||
            (Array.isArray(value.links) && value.links.every((link) => 'href' in link && 'text' in link)))
        )
      },
    },
    socialLinks: {
      type: Array,
      description: 'Array of social media and language links for the footer',
      validator: (value) => {
        return value.every((link) => {
          if (typeof link === 'object') {
            const hasHref = typeof link.href === 'string'
            const hasIconName = typeof link.iconName === 'string'
            const hasLanguage = typeof link.language === 'string'
            return hasHref && (hasIconName || hasLanguage)
          }
          return false
        })
      },
      required: false,
    },
    personvernOgInfoLink: {
      type: String,
      default: 'https://www.oslo.kommune.no/personvern-og-informasjonskapsler/',
      required: false,
    },
    tilgjengelighetLink: {
      type: String,
      default: 'https://www.oslo.kommune.no/tilgjengelighet/',
      required: false,
    },
  },
}
</script>
