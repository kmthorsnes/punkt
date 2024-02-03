import AlertSpec from 'componentSpecs/alert.json'
import React, { useState } from 'react'

import { IPktAlert } from '@/components/alert/Alert'
import IAlertSpec from '@/interfaces/IAlertSpec'

import { PktAlert } from '..'

export default function Alert() {
  const alertSpec = AlertSpec as IAlertSpec
  const [specProps] = useState(alertSpec.props)

  const onCloseHandler = (message: string) => {
    return () => {
      console.log(`Closing alert with message: ${message}`)
    }
  }

  return (
    <main className="page-main pkt-container">
      <h1>Alert kort melding</h1>
      {specProps.skin.map((skinType: IPktAlert['skin'], index: number) => (
        <section className="component" key={`skin-${index}`}>
          <h2>Skin: {skinType}</h2>
          <div>
            <PktAlert key={`skin-${index}-${skinType}`} skin={skinType}>
              {skinType}
            </PktAlert>
            <br></br>
            <PktAlert
              key={`skin-close-${index}-${skinType}`}
              skin={skinType}
              closeAlert={true}
              onClose={onCloseHandler('Test onClose')}
            >
              {skinType}
            </PktAlert>
          </div>
        </section>
      ))}

      <h1>Alert med tittel</h1>
      {specProps.skin.map((skinType: IPktAlert['skin'], index: number) => (
        <section className="component" key={`skin-${index}`}>
          <h2>Skin: {skinType}</h2>
          <div>
            <PktAlert title="Med title" key={`skin-title-${index}`} skin={skinType}>
              Bruk dette tekstfeltet til å beskrive hva varslingen handler om. Du kan bruke så mange
              linjer du har behov for, men prøv likevel å være kort og konsis.
            </PktAlert>
            <br></br>
            <PktAlert
              title="Med date og close"
              date="04.02.2022"
              key={`skin-date-${index}-${skinType}`}
              skin={skinType}
              closeAlert={true}
              onClose={onCloseHandler('Test onClose')}
            >
              <p>
                Bruk dette tekstfeltet til å beskrive hva varslingen handler om. Du kan bruke så
                mange linjer du har behov for, men prøv likevel å være kort og konsis.
              </p>
              <p>
                Bruk dette tekstfeltet til å beskrive hva varslingen handler om. Du kan bruke så
                mange linjer du har behov for, men prøv likevel å være kort og konsis.
              </p>
            </PktAlert>
          </div>
        </section>
      ))}
    </main>
  )
}
