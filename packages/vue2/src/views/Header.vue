<template>
  <page-main class="pkt-container pkt-container--full">
    <h1>Header</h1>

    <p><a href="/header-full">Test denne komponenten på sin egen side for å teste posisjon og scroll</a></p>

    <section class="component">
      <h2>Ikke logget inn</h2>
      <h3>Uten tjenestenavn</h3>
      <div class="component__block-example">
        <PktHeader :fixed="false" :scrollToHide="false"></PktHeader>
      </div>

      <h3>Med tjenestenavn</h3>
      <div class="component__block-example">
        <PktHeader :fixed="false" :scrollToHide="false" serviceName="Gravferdsetaten"></PktHeader>
      </div>
    </section>

    <section class="component">
      <h2>Valgfrie knapper</h2>
      <h3>Generisk menyknapp (event: <code>openMenu</code>)</h3>
      <div class="component__block-example">
        <PktHeader :fixed="false" :scrollToHide="false" :showMenuButton="true" @openMenu="openMenu"></PktHeader>
      </div>

      <h3>Logg ut-knapp (i fall ingen brukerinformasjon)</h3>
      <div class="component__block-example">
        <PktHeader
          :fixed="false"
          :scrollToHide="false"
          serviceName="Gravferdsetaten"
          :showLogOutButton="true"
          @logOut="logOut"
        ></PktHeader>
      </div>
    </section>

    <section class="component">
      <h2>Logget inn som privatperson</h2>
      <h3>Kan ikke endre representasjon</h3>
      <div class="component__block-example">
        <PktHeader
          :fixed="false"
          :scrollToHide="false"
          :canChangeRepresentation="false"
          :user="user"
          :userMenu="userMenu"
          :userMenuFooter="userMenuFooter"
          @logOut="logOut"
          serviceName="Gravferdsetaten"
        ></PktHeader>
      </div>

      <h3>Kan endre representasjon</h3>
      <div class="component__block-example">
        <PktHeader
          :fixed="false"
          :scrollToHide="false"
          :canChangeRepresentation="true"
          :user="user"
          :userMenu="userMenu"
          :userMenuFooter="userMenuFooter"
          @changeRepresentation="changeRepresentation"
          @logOut="logOut"
          serviceName="Gravferdsetaten"
        ></PktHeader>
      </div>
    </section>

    <section class="component">
      <h2>Representerer en virksomhet</h2>
      <h3>Kan ikke endre representasjon</h3>
      <div class="component__block-example">
        <PktHeader
          :fixed="false"
          :scrollToHide="false"
          :canChangeRepresentation="false"
          :representing="representing"
          :user="user"
          :userMenu="userMenu"
          :userMenuFooter="userMenuFooter"
          :userOptions="userOptions"
          @logOut="logOut"
          serviceName="Gravferdsetaten"
        ></PktHeader>
      </div>

      <h3>Kan endre representasjon</h3>
      <div class="component__block-example">
        <PktHeader
          :fixed="false"
          :scrollToHide="false"
          :canChangeRepresentation="true"
          :representing="representing"
          :user="user"
          :userMenu="userMenu"
          :userMenuFooter="userMenuFooter"
          :userOptions="userOptions"
          @changeRepresentation="changeRepresentation"
          @logOut="logOut"
          serviceName="Gravferdsetaten"
        ></PktHeader>
      </div>
    </section>
  </page-main>
</template>

<script>
import { PktHeader } from '@/components/header'
import PageMain from '@/dev-components/PageMain.vue'

export default {
  name: 'Header',
  components: {
    PktHeader,
    PageMain,
  },
  data: () => ({
    user: {
      name: 'Aksel Web Opdahl',
      shortname: 'AWO',
      lastLoggedIn: new Date(),
    },
    representing: {
      name: 'Joe & the Juice Norge AS',
      shortname: 'JJN',
      orgNumber: '911738066',
    },
    userMenu: [
      {
        title: 'Mine bookinger',
        iconName: 'heart',
        target: '#',
      },
      {
        title: 'Mine adresser',
        iconName: 'house-heart',
        target: () => console.log('Mine adresser'),
      },
    ],
    userOptions: [
      {
        title: 'Innstillinger',
        iconName: 'cogwheel',
        target: '#',
      },
    ],
    userMenuFooter: [
      {
        title: 'Kontakt',
        target: '#',
      },
      {
        title: 'Personvern',
        target: '#',
      },
    ],
  }),
  methods: {
    changeRepresentation() {
      console.log('Bytter representasjon')
    },
    openMenu() {
      console.log('Åpner meny')
    },
    logOut() {
      console.log('Logger ut')
    },
  },
}
</script>
