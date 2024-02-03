import React, { ForwardedRef, forwardRef } from 'react';

import { PktIcon } from '../icon/Icon'

export interface IPktBackLink extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href?: string;
    text?: string;
    onClick?: () => void; // Custom navigation handler
    className?: string;
}


export const PktBackLink = forwardRef(
    (
        { href, text, onClick, className, ...props }: IPktBackLink,
        ref: ForwardedRef<HTMLAnchorElement>
    ) => {

        const classes = [
            className,
            'pkt-back-link',
        ].filter(Boolean)
            .join(' ')

        const handleClick = () => {
            if (onClick) {
                onClick();
            }
        };

        return (
            <nav ref={ref} className={classes} aria-label="Gå tilbake et steg">
                <a href={href || '/'} className="pkt-link pkt-link--icon-left" onClick={handleClick}  {...props}>
                    <PktIcon className='pkt-back-link__icon pkt-icon pkt-link__icon' name="chevron-thin-left" aria-hidden="true" />
                    <span className="pkt-back-link__text">{text || 'Forsiden'}</span>
                </a>
            </nav>
        );
    }
);

export default PktBackLink;
