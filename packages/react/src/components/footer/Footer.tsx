import React from 'react'

import { PktIcon } from '../icon/Icon'

interface Link {
  href: string
  text: string
  external?: boolean
  openInNewTab?: boolean
}

interface Column {
  title: string
  links?: Link[]
  text?: string
}

interface SocialLink {
  href: string
  iconName?: string
  language?: string
  openInNewTab?: boolean
}

export interface IPktFooter extends React.HTMLAttributes<HTMLDivElement> {
  columnOne: Column
  columnTwo: Column
  socialLinks?: SocialLink[]
  personvernOgInfoLink?: string
  tilgjengelighetLink?: string
}

export const PktFooter: React.FC<IPktFooter> = ({ columnOne, columnTwo, socialLinks, className, personvernOgInfoLink = "https://www.oslo.kommune.no/personvern-og-informasjonskapsler/", tilgjengelighetLink = "https://www.oslo.kommune.no/tilgjengelighet/"
}) => {
  const classNames = [className, 'pkt-footer'].filter(Boolean).join(' ')
  return (
    <footer className={classNames} data-mode="dark">
      <div className="pkt-footer__container">
        <div className="pkt-grid pkt-grid--rowgap-size-32 pkt-grid--gap-size-16">
          <div className="pkt-footer__column pkt-cell pkt-cell--span12 pkt-cell--span4-laptop-up">
            <h2 className="pkt-footer__title">{columnOne.title}</h2>
            <ul className="pkt-footer__list">
              {columnOne.text && <li className="pkt-footer__text">{columnOne.text}</li>}
              {columnOne.links?.map((link, index) => (
                <li className="pkt-footer__list-item" key={`links-${index}`}>
                  <a
                    className={`pkt-footer__link ${link.external ? 'pkt-link--external' : ''}`}
                    href={link.href}
                    target={link.openInNewTab ? '_blank' : '_self'}
                    rel={link.openInNewTab ? 'noopener noreferrer' : undefined}
                  >
                    <PktIcon className="pkt-footer__link-icon" name="chevron-right" />
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="pkt-footer__column pkt-cell pkt-cell--span12 pkt-cell--span4-laptop-up">
            <h2 className="pkt-footer__title">{columnTwo.title}</h2>
            <ul className="pkt-footer__list">
              {columnTwo.text && <li className="pkt-footer__text">{columnTwo.text}</li>}
              {columnTwo.links?.map((link, index) => (
                <li className="pkt-footer__list-item" key={`links-${index}`}>
                  <a
                    className={`pkt-footer__link ${link.external ? 'pkt-link--external' : ''}`}
                    href={link.href}
                    target={link.openInNewTab ? '_blank' : '_self'}
                    rel={link.openInNewTab ? 'noopener noreferrer' : undefined}
                  >
                    <PktIcon className="pkt-footer__link-icon" name="chevron-right" />
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="pkt-footer__column pkt-cell pkt-cell--span12 pkt-cell--span4-laptop-up">
            <h2 className="pkt-footer__title">Om nettstedet</h2>
            <ul className="pkt-footer__list">
              <li className="pkt-footer__list-item">
                <a
                  className="pkt-footer__link"
                  href={personvernOgInfoLink}
                >
                  <PktIcon className="pkt-footer__link-icon" name="chevron-right" />
                  Personvern og informasjonskapsler
                </a>
              </li>
              <li className="pkt-footer__list-item">
                <a className="pkt-footer__link" href={tilgjengelighetLink}>
                  <PktIcon className="pkt-footer__link-icon" name="chevron-right" />
                  Tilgjengelighet
                </a>
              </li>
            </ul>
          </div>
        </div>
        {socialLinks && (
          <div className="pkt-footer__social" aria-label="standard lenker">
            <div className="pkt-footer__social-languages">
              {socialLinks
                .filter((link) => link.language)
                .map((link, index) => (
                  <div
                    key={`sociallinks-language-${index}`}
                    className="pkt-footer__social-language"
                  >
                    <a
                      href={link.href}
                      aria-label={`til ${link.language} versjon av nettsiden`}
                      target={link.openInNewTab ? '_blank' : '_self'}
                      rel={link.openInNewTab ? 'noopener noreferrer' : undefined}
                    >
                      {link.language}
                    </a>
                  </div>
                ))}
            </div>
            <div className="pkt-footer__social-icons">
              {socialLinks
                .filter((link) => link.iconName)
                .map((link, index) => (
                  <React.Fragment key={`sociallinks-${index}`}>
                    <a
                      href={link.href}
                      aria-label={`til ${link.iconName}`}
                      className="pkt-footer__social-icon-link"
                      target={link.openInNewTab ? '_blank' : '_self'}
                      rel={link.openInNewTab ? 'noopener noreferrer' : undefined}
                    >
                      <PktIcon className="pkt-footer__social-icon" name={link.iconName} />
                    </a>
                  </React.Fragment>
                ))}
            </div>
          </div>
        )}
      </div>
    </footer>
  )
}
