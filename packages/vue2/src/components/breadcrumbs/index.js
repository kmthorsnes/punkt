import Breadcrumbs from "./Breadcrumbs.vue";
import { use, registerComponent } from "../../utils/plugins";

const Plugin = {
  install(Vue) {
    registerComponent(Vue, Breadcrumbs);
  },
};

use(Plugin);

export default Plugin;

export { Breadcrumbs as PktBreadcrumbs };
