import { render, screen } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import i18n from './lib/i18n'
import App from './App'

describe('App', () => {
  it('renders router provider', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    )
    // Router should render without errors
    expect(document.body).toBeInTheDocument()
  })

  it('renders auth page by default', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    )
    expect(screen.getByTestId('auth-page')).toBeInTheDocument()
    expect(screen.getByTestId('auth-logo')).toBeInTheDocument()
    expect(screen.getByText(/Welcome Back/i)).toBeInTheDocument()
  })

  it('renders auth page with branding', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    )
    expect(screen.getByTestId('auth-branding')).toBeInTheDocument()
    expect(screen.getByText('NEO')).toBeInTheDocument()
    expect(screen.getByText('CHAIN')).toBeInTheDocument()
    expect(screen.getByText(/Web3 Learning Platform/i)).toBeInTheDocument()
  })
})

