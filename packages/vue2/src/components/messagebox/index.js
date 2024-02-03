import Messagebox from './Messagebox.vue';
import { use, registerComponent } from '../../utils/plugins';

const Plugin = {
  install(Vue) {
    registerComponent(Vue, Messagebox);
  },
};

use(Plugin);

export default Plugin;

export { Messagebox as PktMessagebox };
