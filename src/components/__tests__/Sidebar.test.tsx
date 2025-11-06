// Globals from vitest.config.ts (globals: true)
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import i18n from '@/lib/i18n'
import { Sidebar } from '../Sidebar'

// Mock the theme and language toggle buttons
vi.mock('../ThemeToggleButton', () => ({
  ThemeToggleButton: () => <button data-testid="theme-toggle-button">Theme</button>,
}))

vi.mock('../LanguageToggleButton', () => ({
  LanguageToggleButton: () => <button data-testid="language-toggle-button">Language</button>,
}))

describe('Sidebar', () => {
  it('renders sidebar with logo', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <MemoryRouter>
          <Sidebar />
        </MemoryRouter>
      </I18nextProvider>
    )

    // Logo text is split across elements, so check for parts
    expect(screen.getByText('NEO')).toBeInTheDocument()
    expect(screen.getByText('CHAIN')).toBeInTheDocument()
    expect(screen.getByText(/Web3 Learning/i)).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <MemoryRouter>
          <Sidebar />
        </MemoryRouter>
      </I18nextProvider>
    )

    expect(screen.getByRole('link', { name: /dashboard/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /missions/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /leaderboard/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /wallet/i })).toBeInTheDocument()
  })

  it('renders user profile section', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <MemoryRouter>
          <Sidebar />
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
          <Sidebar />
        </MemoryRouter>
      </I18nextProvider>
    )

    expect(screen.getByTestId('theme-toggle-button')).toBeInTheDocument()
    expect(screen.getByTestId('language-toggle-button')).toBeInTheDocument()
  })

  it('toggles mobile menu when hamburger button is clicked', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <MemoryRouter>
          <Sidebar />
        </MemoryRouter>
      </I18nextProvider>
    )

    const menuButton = screen.getByLabelText('Toggle menu')
    const sidebar = screen.getByRole('complementary')

    // Initially closed on mobile
    expect(sidebar).toHaveClass('-translate-x-full')

    // Open menu
    fireEvent.click(menuButton)
    expect(sidebar).toHaveClass('translate-x-0')

    // Close menu
    fireEvent.click(menuButton)
    expect(sidebar).toHaveClass('-translate-x-full')
  })

  it('closes mobile menu when navigation link is clicked', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <MemoryRouter>
          <Sidebar />
        </MemoryRouter>
      </I18nextProvider>
    )

    const menuButton = screen.getByLabelText('Toggle menu')
    const dashboardLink = screen.getByRole('link', { name: /dashboard/i })
    const sidebar = screen.getByRole('complementary')

    // Open menu
    fireEvent.click(menuButton)
    expect(sidebar).toHaveClass('translate-x-0')

    // Click link
    fireEvent.click(dashboardLink)
    expect(sidebar).toHaveClass('-translate-x-full')
  })

  it('highlights active route', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <MemoryRouter initialEntries={['/dashboard']}>
          <Sidebar />
        </MemoryRouter>
      </I18nextProvider>
    )

    const dashboardLink = screen.getByRole('link', { name: /dashboard/i })
    expect(dashboardLink).toHaveClass('bg-primary/20', 'text-primary')
  })

  it('renders settings link', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <MemoryRouter>
          <Sidebar />
        </MemoryRouter>
      </I18nextProvider>
    )

    const settingsLink = screen.getByRole('link', { name: /settings/i })
    expect(settingsLink).toBeInTheDocument()
    expect(settingsLink).toHaveAttribute('href', '/profile')
  })

  it('renders logout button', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <MemoryRouter>
          <Sidebar />
        </MemoryRouter>
      </I18nextProvider>
    )

    const logoutButton = screen.getByRole('button', { name: /logout/i })
    expect(logoutButton).toBeInTheDocument()
  })
})

