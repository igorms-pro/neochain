import { Link, useLocation } from "react-router-dom"
import { LayoutDashboard, Zap, Trophy, Wallet, Settings, LogOut, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { useState, useEffect } from "react"
import { ThemeToggleButton } from "./ThemeToggleButton"
import { LanguageToggleButton } from "./LanguageToggleButton"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Missions", href: "/missions", icon: Zap },
  { name: "Leaderboard", href: "/leaderboard", icon: Trophy },
  { name: "Wallet", href: "/wallet", icon: Wallet },
]

export function Sidebar() {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)

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
        className={`fixed md:static w-64 h-screen bg-card border-r border-border flex flex-col transition-transform duration-300 transform md:translate-x-0 z-30 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-border">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <div className="text-2xl font-bold text-primary">
              NEO<span className="text-accent">CHAIN</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Web3 Learning</p>
          </Link>
        </div>

        {/* User Profile Card */}
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

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon
            // Check if route is active (exact match or starts with for nested routes)
            const isActive = location.pathname === item.href || 
              (item.href !== "/dashboard" && location.pathname.startsWith(item.href))
            return (
              <Link
                key={item.href}
                to={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                  isActive 
                    ? "bg-primary/20 text-primary" 
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
                onClick={() => setIsOpen(false)}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium">{item.name}</span>
              </Link>
            )
          })}
        </nav>

        {/* Bottom actions */}
        <div className="p-4 border-t border-border space-y-2">
          <div className="flex items-center gap-2 px-3 py-2">
            <ThemeToggleButton />
            <LanguageToggleButton />
          </div>
          <Link
            to="/profile"
            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
              location.pathname === "/profile"
                ? "bg-primary/20 text-primary"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
            onClick={() => setIsOpen(false)}
          >
            <Settings className="w-5 h-5" />
            <span className="text-sm font-medium">Settings</span>
          </Link>
          <Button 
            variant="ghost" 
            className="w-full justify-start gap-3 text-muted-foreground hover:text-destructive"
          >
            <LogOut className="w-5 h-5" />
            <span className="text-sm font-medium">Logout</span>
          </Button>
        </div>
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

