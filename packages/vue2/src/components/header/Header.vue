<template>
  <header
    id="pkt-header"
    aria-label="Topp"
    :class="{
      'pkt-header': true,
      'pkt-header--fixed': fixed,
      'pkt-header--scroll-to-hide': scrollToHide,
      'pkt-header--hidden': hidden,
    }"
  >
    <div class="pkt-header__logo">
      <template v-if="typeof logoLink === 'string'">
        <a aria-label="Tilbake til forside" class="pkt-header__logo-link" :href="logoLink">
          <PktIcon
            name="oslologo"
            class="pkt-header__logo-svg"
            aria-hidden="true"
            path="https://punkt-cdn.oslo.kommune.no/latest/logos/"
          ></PktIcon>
        </a>
      </template>
      <template v-else>
        <button
          aria-label="Tilbake til forside"
          class="pkt-link-button pkt-link pkt-header__logo-link"
          @click="logoLink"
        >
          <PktIcon
            name="oslologo"
            class="pkt-header__logo-svg"
            aria-hidden="true"
            path="https://punkt-cdn.oslo.kommune.no/latest/logos/"
          ></PktIcon>
        </button>
      </template>
      <span class="pkt-header__logo-service" v-if="serviceName">{{ serviceName }}</span>
    </div>
    <nav class="pkt-header__actions">
      <ul class="pkt-header__actions-row">
        <li v-if="showMenuButton">
          <PktButton
            class="pkt-header__menu-btn"
            skin="secondary"
            variant="icon-right"
            iconName="menu"
            @onClick="$emit('openMenu')"
            >Meny</PktButton
          >
        </li>
        <li
          v-if="user || representing"
          class="pkt-header--has-dropdown"
          :class="{ 'pkt-header--open-dropdown': userMenuOpen }"
          ref="userMenu"
        >
          <button
            class="pkt-header__user-btn pkt-btn pkt-btn--secondary pkt-btn--icons-right-and-left"
            type="button"
            aria-controls="pktUserDropdown"
            :aria-expanded="userMenuOpen"
            @click="openUserMenu"
          >
            <PktIcon name="user" class="pkt-btn__icon" />
            <span class="pkt-header__user-fullname pkt-btn__text" v-if="representing?.name || user?.name">{{
              representing?.name || user?.name
            }}</span>
            <span class="pkt-header__user-shortname pkt-btn__text" v-if="representing?.shortname || user?.shortname">{{
              representing?.shortname || user?.shortname
            }}</span>
            <PktIcon name="chevron-thin-down" class="pkt-btn--closed" />
            <PktIcon name="chevron-thin-up" class="pkt-btn--open" />
          </button>
          <ul id="pktUserDropdown" class="pkt-header__dropdown pkt-user-menu">
            <li v-if="user">
              <div class="pkt-user-menu__label">Pålogget som</div>
              <div class="pkt-user-menu__name">{{ user.name }}</div>
              <div class="pkt-user-menu__last-logged-in" v-if="user.lastLoggedIn">
                Sist pålogget: <time>{{ lastLoggedIn }}</time>
              </div>
            </li>
            <li v-if="userMenu">
              <ul class="pkt-list">
                <li v-for="(item, index) in userMenu" :key="`userMenu-${index}`">
                  <template v-if="typeof item.target === 'string'">
                    <a :href="item.target" class="pkt-link">
                      <PktIcon v-if="item.iconName" :name="item.iconName" class="pkt-link__icon" />
                      {{ item.title }}
                    </a>
                  </template>
                  <template v-else>
                    <button class="pkt-link-button pkt-link" @click="item.target">
                      <PktIcon v-if="item.iconName" :name="item.iconName" class="pkt-link__icon" />
                      {{ item.title }}
                    </button>
                  </template>
                </li>
              </ul>
            </li>
            <li v-if="representing || canChangeRepresentation">
              <template v-if="representing">
                <div class="pkt-user-menu__label">Representerer</div>
                <div class="pkt-user-menu__name">{{ representing.name }}</div>
                <div class="pkt-user-menu__org-number" v-if="representing.orgNumber">
                  Org.nr. {{ representing.orgNumber }}
                </div>
              </template>
              <ul class="pkt-list mt-size-16">
                <li>
                  <button
                    class="pkt-link-button pkt-link"
                    v-if="canChangeRepresentation"
                    @click="$emit('changeRepresentation')"
                  >
                    <PktIcon name="cogwheel" class="pkt-link__icon" />
                    Endre organisasjon
                  </button>
                </li>
              </ul>
            </li>
            <li>
              <ul class="pkt-list" v-if="userOptions || !showLogOutButton">
                <li v-for="(item, index) in userOptions" :key="`userOptions-${index}`">
                  <template v-if="typeof item.target === 'string'">
                    <a :href="item.target" class="pkt-link">
                      <PktIcon v-if="item.iconName" :name="item.iconName" class="pkt-link__icon" />
                      {{ item.title }}
                    </a>
                  </template>
                  <template v-else>
                    <button class="pkt-link-button pkt-link" @click="$emit('logOut')">
                      <PktIcon v-if="item.iconName" :name="item.iconName" class="pkt-link__icon" />
                      {{ item.title }}
                    </button>
                  </template>
                </li>
                <li v-if="!showLogOutButton">
                  <button class="pkt-link-button pkt-link" @click="$emit('logOut')">
                    <PktIcon name="exit" class="pkt-link__icon" />
                    Logg ut
                  </button>
                </li>
              </ul>
            </li>
            <li class="footer" v-if="userMenuFooter">
              <ul class="pkt-list-horizontal bordered">
                <li v-for="(item, index) in userMenuFooter" :key="`userMenuFooter-${index}`">
                  <template v-if="typeof item.target === 'string'">
                    <a :href="item.target" class="pkt-link">{{ item.title }}</a>
                  </template>
                  <template v-else>
                    <button class="pkt-link-button pkt-link" @click="item.target">{{ item.title }}</button>
                  </template>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li v-if="showLogOutButton">
          <PktButton
            class="pkt-header__user-btn pkt-header__user-btn-logout"
            iconName="exit"
            @onClick="$emit('logOut')"
            skin="secondary"
            variant="icon-right"
          >
            Logg ut
          </PktButton>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import PktIcon from '../icon/Icon.vue'
