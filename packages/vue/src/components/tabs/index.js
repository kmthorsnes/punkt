import Tabs from './Tabs.vue'
import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
  install(Vue) {
    registerComponent(Vue, Tabs)
  },
}

use(Plugin)

export default Plugin

export { Tabs as PktTabs }
