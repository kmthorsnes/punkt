import MessageboxSpec from 'componentSpecs/messagebox.json'
import React, { useState } from 'react'

import { IPktMessagebox } from '@/components/messagebox/Messagebox'
import IMessageboxSpec from '@/interfaces/IMessageboxSpec'

import { PktMessagebox } from '..'

export default function Messagebox() {
  const messageboxSpec = MessageboxSpec as IMessageboxSpec
  const [specProps] = useState(messageboxSpec.props)

  return (
    <main className="page-main pkt-container">
      <h1>Messagebox</h1>
      <section className="component" key="standard">
        <h2>Standard</h2>
        {specProps.skin.map((skinType: IPktMessagebox['skin'], index: number) => (
          <>
            <div>
              <PktMessagebox title={skinType} key={`skin-${index}-${skinType}`} skin={skinType}>
                Skriv en informerende tekst om ønskelig tema her. Legg til knapper eller bilder om
                du ønsker
                <ul>
                  <li>Listeelement 1</li>
                  <li>Listeelement 2</li>
                  <li>Listeelement 3</li>
                </ul>
              </PktMessagebox>
              <br />
            </div>
          </>
        ))}
      </section>
      <section className="component" key="kompakt">
        <h2>Kompakt</h2>
        {specProps.skin.map((skinType: IPktMessagebox['skin'], index: number) => (
          <>
            <div>
              <PktMessagebox
                title={skinType}
                key={`skin-${index}-${skinType}`}
                skin={skinType}
                compact
              >
                Skriv en informerende tekst om ønskelig tema her. Legg til knapper eller bilder om
                du ønsker
                <ul>
                  <li>Listeelement 1</li>
                  <li>Listeelement 2</li>
                  <li>Listeelement 3</li>
                </ul>
              </PktMessagebox>
              <br />
            </div>
          </>
        ))}
      </section>
    </main>
  )
}
