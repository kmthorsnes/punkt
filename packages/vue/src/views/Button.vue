<template>
  <page-main class="pkt-container pkt-container--desktop" :showToolbar="!!specProps.mode">
    <h1>Button</h1>

    <section class="component" v-for="(skinType, index) in specProps.skin" :key="`skin-${index}`">
      <h2>Skin: {{ skinType }}</h2>
      <div class="component__block-example">
        <template v-for="(sizeType, i) in specProps.size" :key="`skin-${index}-${i}-variant`">
          <div>
            <template v-for="(variantType, j) in specProps.variant" :key="`skin-${index}-${i}-variant-${j}`">
              <pkt-button
                :size="sizeType"
                :skin="skinType"
                :variant="variantType"
                @onClick="buttonClick(variantType)"
                >{{ variantType }}</pkt-button
              >
            </template>
          </div>
        </template>
      </div>
      <div class="component__block-example">
        <template v-for="(sizeType, i) in specProps.size" :key="`skin-${index}-${i}-variant-disabled`">
          <div>
            <template v-for="(variantType, j) in specProps.variant" :key="`skin-${index}-${i}-variant-${j}-disabled`">
              <pkt-button
                :size="sizeType"
                :skin="skinType"
                :variant="variantType"
                disabled
                @onClick="buttonClick(variantType)"
                >{{ variantType }}</pkt-button
              >
            </template>
          </div>
        </template>
      </div>
      <div class="component__block-example">
        <template v-for="(sizeType, i) in specProps.size" :key="`skin-${index}-${i}-state`">
          <div>
            <template v-for="(stateType, j) in specProps.state" :key="`skin-${index}-${i}-state-${j}`">
              <pkt-button
                :size="sizeType"
                :skin="skinType"
                :variant="specProps.variant[1]"
                :class="`pkt-btn--${stateType}`"
                @onClick="buttonClick(stateType)"
                >{{ stateType }}</pkt-button
              >
            </template>
          </div>
        </template>
      </div>
    </section>
    <section class="component">
      <h2>Colors</h2>
      <div class="component__block-example">
        <div v-for="(colorType, i) in specProps.color" :key="`color-${i}`">
          <div>
            <pkt-button :key="`color-${i}`" :color="colorType" @onClick="buttonClick(colorType)">{{
              colorType
            }}</pkt-button>
          </div>
        </div>
      </div>
    </section>
  </page-main>
</template>

<script>
import spec from 'componentSpecs/button.json'
import { PktButton } from '@/components/button'
import PageMain from '@/dev-components/PageMain.vue'

export default {
  name: 'Button',
  data: () => ({
    specProps: spec.props,
  }),
  components: {
    PktButton,
    PageMain,
  },
  computed: {},
  methods: {
    buttonClick(name) {
      console.log(name)
    },
  },
}
</script>
