import { render } from '@testing-library/react'
import * as React from 'react'

import { PktTable } from './Table'
import { PktTableHeader } from './TableHeader'

describe('<Table />', () => {
  it('renders correctly without modifiers', () => {
    const { asFragment } = render(
      <PktTable>
        <thead>
          <tr>
            <PktTableHeader>Header 1</PktTableHeader>
            <PktTableHeader>Header 2</PktTableHeader>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Table data</td>
            <td>Table data</td>
          </tr>
        </tbody>
      </PktTable>,
    )

    expect(asFragment()).toMatchSnapshot()
  })

  it('renders correctly with modifier values true', () => {
    const { asFragment } = render(
      <PktTable
        modifiers={{
          info: true,
          success: true,
          strong: true,
          shadow: true,
        }}
      >
        <thead>
          <tr>
            <PktTableHeader>Header 1</PktTableHeader>
            <PktTableHeader>Header 2</PktTableHeader>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Table data</td>
            <td>Table data</td>
          </tr>
        </tbody>
      </PktTable>,
    )

    expect(asFragment()).toMatchSnapshot()
  })

  it('renders correctly with modifier values false', () => {
    const { asFragment } = render(
      <PktTable
        modifiers={{
          info: false,
          success: false,
          strong: false,
          shadow: false,
        }}
      >
        <thead>
          <tr>
            <PktTableHeader>Header 1</PktTableHeader>
            <PktTableHeader>Header 2</PktTableHeader>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Table data</td>
            <td>Table data</td>
          </tr>
        </tbody>
      </PktTable>,
    )

    expect(asFragment()).toMatchSnapshot()
  })

  it('renders with responsive container', () => {
    const { asFragment } = render(
      <PktTable isResponsive={true}>
        <thead>
          <tr>
            <PktTableHeader>Header 1</PktTableHeader>
            <PktTableHeader>Header 2</PktTableHeader>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Table data</td>
            <td>Table data</td>
          </tr>
        </tbody>
      </PktTable>,
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
