import React, { ForwardedRef, forwardRef } from 'react';
import { Link } from 'react-router-dom';

import PktIcon from '../icon/Icon'; // Import your Icon component

export interface IBreadcrumbs {
    text: string;
    href: string;
}

export interface IPktBreadcrumbs extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    breadcrumbs: IBreadcrumbs[];
    navigationType?: 'router' | 'anchor';
}


export const PktBreadcrumbs = forwardRef(
    ({ breadcrumbs, navigationType, className, ...props }: IPktBreadcrumbs, ref: ForwardedRef<HTMLAnchorElement>) => {

        // Slice the breadcrumb to maximum links
        const slicedBreadcrumbs = breadcrumbs.slice(0, 4);
        // Define the backLink function
        const backLink = slicedBreadcrumbs[slicedBreadcrumbs.length - 2];

        // Define the classes
        const classes = [
            className,
            'pkt-breadcrumbs',
        ].filter(Boolean)
            .join(' ')


        // If navigationType is router, then use react-router Link, else use anchor tag
        // Mobile and desktop have different markup
        return (
            <nav ref={ref} aria-label="brødsmulemeny" className={classes}>

                <ol className="pkt-breadcrumbs__list pkt-breadcrumbs--desktop">
                    {slicedBreadcrumbs.map((item, index) => (
                        <li
                            key={`breadcrumb-${index}`}
                            className="pkt-breadcrumbs__item"
                        >

                            {index === slicedBreadcrumbs.length - 1 ? (
                                <span className="pkt-breadcrumbs__label" aria-current="true">
                                    <span className="pkt-breadcrumbs__text">{item.text}</span>
                                </span>
                            ) : (
                                navigationType === 'router' ? (
                                    <Link
                                        to={item.href}
                                        className="pkt-link pkt-link--icon-right pkt-breadcrumbs__label pkt-breadcrumbs__link"
                                        {...props}
                                    >
                                        <PktIcon
                                            className="pkt-icon pkt-breadcrumbs__icon pkt-link__icon"
                                            name="chevron-thin-right"
                                        />
                                        <span className="pkt-breadcrumbs__text">{item.text}</span>
                                    </Link>

                                ) : (
                                    <a
                                        href={item.href}
                                        className="pkt-link pkt-link--icon-right pkt-breadcrumbs__label pkt-breadcrumbs__link"
                                        {...props}
                                    >
                                        <PktIcon
                                            className="pkt-icon pkt-breadcrumbs__icon pkt-link__icon"
                                            name="chevron-thin-right"
                                        />
                                        <span className="pkt-breadcrumbs__text">{item.text}</span>
                                    </a>
                                )

                            )}
                        </li>
                    ))}
                </ol>

                {
                    navigationType === 'router' ? (
                        <Link
                            to={backLink.href}
                            className="pkt-link pkt-link--icon-left pkt-breadcrumbs--mobile"
                            {...props}
                        >
                            <PktIcon
                                className="pkt-back-link__icon pkt-icon pkt-link__icon"
                                name="chevron-thin-left"
                            />
                            <span className="pkt-breadcrumbs__text">{backLink.text}</span>
                        </Link>
                    ) : (
                        <a
                            href={backLink.href}
                            className="pkt-link pkt-link--icon-left pkt-breadcrumbs--mobile"
                            {...props}
                        >
                            <PktIcon
                                className="pkt-back-link__icon pkt-icon pkt-link__icon"
                                name="chevron-thin-left"
                            />
                            <span className="pkt-breadcrumbs__text">{backLink.text}</span>
                        </a>
                    )
                }
            </nav>
        );
    }
);

export default PktBreadcrumbs;
