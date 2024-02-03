import Textinput from './Textinput.vue';
import { use, registerComponent } from '../../utils/plugins';

const Plugin = {
  install(Vue) {
    registerComponent(Vue, Textinput);
  },
};

use(Plugin);

export default Plugin;

export { Textinput as PktTextinput };
