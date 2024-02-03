import Radiobutton from './Radiobutton.vue'
import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
  install(Vue) {
    registerComponent(Vue, Radiobutton)
  },
}

use(Plugin)

export default Plugin

export { Radiobutton as PktRadiobutton }
