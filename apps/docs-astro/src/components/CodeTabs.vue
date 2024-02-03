<template>
  <div class="code-tabs">
    <div class="pkt-tabs">
      <div class="code-tabs__tab-area pkt-tabs__list" role="tablist">
        <button
          role="tab"
          class="code-tabs__tab-button pkt-tabs__button pkt-link-button active"
          @click="openCode($event, 'web')"
          @keyup="handleKeyPress(index, $event)"
        >
          Web
        </button>
        <button
          role="tab"
          class="code-tabs__tab-button pkt-tabs__button pkt-link-button"
          tabindex="-1"
          @click="openCode($event, 'vue')"
          @keyup="handleKeyPress(index, $event)"
        >
          Vue
        </button>
        <button
          role="tab"
          class="code-tabs__tab-button pkt-tabs__button pkt-link-button"
          tabindex="-1"
          @click="openCode($event, 'react')"
          @keyup="handleKeyPress(index, $event)"
        >
          React
        </button>
      </div>
    </div>
    <div class="code-tabs__content-area pkt-tabpanels">
      <slot />

      <div class="code-tabs_toolbar pkt-txt-end">
        <button
          class="code-tabs__copy-button pkt-btn pkt-btn--tertiary pkt-btn--icon-left"
          @click="copyCode($event)"
          aria-label="copy"
        >
          <svg class="pkt-btn__icon">
            <use href="#copy"></use>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CodeTabs",
  methods: {
    openCode(evt, clickedTab) {
      // Find the tab component itself
      const tabComponent = evt.target.parentElement.parentElement.parentElement;

      // Find the current active tab and content
      const activeTab = tabComponent.querySelector(
        ".code-tabs__tab-button.active"
      );
      const activeContent =
        tabComponent.querySelector(".tabcontent.active") ||
        tabComponent.querySelector(".tabcontent:first-of-type");

      // Remove active class from current active tab and content
      if (activeTab) {
        activeTab.classList.remove("active");
        activeTab.setAttribute("tabindex", "-1");
      }
      if (activeContent) {
        activeContent.classList.remove("active");
        // using :first-of-type is difficult to remove, so this is a workaround
        activeContent.style.display = "none";
      }

      // Add active class to clicked tab and content
      evt.currentTarget.classList.add("active");
      evt.currentTarget.removeAttribute("tabindex");
      const newActiveContent = tabComponent.querySelector(
        `.tabcontent.${clickedTab}`
      );
      if (newActiveContent) {
        newActiveContent.classList.add("active");

        // using :first-of-type is difficult to remove, so this is a workaround
        newActiveContent.style.display = "block";
      }
    },
    copyCode(event) {
      // Find the content part of the current tab component
      const tabContent =
        event.currentTarget.parentElement.parentElement.parentElement;
      const activeContent =
        tabContent.querySelector(".tabcontent.active") ||
        tabContent.querySelector(".tabcontent:first-of-type");
      const copyText = activeContent.querySelector("code").innerText;

      const textArea = document.createElement("textarea");
      textArea.value = copyText;
      textArea.setAttribute("readonly", "");
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      textArea.setSelectionRange(0, 99999);
      document.body.removeChild(textArea);
    },
    handleKeyPress(index, event) {
      if (event.code === "ArrowLeft" && event.currentTarget.previousSibling) {
        event.currentTarget.previousSibling.focus();
      }
      if (event.code === "ArrowRight" && event.currentTarget.nextSibling) {
        event.currentTarget.nextSibling.focus();
      }
      if (event.code === "ArrowDown" || event.code === "Space") {
        event.currentTarget.click();
      }
    },
  },
};
</script>

<style lang="scss">
@use "sass:map";
@use "@pkt/scss/abstracts/variables";
@use "@pkt/scss/abstracts/mixins/breakpoints" as *;
@use "@pkt/scss/abstracts/mixins/typography";
/* Style the tab */

.code-tabs {
  background-color: var(--pkt-color-brand-neutrals-200);

  .pkt-tabs {
    --pkt-tabs-bg: var(--pkt-color-brand-neutrals-200);
  }

  &__content-area {
    .tabcontent {
      font-size: map.get(variables.$font-size, "size-14");
      display: none;
      border-top: none;

      &:first-of-type {
        display: block;
      }

      &.active {
        display: block;
      }
    }
  }

  &__copy-button {
    margin: 0 1rem 1rem 1rem;
    border: 0;
    padding: 0;
  }

  .pkt-hr {
    margin: 0 1rem;
  }
}
</style>
