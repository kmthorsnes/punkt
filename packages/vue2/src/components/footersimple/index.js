import FooterSimple from './FooterSimple.vue';
import { use, registerComponent } from '../../utils/plugins';

const Plugin = {
  install(Vue) {
    registerComponent(Vue, FooterSimple);
  },
};

use(Plugin);

export default Plugin;

export { FooterSimple as PktFooterSimple };
