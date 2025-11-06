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

  it('renders home page by default', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    )
    expect(screen.getByText('Welcome to NeoChain')).toBeInTheDocument()
  })

  it('renders sidebar with theme and language toggles', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    )
    expect(screen.getByTestId('theme-toggle-button')).toBeInTheDocument()
    expect(screen.getByTestId('language-toggle-button')).toBeInTheDocument()
  })
})

