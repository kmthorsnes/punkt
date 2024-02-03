import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Alert from '@/views/Alert.vue'
import BackLink from '@/views/BackLink.vue'
import Breadcrumbs from '@/views/Breadcrumbs.vue'
import Button from '@/views/Button.vue'
import Checkbox from '@/views/Checkbox.vue'
import Footer from '@/views/Footer.vue'
import Header from '@/views/Header.vue'
import HeaderFullPage from '@/views/HeaderFullPage.vue'
import Linkcard from '@/views/Linkcard.vue'
import Messagebox from '@/views/Messagebox.vue'
import Radiobutton from '@/views/Radiobutton.vue'
import Select from '@/views/Select.vue'
import SearchInput from '@/views/SearchInput.vue'
import Tag from '@/views/Tag.vue'
import Textarea from '@/views/Textarea.vue'
import TextInput from '@/views/TextInput.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'Vue components' },
  },
  {
    path: '/alert',
    name: 'Alert',
    component: Alert,
    meta: { title: 'Vue components - Alert' },
  },
  {
    path: '/backlink',
    name: 'BackLink',
    component: BackLink,
    meta: { title: 'Vue components - Back link' },
  },
  {
    path: '/breadcrumbs',
    name: 'Breadcrumbs',
    component: Breadcrumbs,
    meta: { title: 'Vue components - Breadcrumbs' },
  },
  {
    path: '/button',
    name: 'Button',
    component: Button,
    meta: { title: 'Vue components - Button' },
  },
  {
    path: '/checkbox',
    name: 'Checkbox',
    component: Checkbox,
    meta: { title: 'Vue components - Checkbox' },
  },
  {
    path: '/footer',
    name: 'Footer',
    component: Footer,
    meta: { title: 'Vue components - Footer' },
  },
  {
    path: '/header',
    name: 'Header',
    component: Header,
    meta: { title: 'Vue components - Header' },
  },
  {
    path: '/header-full',
    name: 'HeaderFullPage',
    component: HeaderFullPage,
    meta: { title: 'Vue components - Header - Full page' },
  },
  {
    path: '/messagebox',
    name: 'Messagebox',
    component: Messagebox,
    meta: { title: 'Vue components - Messagebox' },
  },
  {
    path: '/linkcard',
    name: 'Linkcard',
    component: Linkcard,
    meta: { title: 'Vue components - Linkcard' },
  },
  {
    path: '/radiobutton',
    name: 'Radiobutton',
    component: Radiobutton,
    meta: { title: 'Vue components - Radiobutton' },
  },
  {
    path: '/searchinput',
    name: 'SearchInput',
    component: SearchInput,
    meta: { title: 'Vue components - SearchInput' },
  },
  {
    path: '/select',
    name: 'Select',
    component: Select,
    meta: { title: 'Vue components - Select' },
  },
  {
    path: '/tag',
    name: 'Tag',
    component: Tag,
    meta: { title: 'Vue components - Tag' },
  },
  {
    path: '/textarea',
    name: 'Textarea',
    component: Textarea,
    meta: { title: 'Vue components - Textarea' },
  },
  {
    path: '/textinput',
    name: 'Textinput',
    component: TextInput,
    meta: { title: 'Vue components - Textinput' },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
})
const DEFAULT_TITLE = 'Vue components'
router.afterEach((to, from) => {
  // Use next tick to handle router history correctly
  // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
  Vue.nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE
  })
})

export default router
