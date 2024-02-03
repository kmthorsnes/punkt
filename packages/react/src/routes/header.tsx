import React from 'react'

import { PktHeader } from '@/components/header/Header'

export default function Header() {
  function openMenu() {
    console.log('Åpner meny')
  }

  function logOut() {
    console.log('Logger ut')
  }

  function changeRepresentation() {
    console.log('Bytter representasjon')
  }

  function userMenuItemFunction() {
    console.log('Mine adresser')
  }

  const state = {
    user: {
      name: 'Aksel Web Opdahl',
      shortname: 'AWO',
      lastLoggedIn: new Date(),
    },
    representing: {
      name: 'Joe & the Juice Norge AS',
      shortname: 'JJN',
      orgNumber: '911738066',
    },
    userMenu: [
      {
        title: 'Mine bookinger',
        iconName: 'heart',
        target: '#',
      },
      {
        title: 'Mine adresser',
        iconName: 'house-heart',
        target: userMenuItemFunction,
      },
    ],
    userOptions: [
      {
        title: 'Innstillinger',
        iconName: 'cogwheel',
        target: '#',
      },
    ],
    userMenuFooter: [
      {
        title: 'Kontakt',
        target: '#',
      },
      {
        title: 'Personvern',
        target: '#',
      },
    ],
  }
  return (
    <main className="page-main pkt-container">
      <h1>Header</h1>
      <p>
        <a href="/header-full">
          Test denne komponenten på sin egen side for å teste posisjon og scroll
        </a>
      </p>
      <section className="component">
        <h2>Ikke logget inn</h2>
        <h3>Uten tjenestenavn</h3>
        <div className="component__block-example">
          <PktHeader fixed={false} scrollToHide={false} />
        </div>

        <h3>Med tjenestenavn</h3>
        <div className="component__block-example">
          <PktHeader fixed={false} scrollToHide={false} serviceName="Gravferdsetaten" />
        </div>
      </section>
      <section className="component">
        <h2>Valgfrie knapper</h2>
        <h3>
          Generisk menyknapp (event: <code>openMenu</code>)
        </h3>
        <div className="component__block-example">
          <PktHeader fixed={false} scrollToHide={false} showMenuButton={true} openMenu={openMenu} />
        </div>

        <h3>Logg ut-knapp (i fall ingen brukerinformasjon)</h3>
        <div className="component__block-example">
          <PktHeader
            fixed={false}
            scrollToHide={false}
            serviceName="Gravferdsetaten"
            showLogOutButton={true}
            logOut={logOut}
          />
        </div>
      </section>
      <section className="component">
        <h2>Logget inn som privatperson</h2>
        <h3>Kan ikke endre representasjon</h3>
        <div className="component__block-example">
          <PktHeader
            fixed={false}
            scrollToHide={false}
            canChangeRepresentation={false}
            user={state.user}
            userMenu={state.userMenu}
            userMenuFooter={state.userMenuFooter}
            logOut={logOut}
            serviceName="Gravferdsetaten"
          />
        </div>

        <h3>Kan endre representasjon</h3>
        <div className="component__block-example">
          <PktHeader
            fixed={false}
            scrollToHide={false}
            canChangeRepresentation={true}
            user={state.user}
            userMenu={state.userMenu}
            userMenuFooter={state.userMenuFooter}
            changeRepresentation={changeRepresentation}
            logOut={logOut}
            serviceName="Gravferdsetaten"
          />
        </div>
      </section>
      <section className="component">
        <h2>Representerer en virksomhet</h2>
        <h3>Kan ikke endre representasjon</h3>
        <div className="component__block-example">
          <PktHeader
            fixed={false}
            scrollToHide={false}
            canChangeRepresentation={false}
            representing={state.representing}
            user={state.user}
            userMenu={state.userMenu}
            userMenuFooter={state.userMenuFooter}
            userOptions={state.userOptions}
            logOut={logOut}
            serviceName="Gravferdsetaten"
          />
        </div>

        <h3>Kan endre representasjon</h3>
        <div className="component__block-example">
          <PktHeader
            fixed={false}
            scrollToHide={false}
            canChangeRepresentation={true}
            representing={state.representing}
            user={state.user}
            userMenu={state.userMenu}
            userMenuFooter={state.userMenuFooter}
            userOptions={state.userOptions}
            changeRepresentation={changeRepresentation}
            logOut={logOut}
            serviceName="Gravferdsetaten"
          />
        </div>
      </section>{' '}
    </main>
  )
}
