<template>
  <span class="pkt-icon" v-if="innerHtml" v-html="innerHtml"></span>
</template>

<script>
// Cache is a dictionary of promises that each resolves to an svg icon
const iconCache = {};

const errorSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"></svg>';

function getIcon(name, path) {
  // Download and cache icon if not in cache
  if (!iconCache[name] && typeof window.fetch === 'function') {
    iconCache[name] = window.fetch(path + name + '.svg')
      .then((response) => {
        if (!response.ok) {
          console.error('Missing icon: ' + path + name + '.svg');
          return errorSvg;
        }
        return response.text();
      })
      .then((text) => {
        return text;
      });
  }

  // Return the svg promise
  return Promise.resolve(iconCache[name]);
}

export default {
  name: 'PktIcon',

  data() {
    return {
      defaultSvgPath: 'https://punkt-cdn.oslo.kommune.no/latest/icons/',
      innerHtml: '',
    };
  },

  props: {
    name: {
      type: String,
      required: true,
      default: undefined,
    },
    path: {
      type: String,
      default: undefined,
    },
  },

  watch: {
    name: {
      handler: 'onNameChange',
      immediate: true,
    },
  },

  methods: {
    onNameChange(newName) {
      const path = this.path || this.$pktSvgPath || this.defaultSvgPath;

      getIcon(newName, path).then((svg) => {
        this.innerHtml = svg;
      });
    },
  },
};
</script>
