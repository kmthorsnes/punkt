import React from 'react';

import { PktIcon } from '../icon/Icon';


export interface IPktFooterSimple extends React.HTMLAttributes<HTMLDivElement> {
  links?: Array<{
    href: string;
    text: string;
    external?: boolean;
    openInNewTab?: boolean;
  }>;
  personvernOgInfoLink?: string
  tilgjengelighetLink?: string
}

export const PktFooterSimple: React.FC<IPktFooterSimple> = ({
  links = [],
  personvernOgInfoLink = "https://www.oslo.kommune.no/personvern-og-informasjonskapsler/",
  tilgjengelighetLink = "https://www.oslo.kommune.no/tilgjengelighet/",
  className
}) => {
  const classNames = [className, 'pkt-footer-simple'].filter(Boolean).join(' ')
  return (
    <footer className={classNames} data-mode="dark">
      <div className="pkt-footer-simple__container">
        <ul className="pkt-footer-simple__list">
          {links.map((link, index) => (
            <li className="pkt-footer-simple__list-item" key={index}>
              <a
                className={`pkt-footer-simple__link ${link.external ? ' pkt-link--external' : ''}`}
                href={link.href}
                target={link.openInNewTab ? '_blank' : '_self'}
                rel={link.openInNewTab ? 'noopener noreferrer' : undefined}
              >
                <PktIcon
                  className="pkt-footer-simple__link-icon"
                  name="chevron-right"
                />
                {link.text}
              </a>
            </li>
          ))}
          <li className="pkt-footer-simple__list-item">
            <a className="pkt-footer-simple__link" href={personvernOgInfoLink}>
              <PktIcon className="pkt-footer-simple__link-icon" name="chevron-right"></PktIcon>
              Personvern og informasjonskapsler
            </a>
          </li>
          <li className="pkt-footer-simple__list-item">
            <a className="pkt-footer-simple__link" href={tilgjengelighetLink}>
              <PktIcon className="pkt-footer-simple__link-icon" name="chevron-right"></PktIcon>
              Tilgjengelighet
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
