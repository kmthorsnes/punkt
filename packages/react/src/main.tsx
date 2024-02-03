import './index.scss'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Alert from './routes/alert'
import BackLink from './routes/backlink'
import Breadcrumbs from './routes/breadcrumbs'
import Button from './routes/button'
import Checkbox from './routes/checkbox'
import Footer from './routes/footer'
import Header from './routes/header'
import HeaderFull from './routes/header-full'
import Icon from './routes/icon'
import Index from './routes/index'
import Input from './routes/input'
import LinkCard from './routes/linkcard'
import Messagebox from './routes/messagebox'
import PktRadioButton from './routes/radiobutton'
import Root from './routes/root'
import SearchInput from './routes/searchinput'
import Select from './routes/select'
import Switch from './routes/switch'
import Table from './routes/table'
import Tabs from './routes/tabs'
import Tag from './routes/tag'
import Textarea from './routes/textarea'
import Textinput from './routes/textinput'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Index /> },
      { path: '/alert', element: <Alert /> },
      { path: '/backlink', element: <BackLink /> },
      { path: '/breadcrumbs', element: <Breadcrumbs /> },
      { path: '/button', element: <Button /> },
      { path: '/checkbox', element: <Checkbox /> },
      { path: '/footer', element: <Footer /> },
      { path: '/header', element: <Header /> },
      { path: '/header-full', element: <HeaderFull /> },
      { path: '/icon', element: <Icon /> },
      { path: '/input', element: <Input /> },
      { path: '/messagebox', element: <Messagebox /> },
      { path: '/linkcard', element: <LinkCard /> },
      { path: '/radiobutton', element: <PktRadioButton /> },
      { path: '/searchinput', element: <SearchInput /> },
      { path: '/select', element: <Select /> },
      { path: '/switch', element: <Switch /> },
      { path: '/table', element: <Table /> },
      { path: '/tabs', element: <Tabs /> },
      { path: '/tag', element: <Tag /> },
      { path: '/textarea', element: <Textarea /> },
      { path: '/textinput', element: <Textinput /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
