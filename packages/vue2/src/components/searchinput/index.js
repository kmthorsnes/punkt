import SearchInput from './SearchInput.vue'
import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
  install(Vue) {
    registerComponent(Vue, SearchInput)
  },
}

use(Plugin)

export default Plugin

export { SearchInput as PktSearchInput }
