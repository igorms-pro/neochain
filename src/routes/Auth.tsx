export function Auth() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4" data-testid="auth-page">
      <div className="w-full max-w-md" data-testid="auth-container">
        <div className="text-center mb-8" data-testid="auth-branding">
          <h1 className="text-4xl font-bold text-primary mb-2" data-testid="auth-logo">
            NEO<span className="text-accent">CHAIN</span>
          </h1>
          <p className="text-muted-foreground" data-testid="auth-tagline">Web3 Learning Platform</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-6 space-y-4" data-testid="auth-card">
          <h2 className="text-2xl font-bold text-center mb-6" data-testid="auth-title">Welcome Back</h2>
          <p className="text-muted-foreground text-center" data-testid="auth-message">
            Authentication coming soon...
          </p>
        </div>
      </div>
    </div>
  )
}

