<template>
  <div class="pkt-tabs">
    <div class="pkt-tabs__list" :role="arrowNav ? 'tablist' : 'navigation'">
      <component
        v-for="(tab, index) in tabs"
        :role="arrowNav ? 'tab' : undefined"
        :aria-selected="!!tab.active"
        :is="tab.href ? 'a' : 'button'"
        :href="tab.href || undefined"
        :type="!tab.href ? 'button' : undefined"
        :aria-controls="tab.controls"
        :class="{
          'pkt-tabs__link': tab.href,
          'pkt-tabs__button pkt-link-button': !tab.href,
          active: tab.active,
        }"
        :tabindex="!arrowNav ? undefined : tab.active ? 0 : -1"
        :key="index"
        ref="tabRefs"
        @click="selectTab(index, tab)"
        @keyup="handleKeyPress(index, $event)"
      >
        <PktIcon :name="tab.icon" class="pkt-icon--small" v-if="tab.icon" />
        {{ tab.text }}
        <PktTag :skin="tab.tag.skin" size="small" v-if="tab.tag">{{ tab.tag.text }}</PktTag>
      </component>
    </div>
  </div>
</template>

<script setup>
import PktTag from '../tag/Tag.vue'
import PktIcon from '../icon/Icon.vue'
import { ref } from 'vue'

const { arrowNav, tabs } = defineProps({
  /* 
    Normal tabs with inline content change should use arrow keys to navigate.
    If used for page navigation, this prop should be false
  */
  arrowNav: {
    type: Boolean,
    default: true,
  },
  /* `tabs` is an array of objects that make up the tabs
  [{
    text: 'Tab 1', // Required, text for tab
    href: '/page1', // Optional, creates a link for the tab
    active: true, // Optional, sets active tab
    action: doThis, // Optional, triggers a function when clicking the link
    controls: 'tab1panel', // Optional, adds `aria-controls` attribute to tab
    icon: 'user', // Optional, icon for the tab, uses PktIcon
    tag: { // Optional, tag for the tab, uses PktTag
      text: 'Tag',
      skin: 'green',
    },
  }]
  */
  tabs: {
    type: Array,
    default: [],
    validator(value) {
      for (const t in value) {
        const tab = value[t]
        if (!tab.text) return false
        for (const [k, v] of Object.entries(tab)) {
          switch (k) {
            case 'action':
              if (typeof v !== 'function') return false
              break
            case 'tag':
              if (typeof v !== 'object') return false
              break
            case 'active':
              if (typeof v !== 'boolean') return false
              break
            case 'controls':
            case 'text':
            case 'href':
            case 'icon':
              if (typeof v !== 'string') return false
              break
            default:
              // If none of the above hits, we're receiving invalid props
              console.warn('Tab object can only contain text, href, action, icon, tag and active keys')
              return false
          }
        }
      }
      return true
    },
  },
})

const tabRefs = ref([])

const emit = defineEmits(['onTabSelected'])

const selectTab = (index, tab) => {
  // If the tag has an `action` function: trigger it
  if (tab.action) tab.action(index)
  // But always emit `onTabSelected` though
  emit('onTabSelected', index)
}

const handleKeyPress = (index, event) => {
  if (arrowNav) {
    if (event.code === 'ArrowLeft' && index !== 0) {
      tabRefs.value[index - 1].focus()
    }
    if (event.code === 'ArrowRight' && index < tabs.length - 1) {
      tabRefs.value[index + 1].focus()
    }
    if (event.code === 'ArrowDown' || event.code === 'Space') {
      selectTab(index, tabs[index])
    }
  }
}
</script>
