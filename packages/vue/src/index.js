import * as plugins from "./components/plugins";

import { use, registerPlugin } from "./utils/plugins";

const Punkt = {
  install(Vue, options = {}) {
    // Components
    for (const componentKey in plugins) {
      registerPlugin(Vue, plugins[componentKey]);
    }
  },
};

use(Punkt);

export default Punkt;

// export all vue components
export * from "./components";

// export all components as vue plugin
export * from "./components/plugins";
