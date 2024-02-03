import InputWrapper from './InputWrapper.vue'
import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
  install(Vue) {
    registerComponent(Vue, InputWrapper)
  },
}

use(Plugin)

export default Plugin

export { InputWrapper as PktInputWrapper }
