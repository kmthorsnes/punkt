import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { PktIcon } from '@/components/icon/Icon'

interface DevHeaderProps {
  routes: { path: string; label: string }[]
}

export default function DevHeader({ routes }: DevHeaderProps): JSX.Element {
  const navigate = useNavigate()
  const location = useLocation()

  const [selectedPath, setSelectedPath] = useState(location.pathname)

  useEffect(() => {
    setSelectedPath(location.pathname)
  }, [location])

  function handleRouteChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedPath(event.target.value)
    navigate(event.target.value)
  }

  return (
    <header id="dev-header" className="dev-header" aria-label="Topp">
      <div className="dev-header__logo">
        <a aria-label="Tilbake til forside" className="dev-header__logo-link" href="/">
          <PktIcon
            name="oslologo"
            className="dev-header__logo-svg"
            aria-hidden="true"
            path="https://punkt-cdn.oslo.kommune.no/latest/logos/"
          ></PktIcon>
        </a>
      </div>

      <nav className="dev-header__nav">
        <select
          className="pkt-input"
          name="dev-header__select"
          id="dev-header__select"
          onChange={handleRouteChange}
          value={selectedPath}
        >
          {routes.map((route) => (
            <option key={route.path} value={route.path}>
              {route.label}
            </option>
          ))}
        </select>
      </nav>
    </header>
  )
}
