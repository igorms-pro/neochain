// Globals from vitest.config.ts (globals: true)
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import i18n from '@/lib/i18n'
import { Layout } from '../Layout'

// Mock the Sidebar component
vi.mock('../Sidebar', () => ({
  Sidebar: () => <aside data-testid="sidebar">Sidebar</aside>,
}))

describe('Layout', () => {
  it('renders layout with sidebar', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <MemoryRouter>
          <Layout />
        </MemoryRouter>
      </I18nextProvider>
    )

    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  it('renders outlet for child routes', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <MemoryRouter>
          <Layout />
        </MemoryRouter>
      </I18nextProvider>
    )

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()
  })

  it('has responsive layout classes', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <MemoryRouter>
          <Layout />
        </MemoryRouter>
      </I18nextProvider>
    )

    const container = screen.getByRole('main').parentElement
    expect(container).toHaveClass('flex', 'flex-col', 'md:flex-row')
  })

  it('has correct structure with sidebar and main content', () => {
    const { container } = render(
      <I18nextProvider i18n={i18n}>
        <MemoryRouter>
          <Layout />
        </MemoryRouter>
      </I18nextProvider>
    )

    expect(container.querySelector('aside')).toBeInTheDocument()
    expect(container.querySelector('main')).toBeInTheDocument()
  })
})

