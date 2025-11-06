import { render, screen } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import i18n from './lib/i18n'
import App from './App'

describe('App', () => {
  it('renders the app title', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    )
    expect(screen.getByTestId('app-title')).toBeInTheDocument()
    expect(screen.getByTestId('app-title')).toHaveTextContent('NeoChain')
  })

  it('renders theme toggle button', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    )
    expect(screen.getByTestId('theme-toggle-button')).toBeInTheDocument()
  })

  it('renders language toggle button', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    )
    expect(screen.getByTestId('language-toggle-button')).toBeInTheDocument()
  })
})

