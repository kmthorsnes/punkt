import { PktBreadcrumbs } from '..'

export default function Breadcrumb() {
    const breadcrumbs = [
        {
            href: '#1',
            text: 'Nivå 1',
        },
        {
            href: '#2',
            text: 'Nivå 2',

        },
        {
            href: '#3',
            text: 'Nivå 3',
        },
        {
            href: '#4',
            text: 'Nivå 4',
        },
        {
            href: '#ikkelov',
            text: 'Ikke lov',
        },
    ];

    return (
        <>
            <main className="page-main pkt-container">
                <h1>Backlink</h1>

                <section className="component">
                    <PktBreadcrumbs breadcrumbs={breadcrumbs} />
                </section>
            </main>
        </>
    )
}
