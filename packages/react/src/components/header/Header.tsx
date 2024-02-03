import classNames from 'classnames'
import React, { ForwardedRef, forwardRef, HTMLAttributes } from 'react'

import { PktButton } from '../button/Button'
import { PktIcon } from '../icon/Icon'

export interface User {
  name?: string
  shortname?: string
  lastLoggedIn?: string | Date
}

export interface UserMenuItem {
  iconName?: string
  title: string
  target: string | (() => void)
}

export interface Representing {
  name?: string
  shortname?: string
  orgNumber?: string | number
}

export interface UserMenuFooterItem {
  title: string
  target: string | (() => void)
}

export interface IPktHeader extends HTMLAttributes<HTMLDivElement> {
  logoLink?: string | (() => void)
  serviceName?: string
  fixed?: boolean
  scrollToHide?: boolean
  user?: User
  userMenu?: UserMenuItem[]
  representing?: Representing
  userOptions?: UserMenuItem[]
  userMenuFooter?: UserMenuFooterItem[]
  canChangeRepresentation?: boolean
  showMenuButton?: boolean
  showLogOutButton?: boolean
  openMenu?: () => void
  logOut?: () => void
  changeRepresentation?: () => void
}

export const PktHeader = forwardRef(
  (
    {
      logoLink = 'https://www.oslo.kommune.no/',
      serviceName,
      fixed = true,
      scrollToHide = true,
      user,
      userMenu,
      representing,
      userOptions,
      userMenuFooter,
      canChangeRepresentation = true,
      showMenuButton = false,
      showLogOutButton = false,
      openMenu,
      logOut,
      changeRepresentation,
      ...props
    }: IPktHeader,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const lastLoggedIn = React.useMemo(() => {
      if (typeof user?.lastLoggedIn === 'string') {
        return user.lastLoggedIn
      }
      return user?.lastLoggedIn
        ? new Date(user.lastLoggedIn).toLocaleString('nb-NO', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })
        : ''
    }, [user])

    const [hidden, setHidden] = React.useState(false)
    const [lastScrollPosition, setLastScrollPosition] = React.useState(0)
    const [userMenuOpen, setUserMenuOpen] = React.useState(false)

    const userMenuRef = React.useRef<HTMLLIElement>(null)

    React.useEffect(() => {
      document.addEventListener('mouseup', clickOutside)
      window.addEventListener('scroll', onScroll)
      return () => {
        document.removeEventListener('mouseup', clickOutside)
        window.removeEventListener('scroll', onScroll)
      }
    })

    const openUserMenu = () => {
      setUserMenuOpen(!userMenuOpen)
    }

    const clickOutside = (e: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target as HTMLElement)) {
        setUserMenuOpen(false)
      }
    }

    const onScroll = () => {
      if (scrollToHide) {
        const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
        if (currentScrollPosition < 0) {
          return
        }
        if (Math.abs(currentScrollPosition - lastScrollPosition) < 60) {
          return
        }
        setHidden(currentScrollPosition > lastScrollPosition)
        setLastScrollPosition(currentScrollPosition)
      }
    }

    return (
      <header
        {...props}
        id="pkt-header"
        data-testid="pkt-header"
        aria-label="Topp"
        className={classNames('pkt-header', {
          'pkt-header--fixed': fixed,
          'pkt-header--scroll-to-hide': scrollToHide,
          'pkt-header--hidden': hidden,
        })}
        ref={ref}
      >
        <div className="pkt-header__logo">
          {typeof logoLink === 'string' ? (
            <a aria-label="Tilbake til forside" className="pkt-header__logo-link" href={logoLink}>
              <PktIcon
                name="oslologo"
                className="pkt-header__logo-svg"
                aria-hidden="true"
                path="https://punkt-cdn.oslo.kommune.no/latest/logos/"
              ></PktIcon>
            </a>
          ) : (
            <button
              aria-label="Tilbake til forside"
              className="pkt-link-button pkt-link pkt-header__logo-link"
              onClick={logoLink}
            >
              <PktIcon
                name="oslologo"
                className="pkt-header__logo-svg"
                aria-hidden="true"
                path="https://punkt-cdn.oslo.kommune.no/latest/logos/"
              ></PktIcon>
            </button>
          )}
          <span className="pkt-header__logo-service">{serviceName}</span>
        </div>
        <nav className="pkt-header__actions">
          <ul className="pkt-header__actions-row">
            {showMenuButton && (
              <li>
                <PktButton
                  className="pkt-header__menu-btn"
                  skin="secondary"
                  variant="icon-right"
                  iconName="menu"
                  onClick={openMenu}
                >
                  Meny
                </PktButton>
              </li>
            )}
            {(user || representing) && (
              <li
                data-testid="usermenu"
                className={`pkt-header--has-dropdown ${
                  userMenuOpen && !hidden ? 'pkt-header--open-dropdown' : ''
                }`}
                ref={userMenuRef}
              >
                <button
                  className="pkt-header__user-btn pkt-btn pkt-btn--secondary pkt-btn--icons-right-and-left"
                  type="button"
                  role="button"
                  aria-controls="pktUserDropdown"
                  aria-expanded={userMenuOpen}
                  onClick={openUserMenu}
                >
                  <PktIcon name="user" className="pkt-btn__icon" />
                  <span className="pkt-header__user-fullname">
                    {representing?.name || user?.name}
                  </span>
                  <span className="pkt-header__user-shortname">
                    {representing?.shortname || user?.shortname}
                  </span>
                  <PktIcon name="chevron-thin-down" className="pkt-btn--closed" />
                  <PktIcon name="chevron-thin-up" className="pkt-btn--open" />
                </button>
                <ul id="pktUserDropdown" className="pkt-header__dropdown pkt-user-menu">
                  {user && (
                    <li>
                      <div className="pkt-user-menu__label">Pålogget som</div>
                      <div className="pkt-user-menu__name">{user.name}</div>
                      {user.lastLoggedIn && (
                        <div className="pkt-user-menu__last-logged-in">
                          Sist pålogget: <time>{lastLoggedIn}</time>
                        </div>
                      )}
                    </li>
                  )}
                  {userMenu && (
                    <li>
                      <ul className="pkt-list">
                        {userMenu.map((item, index) => (
                          <li key={`userMenu-${index}`}>
                            {typeof item.target === 'string' ? (
                              <a href={item.target} className="pkt-link">
                                {item.iconName && (
                                  <PktIcon name={item.iconName} className="pkt-link__icon" />
                                )}
                                {item.title}
                              </a>
                            ) : (
                              <button className="pkt-link-button pkt-link" onClick={item.target}>
                                {item.iconName && (
                                  <PktIcon name={item.iconName} className="pkt-link__icon" />
                                )}
                                {item.title}
                              </button>
                            )}
                          </li>
                        ))}
                      </ul>
                    </li>
                  )}
                  {(representing || canChangeRepresentation) && (
                    <li>
                      {representing && (
                        <>
                          <div className="pkt-user-menu__label">Representerer</div>
                          <div className="pkt-user-menu__name">{representing.name}</div>
                          {representing.orgNumber && (
                            <div className="pkt-user-menu__org-number">
                              Org.nr. {representing.orgNumber}
                            </div>
                          )}
                        </>
                      )}
                      <ul className="pkt-list mt-size-16">
                        {canChangeRepresentation && (
                          <li>
                            <button
                              className="pkt-link-button pkt-link"
                              onClick={changeRepresentation}
                            >
                              <PktIcon name="cogwheel" className="pkt-link__icon" />
                              Endre organisasjon
                            </button>
                          </li>
                        )}
                      </ul>
                    </li>
                  )}
                  <li>
                    <ul className="pkt-list">
                      {(userOptions || !showLogOutButton) && (
                        <>
                          {userOptions?.map((item, index) => (
                            <li key={`userOptions-${index}`}>
                              {typeof item.target === 'string' ? (
                                <a href={item.target} className="pkt-link">
                                  {item.iconName && (
                                    <PktIcon name={item.iconName} className="pkt-link__icon" />
                                  )}
                                  {item.title}
                                </a>
                              ) : (
                                <button className="pkt-link-button pkt-link" onClick={item.target}>
                                  {item.iconName && (
                                    <PktIcon name={item.iconName} className="pkt-link__icon" />
                                  )}
                                  {item.title}
                                </button>
                              )}
                            </li>
                          ))}
                          {!showLogOutButton && (
                            <li>
                              <button className="pkt-link-button pkt-link" onClick={logOut}>
                                <PktIcon name="exit" className="pkt-link__icon" />
                                Logg ut
                              </button>
                            </li>
                          )}
                        </>
                      )}
                    </ul>
                  </li>
                  {userMenuFooter && (
                    <li className="footer">
                      <ul className="pkt-list-horizontal bordered">
                        {userMenuFooter.map((item, index) => (
                          <li key={`userMenuFooter-${index}`}>
                            {typeof item.target === 'string' ? (
                              <a href={item.target} className="pkt-link">
                                {item.title}
                              </a>
                            ) : (
                              <button className="pkt-link-button pkt-link" onClick={item.target}>
                                {item.title}
                              </button>
                            )}
                          </li>
                        ))}
                      </ul>
                    </li>
                  )}
                </ul>
              </li>
            )}
            {showLogOutButton && (
              <li>
                <PktButton
                  className="pkt-header__user-btn pkt-header__user-btn-logout"
                  iconName="exit"
                  role="button"
                  onClick={logOut}
                  skin="secondary"
                  variant="icon-right"
                >
                  Logg ut
                </PktButton>
              </li>
            )}
          </ul>
        </nav>
      </header>
    )
  },
)
