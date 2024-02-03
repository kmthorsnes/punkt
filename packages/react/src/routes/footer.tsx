import React from 'react'

import { PktFooter, PktFooterSimple } from '..'

export default function Footer() {
  const links = [
    {
      href: 'https://www.example.com',
      text: 'Test ekstern lenke',
      external: true,
      openInNewTab: true
    },
    {
      href: '#',
      text: 'Testlenke',

    },
    {
      href: '#',
      text: 'Internal link',
    },
  ];

  const columnOne = {
    title: 'Kolonnetittel 1',
    text: 'Her kan du skrive en lengre tekst som beskriver løsningen eller tjenesten om ønskelig.',
    links: [
      { text: 'Test ekstern lenke', href: 'https://www.example.com', external: true, openInNewTab: true },
      { text: 'Testlenke', href: '#' },
    ],
  }

  const columnTwo = {
    title: 'Kolonnetittel 2',
    links: [
      { text: 'Test ekstern lenke', href: 'https://www.example.com', external: true, openInNewTab: true },
      { text: 'Testlenke', href: '#' },
    ],
  }

  const socialLinksAll = [
    { href: 'https://www.example.com', language: 'Engelsk', openInNewTab: true },
    { href: '#', iconName: 'facebook' },
    { href: '#', iconName: 'twitter' },
  ]

  const socialLinksLang = [
    { href: '#', language: 'Engelsk' }
  ]

  return (
    <main className="page-main">
      <h1>Footer</h1>
      <section className="component">
        <h2>Footer - Simple</h2>
        <PktFooterSimple links={links} />
      </section>
      <section className="component">
        <h2>Footer - Simple default</h2>
        <PktFooterSimple />
      </section>
      <section className="component">
        <h2>Footer - Normal</h2>
        <PktFooter columnOne={columnOne} columnTwo={columnTwo} />
      </section>
      <section className="component">
        <h2>Footer Normal - Med språklenke</h2>
        <PktFooter columnOne={columnOne} columnTwo={columnTwo} socialLinks={socialLinksLang} />
      </section>
      <section className="component">
        <h2>Footer Normal - Med språklenke og sosiale medierikoner</h2>
        <PktFooter columnOne={columnOne} columnTwo={columnTwo} socialLinks={socialLinksAll} />
      </section>
    </main>
  )
}
