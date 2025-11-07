import { Outlet, useLocation } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { PageHeader } from './PageHeader'

const pageTitles: Record<string, string> = {
  '/dashboard': 'Dashboard',
  '/missions': 'Missions',
  '/leaderboard': 'Leaderboard',
  '/profile': 'Profile',
  '/wallet': 'Wallet',
}

// Helper to get page title from pathname (handles dynamic routes)
function getPageTitle(pathname: string): string {
  // Check exact matches first
  if (pageTitles[pathname]) {
    return pageTitles[pathname]
  }
  // Handle dynamic routes
  if (pathname.startsWith('/missions/')) {
    return 'Mission Details'
  }
  return 'NeoChain'
}

export function Layout() {
  const location = useLocation()
  const pageTitle = getPageTitle(location.pathname)

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col md:flex-row">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Fixed Header */}
        <PageHeader title={pageTitle} />
        {/* Fixed Page title for mobile - below header */}
        <div className="md:hidden px-6 py-4 border-b border-border flex-shrink-0">
          <h1 className="text-2xl font-bold" data-testid="page-title-mobile">{pageTitle}</h1>
        </div>
        {/* Scrollable content area */}
        <div className="flex-1 overflow-auto">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

