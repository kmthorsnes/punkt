import ButtonSpec from 'componentSpecs/button.json'
import React, { useState } from 'react'

import { IPktButton, PktButton } from '@/components/button/Button'
import IButtonSpec from '@/interfaces/IButtonSpec'

export default function Button() {
  const buttonSpec = ButtonSpec as IButtonSpec
  const [specProps] = useState(buttonSpec.props)

  function buttonClick(name: string) {
    console.log(name)
  }

  return (
    <main className="page-main pkt-container pkt-container--laptop">
      <h1>Button</h1>
      {specProps.skin.map((skinType: IPktButton['skin'], index: number) => (
        <section className="component" key={`skin-${index}`}>
          <h2>Skin: {skinType}</h2>
          <div className="component__block-example">
            {specProps.size.map((sizeType: IPktButton['size'], i: number) => (
              <div key={`skin-${index}-${i}-variant`} className="component__example">
                {specProps.variant.map((variantType: IPktButton['variant'], j: number) => (
                  <PktButton
                    key={`skin-${index}-${i}-variant-${j}`}
                    size={sizeType}
                    skin={skinType}
                    variant={variantType}
                    onClick={() => buttonClick(variantType || 'default')}
                  >
                    {variantType}
                  </PktButton>
                ))}
              </div>
            ))}
          </div>

          <div className="component__block-example">
            {specProps.size.map((sizeType: IPktButton['size'], i: number) => (
              <div key={`size-${i}`} className="component__example">
                {specProps.variant.map((variantType: IPktButton['variant'], j: number) => (
                  <PktButton
                    key={`skin-${index}-${i}-variant-${j}-disabled`}
                    size={sizeType}
                    skin={skinType}
                    variant={variantType}
                    disabled
                    onClick={() => buttonClick(variantType || 'default')}
                  >
                    {variantType}
                  </PktButton>
                ))}
              </div>
            ))}
          </div>
          <div className="component__block-example">
            {specProps.size.map((sizeType: IPktButton['size'], i: number) => (
              <div key={`size-${i}`} className="component__example">
                {specProps.state.map((stateType: IPktButton['state'], j: number) => (
                  <PktButton
                    key={`skin-${index}-${i}-state-${j}`}
                    size={sizeType}
                    skin={skinType}
                    variant={specProps.variant[1]}
                    className={`pkt-btn--${stateType}`}
                    onClick={() => buttonClick(stateType || 'default')}
                  >
                    {stateType}
                  </PktButton>
                ))}
              </div>
            ))}
          </div>
        </section>
      ))}

      <section className="component">
        <h2>Colors</h2>
        <div className="component__block-example">
          {specProps.color.map((colorType, i) => (
            <div key={`color-${i}`}>
              <PktButton
                key={`color-${i}`}
                color={colorType}
                onClick={() => buttonClick(colorType)}
              >
                {colorType}
              </PktButton>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
