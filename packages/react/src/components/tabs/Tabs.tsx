'use client'

import React, { forwardRef, Ref, useRef, useEffect, KeyboardEvent, Fragment } from 'react'
import { PktIcon } from '../icon/Icon'
import { PktTag } from '../tag/Tag'

export type TSkin = 'blue' | 'green' | 'red' | 'beige' | 'yellow' | 'grey' | 'blue-light'

export interface Tab {
  text: string
  href?: string
  action?: (index: number) => void
  icon?: string
  controls?: string
  tag?: {
    text: string
    skin: TSkin | undefined
  }
  active?: boolean
}

export interface ITabs {
  arrowNav?: boolean
  tabs: Tab[]
  onTabSelected?: (index: number) => void
}

export const PktTabs = forwardRef(
  ({ arrowNav = true, tabs, onTabSelected }: ITabs, ref: Ref<HTMLDivElement>): JSX.Element => {
    const tabRefs = useRef<Array<HTMLAnchorElement | HTMLButtonElement | null>>([])
    useEffect(() => {
      tabRefs.current = tabRefs.current.slice(0, tabs.length)
    }, [tabs])
    const selectTab = (index: number, tab: Tab): void => {
      if (tab.action) tab.action(index)
      if (onTabSelected) onTabSelected(index)
    }
    const handleKeyPress = (index: number, event: KeyboardEvent) => {
      if (arrowNav) {
        if (event.code === 'ArrowLeft' && index !== 0) {
          tabRefs.current[index - 1]?.focus()
        }
        if (event.code === 'ArrowRight' && index < tabs.length - 1) {
          tabRefs.current[index + 1]?.focus()
        }
        if (event.code === 'ArrowDown' || event.code === 'Space') {
          selectTab(index, tabs[index])
        }
      }
    }
    return (
      <div className="pkt-tabs" ref={ref}>
        <div className="pkt-tabs__list" role={arrowNav ? 'tablist' : 'navigation'}>
          {tabs.map((tab, index) => (
            <Fragment key={index}>
              {tab.href ? (
                <a
                  aria-selected={!!tab.active}
                  role={arrowNav ? 'tab' : undefined}
                  href={tab.href}
                  aria-controls={tab.controls}
                  className={`pkt-tabs__link ${tab.active ? 'active' : ''}`}
                  onKeyUp={(event) => handleKeyPress(index, event)}
                  onClick={() => selectTab(index, tab)}
                  tabIndex={tab.active || !arrowNav ? undefined : -1}
                  ref={(el) => {
                    tabRefs.current[index] = el
                  }}
                >
                  {tab.icon && <PktIcon name={tab.icon} className="pkt-icon--small" />}
                  {tab.text}
                  {tab.tag && (
                    <PktTag skin={tab.tag.skin} size="small">
                      {tab.tag.text}
                    </PktTag>
                  )}
                </a>
              ) : (
                <button
                  aria-selected={!!tab.active}
                  role={arrowNav ? 'tab' : undefined}
                  type="button"
                  aria-controls={tab.controls}
                  className={`pkt-tabs__button pkt-link-button ${tab.active ? 'active' : ''}`}
                  key={'b-' + index}
                  onKeyUp={(event) => handleKeyPress(index, event)}
                  onClick={() => selectTab(index, tab)}
                  tabIndex={tab.active || !arrowNav ? undefined : -1}
                  ref={(el) => {
                    tabRefs.current[index] = el
                  }}
                >
                  {tab.icon && <PktIcon name={tab.icon} className="pkt-icon--small" />}
                  {tab.text}
                  {tab.tag && (
                    <PktTag skin={tab.tag.skin} size="small">
                      {tab.tag.text}
                    </PktTag>
                  )}
                </button>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    )
  },
)
