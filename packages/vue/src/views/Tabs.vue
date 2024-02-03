<template>
  <page-main class="pkt-container pkt-container--laptop">
    <h1>Tabs</h1>

    <section class="component">
      <h2>Som lenker</h2>
      <PktTabs :tabs="tabsLinks" @onTabSelected="changeContent" />
      <div class="tab-content p-size-20">
        {{ content[visibleContent] }}
      </div>
    </section>
    <section class="component">
      <h2>Som knapper</h2>
      <PktTabs :tabs="tabsButtons" @onTabSelected="changeActive" />
    </section>
    <section class="component">
      <h2>Som navigasjon (uten piltastnavigasjon)</h2>
      <PktTabs :tabs="tabsLinks2" :arrowNav="false" @onTabSelected="changeContent2" />
      <div class="tab-content p-size-20">
        {{ content[visibleContent2] }}
      </div>
    </section>
  </page-main>
</template>

<script>
import spec from 'componentSpecs/tabs.json'
import PageMain from '@/dev-components/PageMain.vue'
import { PktTabs } from '@/components/tabs'

export default {
  name: 'Tabs',
  components: {
    PktTabs,
    PageMain,
  },
  data() {
    return {
      tagSpecs: spec.props.tabs.items.properties.tag.properties,
      active: 0,
      visibleContent: 0,
      visibleContent2: 0,
    }
  },
  computed: {
    tabsLinks() {
      const tabs = []
      for (let i = 0; i < this.tagSpecs.skin.values.length; i++) {
        tabs.push({
          text: `Tab ${i + 1}`,
          href: `#${i}`,
          icon: 'user',
          tag: {
            text: 'tag',
            skin: this.tagSpecs.skin.values[i],
          },
          active: i === this.visibleContent,
        })
      }
      return tabs
    },
    tabsLinks2() {
      const tabs = []
      for (let i = 0; i < this.tagSpecs.skin.values.length; i++) {
        tabs.push({
          text: `Tab ${i + 1}`,
          href: `#${i}`,
          icon: 'user',
          tag: {
            text: 'tag',
            skin: this.tagSpecs.skin.values[i],
          },
          active: i === this.visibleContent2,
        })
      }
      return tabs
    },
    tabsButtons() {
      const tabs = []
      for (let i = 0; i < this.tagSpecs.skin.values.length; i++) {
        tabs.push({
          text: i === 6 ? 'Log out' : `Tab ${i + 1}`,
          action: i === 6 ? this.logOut : this.logEmit,
          icon: 'user',
          tag: {
            text: 'tag',
            skin: this.tagSpecs.skin.values[i],
          },
          active: i === this.active,
        })
      }
      return tabs
    },
    content() {
      return [
        'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.',
        'He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.',
        'The bedding was hardly able to cover it and seemed ready to slide off any moment.',
        'His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked.',
        '"What‘s happened to me?" he thought. It wasn‘t a dream.',
        'His room, a proper human room although a little too small, lay peacefully between its four familiar walls.',
        'A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine,',
      ]
    },
  },
  methods: {
    logEmit(val) {
      console.log('function triggered ' + val)
    },
    logOut() {
      console.log('logged out')
    },
    changeActive(val) {
      console.log('changed active to ' + val)
      this.active = val
    },
    changeContent(val) {
      this.visibleContent = val
    },
    changeContent2(val) {
      this.visibleContent2 = val
    },
  },
}
</script>

<style lang="scss"></style>
