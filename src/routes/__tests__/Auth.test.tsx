import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import i18n from '@/lib/i18n'
import { Auth } from '../Auth'

describe('Auth', () => {
  it('renders NeoChain branding', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <MemoryRouter>
          <Auth />
        </MemoryRouter>
      </I18nextProvider>
    )

    expect(screen.getByText('NEO')).toBeInTheDocument()
    expect(screen.getByText('CHAIN')).toBeInTheDocument()
    expect(screen.getByText(/Web3 Learning Platform/i)).toBeInTheDocument()
  })

  it('renders welcome message', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <MemoryRouter>
          <Auth />
        </MemoryRouter>
      </I18nextProvider>
    )

    expect(screen.getByRole('heading', { name: /welcome back/i })).toBeInTheDocument()
  })

  it('renders authentication placeholder', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <MemoryRouter>
          <Auth />
        </MemoryRouter>
      </I18nextProvider>
    )

    expect(screen.getByText(/authentication coming soon/i)).toBeInTheDocument()
  })

  it('has full height layout', () => {
    const { container } = render(
      <I18nextProvider i18n={i18n}>
        <MemoryRouter>
          <Auth />
        </MemoryRouter>
      </I18nextProvider>
    )

    const mainDiv = container.firstChild as HTMLElement
    expect(mainDiv).toHaveClass('min-h-screen')
  })
})

