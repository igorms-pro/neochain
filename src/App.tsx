import { useTranslation } from 'react-i18next'
import { ThemeToggleButton } from './components/ThemeToggleButton'
import { LanguageToggleButton } from './components/LanguageToggleButton'

function App() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-4xl mx-auto">
        <header className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold" data-testid="app-title">{t('app_title')}</h1>
            <p className="text-muted-foreground mt-2" data-testid="app-tagline">{t('app_tagline')}</p>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggleButton />
            <LanguageToggleButton />
          </div>
        </header>
        
        <main className="space-y-4">
          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-4">Welcome to NeoChain</h2>
            <p className="text-muted-foreground">
              This is a minimal setup with i18n and theme toggle functionality.
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
