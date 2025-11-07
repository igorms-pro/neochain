// Globals from vitest.config.ts (globals: true)
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import i18n from '@/lib/i18n'
import { NotFound } from '../NotFound'

describe('NotFound', () => {
  it('renders 404 page with correct content', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <MemoryRouter>
          <NotFound />
        </MemoryRouter>
      </I18nextProvider>
    )

    expect(screen.getByText('404')).toBeInTheDocument()
    expect(screen.getByText('Page Not Found')).toBeInTheDocument()
    expect(
      screen.getByText(/The page you're looking for doesn't exist/i)
    ).toBeInTheDocument()
  })

  it('has a link to home page', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <MemoryRouter>
          <NotFound />
        </MemoryRouter>
      </I18nextProvider>
    )

    const homeLink = screen.getByRole('link', { name: /go home/i })
    expect(homeLink).toBeInTheDocument()
    expect(homeLink).toHaveAttribute('href', '/')
  })

  it('has correct heading structure', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <MemoryRouter>
          <NotFound />
        </MemoryRouter>
      </I18nextProvider>
    )

    const h1 = screen.getByRole('heading', { level: 1 })
    const h2 = screen.getByRole('heading', { level: 2 })
    expect(h1).toHaveTextContent('404')
    expect(h2).toHaveTextContent('Page Not Found')
  })
})

