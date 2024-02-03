import BackLink from "./BackLink.vue";
import { use, registerComponent } from "../../utils/plugins";

const Plugin = {
  install(Vue) {
    registerComponent(Vue, BackLink);
  },
};

use(Plugin);

export default Plugin;

export { BackLink as PktBackLink };
