import LinkCardSpec from 'componentSpecs/linkcard.json'
import React, { useState } from 'react'

import { IPktLinkCard } from '@/components/linkcard/LinkCard'
import ILinkCardSpec from '@/interfaces/ILinkCardSpec'

import { PktLinkCard } from '..'

export default function LinkCard() {
  const linkcardSpec = LinkCardSpec as ILinkCardSpec
  const [specProps] = useState(linkcardSpec.props)

  return (
    <main className="page-main pkt-container">
      <h1>Linkcard</h1>
      {specProps.skin.map((skinType: IPktLinkCard['skin'], index: number) => (
        <section className="component" key={`skin-${index}`}>
          <h2>Skin: {skinType}</h2>
          <div>
            <PktLinkCard title={skinType} key={`skin-${index}-${skinType}`} skin={skinType} >
              Skriv en informerende tekst om ønskelig tema her. Legg til knapper eller bilder om du
              ønsker
            </PktLinkCard>
          </div>
        </section>
      ))}
      <PktLinkCard title="Åpne link i ny fane" key="openInNewTab" href="https://www.example.com" openInNewTab external>
        Skriv en informerende tekst om ønskelig tema her. Legg til knapper eller bilder om du
        ønsker
      </PktLinkCard>
    </main>
  )
}
