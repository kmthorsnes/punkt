import TabsSpec from 'componentSpecs/tabs.json'
import React, { useState } from 'react'

import { PktTabs } from '..'
import { TSkin, Tab } from '@/components/tabs/Tabs'

export default function Tag() {
  const [tagSpecs] = useState(TabsSpec.props.tabs.items.properties.tag.properties)
  const [active, setActive] = useState(0)
  const [visibleContent, setVisibleContent] = useState(0)
  const [visibleContent2, setVisibleContent2] = useState(0)

  const content = [
    'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.',
    'He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.',
    'The bedding was hardly able to cover it and seemed ready to slide off any moment.',
    'His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked.',
    '"What‘s happened to me?" he thought. It wasn‘t a dream.',
    'His room, a proper human room although a little too small, lay peacefully between its four familiar walls.',
    'A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine,',
  ]

  function logEmit(val: number) {
    console.log('function triggered ' + val)
  }

  function logOut() {
    console.log('logged out')
  }

  function changeActive(val: number) {
    console.log('changed active to ' + val)
    setActive(val)
  }

  function tabsLinks(): Tab[] {
    const tabs: Tab[] = []
    for (let i = 0; i < tagSpecs.skin.values.length; i++) {
      tabs.push({
        text: `Tab ${i + 1}`,
        href: `#${i}`,
        icon: 'user',
        tag: {
          text: 'tag',
          skin: tagSpecs.skin.values[i] as TSkin,
        },
        active: i === visibleContent,
      })
    }
    return tabs
  }
  function tabsButtons(): Tab[] {
    const tabs: Tab[] = []
    for (let i = 0; i < tagSpecs.skin.values.length; i++) {
      tabs.push({
        text: `Tab ${i + 1}`,
        action: i === 6 ? logOut : logEmit,
        icon: 'user',
        tag: {
          text: 'tag',
          skin: tagSpecs.skin.values[i] as TSkin,
        },
        active: i === active,
      })
    }
    return tabs
  }

  return (
    <main className="page-main pkt-container">
      <h1>Tabs</h1>
      <section className="component">
        <h2>Med lenker</h2>
        <PktTabs tabs={tabsLinks()} onTabSelected={setVisibleContent} />
        <div className="tab-content p-size-20">{content[visibleContent]}</div>
      </section>

      <section className="component">
        <h2>Som knapper</h2>
        <PktTabs tabs={tabsButtons()} onTabSelected={changeActive} />
      </section>

      <section className="component">
        <h2>Som navigasjon (uten piltastnavigasjon)</h2>
        <PktTabs tabs={tabsLinks()} arrowNav={false} onTabSelected={setVisibleContent2} />
        <div className="tab-content p-size-20">{content[visibleContent2]}</div>
      </section>
    </main>
  )
}
