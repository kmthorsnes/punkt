import Checkbox from './Checkbox.vue'
import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
  install(Vue) {
    registerComponent(Vue, Checkbox)
  },
}

use(Plugin)

export default Plugin

export { Checkbox as PktCheckbox }
