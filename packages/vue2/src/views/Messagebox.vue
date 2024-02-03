<template>
  <page-main class="pkt-container">
    <h1>Messagebox</h1>

    <section class="component">
      <h2>Standard versjon</h2>
      <div class="component__block-example">
        <pkt-messagebox title="Messagebox beige">
          Skriv en informerende tekst om ønskelig tema her. Legg til knapper eller bilder om du ønsker
          <ul>
            <li>Listeelement 1</li>
            <li>Listeelement 2</li>
            <li>Listeelement 3</li>
          </ul>
        </pkt-messagebox>
        <pkt-messagebox skin="red" title="Messagebox red">
          Skriv en informerende tekst om ønskelig tema her. Legg til knapper eller bilder om du ønsker
          <ul>
            <li>Listeelement 1</li>
            <li>Listeelement 2</li>
            <li>Listeelement 3</li>
          </ul></pkt-messagebox
        >

        <pkt-messagebox skin="blue" title="Messagebox blue">
          Skriv en informerende tekst om ønskelig tema her. Legg til knapper eller bilder om du ønsker
          <ul>
            <li>Listeelement 1</li>
            <li>Listeelement 2</li>
            <li>Listeelement 3</li>
          </ul></pkt-messagebox
        >

        <pkt-messagebox skin="green" title="Messagebox green">
          Skriv en informerende tekst om ønskelig tema her. Legg til knapper eller bilder om du ønsker
          <ul>
            <li>Listeelement 1</li>
            <li>Listeelement 2</li>
            <li>Listeelement 3</li>
          </ul></pkt-messagebox
        >
      </div>
    </section>

    <section class="component">
      <h2>Kompakt versjon</h2>
      <div class="component__block-example">
        <pkt-messagebox title="Messagebox beige" compact>
          Skriv en informerende tekst om ønskelig tema her. Legg til knapper eller bilder om du ønsker
          <ul>
            <li>Listeelement 1</li>
            <li>Listeelement 2</li>
            <li>Listeelement 3</li>
          </ul>
        </pkt-messagebox>
        <pkt-messagebox skin="red" title="Messagebox red" compact>
          Skriv en informerende tekst om ønskelig tema her. Legg til knapper eller bilder om du ønsker
          <ul>
            <li>Listeelement 1</li>
            <li>Listeelement 2</li>
            <li>Listeelement 3</li>
          </ul></pkt-messagebox
        >

        <pkt-messagebox skin="blue" title="Messagebox blue" compact>
          Skriv en informerende tekst om ønskelig tema her. Legg til knapper eller bilder om du ønsker
          <ul>
            <li>Listeelement 1</li>
            <li>Listeelement 2</li>
            <li>Listeelement 3</li>
          </ul></pkt-messagebox
        >

        <pkt-messagebox skin="green" title="Messagebox green" compact>
          Skriv en informerende tekst om ønskelig tema her. Legg til knapper eller bilder om du ønsker
          <ul>
            <li>Listeelement 1</li>
            <li>Listeelement 2</li>
            <li>Listeelement 3</li>
          </ul></pkt-messagebox
        >
      </div>
    </section>
  </page-main>
</template>

<script>
import spec from 'componentSpecs/messagebox.json'
import { PktMessagebox } from '@/components/messagebox'
import PageMain from '@/dev-components/PageMain.vue'

export default {
  name: 'Messagebox',
  data: () => ({
    specProps: spec.props,
  }),
  components: {
    PktMessagebox,
    PageMain,
  },
}
</script>

<style lang="scss"></style>
