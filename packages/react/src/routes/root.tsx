// Routes for the dev server
import { Outlet } from 'react-router-dom'

import DevHeader from '../dev-components/DevHeader'

export default function Root() {
  const routes = [
    { path: '/', label: 'Choose component' },
    { path: '/alert', label: 'Alert' },
    { path: '/backlink', label: 'BackLink' },
    { path: '/breadcrumbs', label: 'Breadcrumbs' },
    { path: '/button', label: 'Button' },
    { path: '/checkbox', label: 'Checkbox' },
    { path: '/footer', label: 'Footer' },
    { path: '/header', label: 'Header' },
    { path: '/icon', label: 'Icon' },
    { path: '/input', label: 'Input' },
    { path: '/messagebox', label: 'Messagebox' },
    { path: '/linkcard', label: 'Linkcard' },
    { path: '/radiobutton', label: 'RadioButton' },
    { path: '/searchinput', label: 'SearchInput' },
    { path: '/select', label: 'Select' },
    { path: '/switch', label: 'Switch' },
    { path: '/table', label: 'Table' },
    { path: '/tabs', label: 'Tabs' },
    { path: '/tag', label: 'Tag' },
    { path: '/textarea', label: 'Textarea' },
    { path: '/textinput', label: 'Textinput' },
  ]

  return (
    <>
      <div id="app" className="page-container">
        <DevHeader routes={routes} />
        <Outlet />
      </div>
    </>
  )
}
