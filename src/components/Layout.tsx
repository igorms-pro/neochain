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
      <main className="flex-1 overflow-auto">
        <PageHeader title={pageTitle} />
        <Outlet />
      </main>
    </div>
  )
}

