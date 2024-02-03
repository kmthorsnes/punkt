export default class PktTabs {
  /*
   * Punkt Tabs
   * Inspired by the tabs example in the ARIA Authoring Practices Guide from W3C
   * https://www.w3.org/WAI/ARIA/apg/patterns/tabs/
   *
   */
  constructor(tabListNode, panelNode = null) {
    this.tabs = Array.from(tabListNode.querySelectorAll('[role=tab]'))
    this.panels = panelNode
      ? Array.from(panelNode.querySelectorAll('[role=tabpanel]'))
      : []
    this.first = this.tabs[0]
    this.last = this.tabs[this.tabs.length - 1]
    this.current = this.first

    for (var i = 0; i < this.tabs.length; i++) {
      var tab = this.tabs[i]

      if (
        tab.getAttribute('aria-selected') === 'true' ||
        tab.classList.contains('active')
      ) {
        this.current = tab
      }
      tab.addEventListener('keydown', this.onKeydown.bind(this))
    }

    this.setActive(this.current)
  }

  setActive(current) {
    for (var i = 0; i < this.tabs.length; i++) {
      var tab = this.tabs[i]
      if (current === tab) {
        tab.setAttribute('aria-selected', 'true')
        tab.removeAttribute('tabindex')
        tab.classList.add('active')
        this.panels.length && this.panels[i].classList.remove('pkt-hide')
      } else {
        tab.setAttribute('aria-selected', 'false')
        tab.setAttribute('tabindex', '-1')
        tab.classList.remove('active')
        this.panels.length && this.panels[i].classList.add('pkt-hide')
      }
    }
  }

  setActiveByIndex(index) {
    this.setActive(this.tabs[index])
  }

  previous(current) {
    current !== this.first && this.tabs[this.tabs.indexOf(current) - 1].focus()
  }

  next(current) {
    current !== this.last && this.tabs[this.tabs.indexOf(current) + 1].focus()
  }

  onKeydown(event) {
    var target = event.currentTarget
    var hasInteracted = false

    switch (event.code) {
      case 'ArrowLeft':
        this.previous(target)
        hasInteracted = true
        break
      case 'ArrowRight':
        this.next(target)
        hasInteracted = true
        break
      case 'ArrowDown':
      case 'Space':
        target.click()
        hasInteracted = true
        break
      default:
        break
    }

    if (hasInteracted) {
      event.stopPropagation()
      event.preventDefault()
    }
  }
}
