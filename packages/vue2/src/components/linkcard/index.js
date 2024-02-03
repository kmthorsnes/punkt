import Linkcard from './Linkcard.vue';
import { use, registerComponent } from '../../utils/plugins';

const Plugin = {
  install(Vue) {
    registerComponent(Vue, Linkcard);
  },
};

use(Plugin);

export default Plugin;

export { Linkcard as PktLinkcard };