import PktButton from '../button/Button.vue'

export default {
  name: 'PktHeader',
  components: {
    PktIcon,
    PktButton,
  },
  data() {
    return {
      hidden: false,
      userMenuOpen: false,
      userMenuClickInside: false,
      lastScrollPosition: 0,
    }
  },
  props: {
    logoLink: {
      type: [String, Function],
      required: false,
      default: 'https://www.oslo.kommune.no/',
    },
    serviceName: {
      type: String,
      required: false,
    },
    fixed: {
      type: Boolean,
      default: true,
    },
    scrollToHide: {
      type: Boolean,
      default: true,
    },
    // { name: String, shortname: String, lastLoggedIn: String|Date, }
    user: {
      type: Object,
      required: false,
    },
    // [{ iconName: String, title: String, target: String|Function, }]
    userMenu: {
      type: Array,
      required: false,
    },
    // { name: String, shortname: String, orgNumber: String|Number, }
    representing: {
      type: Object,
      required: false,
    },
    // [{ iconName: String, title: String, target: String|Function, }]
    userOptions: {
      type: Array,
      required: false,
    },
    // [{ title: String, target: String|Function, }]
    userMenuFooter: {
      type: Array,
      required: false,
    },
    canChangeRepresentation: {
      type: Boolean,
      default: true,
    },
    showMenuButton: {
      type: Boolean,
      default: false,
    },
    showLogOutButton: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    lastLoggedIn() {
      if (typeof this.user.lastLoggedIn === 'string') {
        return this.user.lastLoggedIn
      }
      return user?.lastLoggedIn
        ? new Date(this.user.lastLoggedIn).toLocaleString('nb-NO', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })
        : ''
    },
  },
  methods: {
    openUserMenu() {
      this.userMenuOpen = !this.userMenuOpen
    },
    clickOutside(e) {
      if (!this.$refs.userMenu?.contains(e.target)) {
        this.userMenuOpen = false
      }
    },
    onScroll() {
      if (this.scrollToHide) {
        const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
        if (currentScrollPosition < 0) {
          return
        }
        if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
          return
        }
        this.hidden = currentScrollPosition > this.lastScrollPosition
        this.lastScrollPosition = currentScrollPosition
      }
    },
  },
  watch: {
    hidden(hidden) {
      if (hidden) this.userMenuOpen = false
    },
  },
  created() {
    this.__handlerRef__ = this.clickOutside.bind(this)
    document.body.addEventListener('click', this.__handlerRef__)
    window.addEventListener('scroll', this.onScroll)
  },
  destroyed() {
    document.body.removeEventListener('click', this.__handlerRef__)
    window.removeEventListener('scroll', this.onScroll)
  },
}
</script>
