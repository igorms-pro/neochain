import { Link, useLocation } from "react-router-dom"
import { LayoutDashboard, Zap, Trophy, Wallet, LogOut, Menu, X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { useState, useEffect } from "react"
import { useSidebar } from "@/hooks/useSidebar"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Missions", href: "/missions", icon: Zap },
  { name: "Leaderboard", href: "/leaderboard", icon: Trophy },
  { name: "Wallet", href: "/wallet", icon: Wallet },
]

export function Sidebar() {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const { isCollapsed, toggleSidebar } = useSidebar()

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  return (
    <>
      {/* Mobile toggle */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden fixed top-4 left-4 z-40"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X /> : <Menu />}
      </Button>

      {/* Sidebar */}
      <aside
        role="complementary"
        className={`fixed md:static h-screen bg-card border-r border-border flex flex-col transition-all duration-300 transform md:translate-x-0 z-30 group ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } ${isCollapsed ? "w-16" : "w-64"}`}
      >
        {/* Logo & Toggle */}
        <div className={`p-6 border-b border-border ${isCollapsed ? "px-2 py-4" : ""}`}>
          {!isCollapsed && (
            <button
              onClick={toggleSidebar}
              className="hidden md:flex w-8 h-8 items-center justify-center rounded-lg hover:bg-muted transition-colors mb-4 opacity-0 group-hover:opacity-100"
              aria-label="Collapse sidebar"
              data-testid="sidebar-toggle-button"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          )}
          {isCollapsed && (
            <button
              onClick={toggleSidebar}
              className="hidden md:flex w-8 h-8 items-center justify-center rounded-lg hover:bg-muted transition-colors mb-4"
              aria-label="Expand sidebar"
              data-testid="sidebar-toggle-button"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
          {!isCollapsed && (
            <Link to="/" onClick={() => setIsOpen(false)}>
              <div className="text-2xl font-bold text-primary">
                NEO<span className="text-accent">CHAIN</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Web3 Learning</p>
            </Link>
          )}
          {isCollapsed && (
            <Link to="/" onClick={() => setIsOpen(false)} className="flex justify-center">
              <div className="text-xl font-bold text-primary">N</div>
            </Link>
          )}
        </div>

        {/* User Profile Card */}
        {!isCollapsed && (
          <div className="p-4 border-b border-border">
            <div className="flex items-center gap-3 mb-3">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" alt="User" />
                <AvatarFallback>AK</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="font-semibold text-sm">Alex Kim</p>
                <p className="text-xs text-muted-foreground">Level 5</p>
              </div>
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-muted-foreground">XP:</span>
                <span className="text-primary font-semibold">2,450</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full w-1/2"></div>
              </div>
              <p className="text-muted-foreground">67% to Level 6</p>
            </div>
          </div>
        )}
        {isCollapsed && (
          <div className="p-2 border-b border-border flex justify-center">
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" alt="User" />
              <AvatarFallback>AK</AvatarFallback>
            </Avatar>
          </div>
        )}

        {/* Navigation */}
        <nav className={`flex-1 ${isCollapsed ? "p-2" : "p-4"} space-y-2`}>
          {navigation.map((item) => {
            const Icon = item.icon
            // Check if route is active (exact match or starts with for nested routes)
            const isActive = location.pathname === item.href || 
              (item.href !== "/dashboard" && location.pathname.startsWith(item.href))
            return (
              <Link
                key={item.href}
                to={item.href}
                className={`flex items-center ${isCollapsed ? "justify-center w-full" : "gap-3"} ${isCollapsed ? "px-0" : "px-3"} py-2 rounded-lg transition-colors relative ${
                  isActive 
                    ? "bg-primary/20 text-primary" 
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
                onClick={() => setIsOpen(false)}
                title={isCollapsed ? item.name : undefined}
              >
                <Icon className={`w-5 h-5 ${isCollapsed ? "mx-auto" : ""}`} />
                {!isCollapsed && <span className="text-sm font-medium">{item.name}</span>}
                {isCollapsed && isActive && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-primary"></div>
                )}
              </Link>
            )
          })}
        </nav>

        {/* Bottom actions */}
        {!isCollapsed && (
          <div className="p-4 border-t border-border space-y-2">
            <Button 
              variant="ghost" 
              className="w-full justify-start gap-3 text-muted-foreground hover:text-destructive"
            >
              <LogOut className="w-5 h-5" />
              <span className="text-sm font-medium">Logout</span>
            </Button>
          </div>
        )}
        {isCollapsed && (
          <div className="p-2 border-t border-border flex justify-center">
            <Button 
              variant="ghost" 
              size="icon"
              className="text-muted-foreground hover:text-destructive"
              title="Logout"
            >
              <LogOut className="w-5 h-5" />
            </Button>
          </div>
        )}
      </aside>

      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 md:hidden z-20" 
          onClick={() => setIsOpen(false)} 
        />
      )}
    </>
  )
}

