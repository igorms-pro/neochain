// Globals from vitest.config.ts (globals: true)
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import i18n from '@/lib/i18n'
import { Home } from '../Home'

describe('Home', () => {
  it('renders the home page with welcome message', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </I18nextProvider>
    )

    expect(
      screen.getByText(
        /Your Web3 learning journey starts here/i
      )
    ).toBeInTheDocument()
  })

  it('renders content area', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </I18nextProvider>
    )

    const content = screen.getByText(
      /Your Web3 learning journey starts here/i
    )
    expect(content).toBeInTheDocument()
  })
})

