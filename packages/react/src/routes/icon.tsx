import React from 'react'

import { PktIcon } from "@/components/icon/Icon";
import { PktIconContext } from "@/components/icon/IconContext";

export default function Input() {

  const grumpyCatSvg = `
               <svg width="200" height="80" viewBox="0 0 240 80" xmlns="http://www.w3.org/2000/svg">
                 <text x="20" y="35">My</text>
                 <text x="40" y="35">cat</text>
                 <text x="55" y="55">is</text>
                 <text x="65" y="55">Grumpy!</text>
               </svg>`;

  return (
    <>
      <main className="page-main pkt-container">
        <h1>Icon</h1>

        <section className="component">
          <h2>Ikon hentet fra CDN</h2>
          <PktIcon name={"arrow"}/>
        </section>
        <section className="component">
          <h2>Ikon hentet fra andre steder</h2>
          <PktIconContext.Provider value={{
            fetchIcon: (iconName: string) => {
              switch (iconName) {
                case 'grumpy-cat':
                  return Promise.resolve(grumpyCatSvg);
                default:
                  return Promise.reject();
              }
            }
          }
          }>
            < PktIcon name={"grumpy-cat"}/>
          </PktIconContext.Provider>
        </section>
      </main>
    </>
  )
}
