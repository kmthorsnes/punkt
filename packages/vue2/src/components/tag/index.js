import Tag from "./Tag.vue";
import { use, registerComponent } from "../../utils/plugins";

const Plugin = {
  install(Vue) {
    registerComponent(Vue, Tag);
  },
};

use(Plugin);

export default Plugin;

export { Tag as PktTag };
