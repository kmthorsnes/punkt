import '@testing-library/jest-dom/extend-expect'

import { render, screen } from '@testing-library/react'
import React from 'react'

import { PktIcon } from './Icon'
import { IconFetcher, PktIconContext } from './IconContext'

describe('PktIcon', () => {
  let fetchSpy: jest.SpyInstance

  beforeEach(() => {
    fetchSpy = jest.spyOn(global, 'fetch')
  })

  describe('with default fetcher', () => {
    test('fetches SVG with default fetcher', async () => {
      fetchSpy.mockResolvedValue(
        new Response('<svg role="img">Her er noe SVG</svg>', {status: 200}),
      )

      render(<PktIcon name={'arrow'}/>)

      const icon = await screen.findByRole('img')
      expect(icon).toMatchInlineSnapshot(`
        <svg
          role="img"
        >
          Her er noe SVG
        </svg>
      `)
    })

    test('fetches SVG and caches result', async () => {
      fetchSpy.mockResolvedValue(
        new Response('<svg role="img">Her er noe SVG</svg>', {status: 200}),
      )

      render(
        <div>
          <PktIcon name={'some-icon'}/>
          <PktIcon name={'some-icon'}/>
        </div>,
      )

      const icons = await screen.findAllByRole('img')
      expect(icons).toHaveLength(2)
      expect(fetchSpy).toHaveBeenCalledTimes(1)
    })
  })

  describe('with custom fetcher', () => {
    test('fetches SVG with custom fetcher', async () => {
      const customIconFetcher: IconFetcher = {
        fetchIcon: jest.fn((name: string, path: string | undefined) => {
          return Promise.resolve(`<svg role="img">Her er SVGen for '${name}' fra '${path}'</svg>`)
        })
      }

      render(
        <PktIconContext.Provider value={customIconFetcher}>
          <PktIcon name={'arrow'} path={'http://path/to/something'}/>
        </PktIconContext.Provider>,
      )

      const icon = await screen.findByRole('img')
      expect(icon).toMatchInlineSnapshot(`
        <svg
          role="img"
        >
          Her er SVGen for 'arrow' fra 'http://path/to/something'
        </svg>
      `)
      expect(customIconFetcher.fetchIcon).toHaveBeenCalledTimes(1)
      expect(fetchSpy).not.toHaveBeenCalled()
    })
  })
})
