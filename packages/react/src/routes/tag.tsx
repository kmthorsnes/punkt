import TagSpec from 'componentSpecs/tag.json'
import React, { useState } from 'react'

import { IPktTag } from '@/components/tag/Tag'
import ITagSpec from '@/interfaces/ITagSpec'

import { PktTag } from '..'


export default function Tag() {
    const tagSpec = TagSpec as ITagSpec
    const [specProps] = useState(tagSpec.props)

    return (

        <main className="page-main pkt-container">
            <h1>Tag</h1>
            {Array.isArray(specProps.skin.values) &&
                specProps.skin.values.map((skinType: IPktTag['skin'], index: number) => (
                    <section className="component" key={`skin-${index}`}>
                        <h2>Skin: {skinType}</h2>
                        {Array.isArray(specProps.size.values) && specProps.size.values.map((sizeType: IPktTag['size'], i: number) => (
                            <React.Fragment key={`size-${i}`} >

                                <PktTag
                                    key={`skin-${index}-${skinType}`}
                                    skin={skinType}
                                    size={sizeType}
                                >
                                    Test
                                </PktTag>
                            </React.Fragment>
                        ))}
                    </section>
                ))}

            <h1>Tag med close</h1>
            <section className="component">
                {Array.isArray(specProps.size.values) && specProps.size.values.map((sizeType: IPktTag['size'], i: number) => (

                    <PktTag
                        key={`${i}-${sizeType}`}
                        size={sizeType}
                        closeTag
                    >
                        Test
                    </PktTag>

                ))}
            </section>

            <h1>Tag med ikon</h1>
            <section className="component">
                {Array.isArray(specProps.size.values) && specProps.size.values.map((sizeType: IPktTag['size'], i: number) => (

                    <PktTag
                        key={`${i}-${sizeType}`}
                        size={sizeType}
                        iconName='edit'
                    >
                        Test
                    </PktTag>

                ))}
            </section>

            <h1>Tag med ikon og close</h1>
            <section className="component">
                {Array.isArray(specProps.size.values) && specProps.size.values.map((sizeType: IPktTag['size'], i: number) => (

                    <PktTag
                        key={`${i}-${sizeType}`}
                        size={sizeType}
                        iconName='edit'
                        closeTag
                    >
                        Test
                    </PktTag>

                ))}
            </section>

            <h1>Tag tekst style</h1>
            <section className="component">
                {Array.isArray(specProps.textStyle.values) && specProps.textStyle.values.map((textType: IPktTag['textStyle'], i: number) => (

                    <PktTag
                        key={`${i}-${textType}`}
                        textStyle={textType}
                    >
                        {textType}
                    </PktTag>

                ))}
            </section>

        </main >

    )
}
