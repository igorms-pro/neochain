import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import i18n from '@/lib/i18n'
import { PageHeader } from '../PageHeader'

describe('PageHeader', () => {
  it('renders page title', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <MemoryRouter>
          <PageHeader title="Dashboard" />
        </MemoryRouter>
      </I18nextProvider>
    )

    expect(screen.getByRole('heading', { name: 'Dashboard' })).toBeInTheDocument()
  })

  it('renders user profile on desktop', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <MemoryRouter>
          <PageHeader title="Dashboard" />
        </MemoryRouter>
      </I18nextProvider>
    )

    expect(screen.getByText('Alex Kim')).toBeInTheDocument()
    expect(screen.getByText('Level 5')).toBeInTheDocument()
    expect(screen.getByText(/XP:/i)).toBeInTheDocument()
  })

  it('renders theme and language toggle buttons', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <MemoryRouter>
          <PageHeader title="Dashboard" />
        </MemoryRouter>
      </I18nextProvider>
    )

    expect(screen.getByTestId('theme-toggle-button')).toBeInTheDocument()
    expect(screen.getByTestId('language-toggle-button')).toBeInTheDocument()
  })

  it('renders settings link', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <MemoryRouter>
          <PageHeader title="Dashboard" />
        </MemoryRouter>
      </I18nextProvider>
    )

    const settingsButton = screen.getByRole('button', { name: /settings/i })
    expect(settingsButton).toBeInTheDocument()
  })

  it('has sticky header classes', () => {
    const { container } = render(
      <I18nextProvider i18n={i18n}>
        <MemoryRouter>
          <PageHeader title="Dashboard" />
        </MemoryRouter>
      </I18nextProvider>
    )

    const header = container.querySelector('header')
    expect(header).toHaveClass('sticky', 'top-0')
  })
})

