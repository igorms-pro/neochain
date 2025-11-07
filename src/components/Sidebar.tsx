import { Link, useLocation } from "react-router-dom"
import { LayoutDashboard, Zap, Trophy, Wallet, LogOut, Menu, X, ChevronLeft, ChevronRight, Settings, Moon, Sun, Languages } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect, useRef } from "react"
import { useSidebar } from "@/hooks/useSidebar"
import { useTranslation } from "react-i18next"
import { setLanguage } from "@/lib/i18n"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Missions", href: "/missions", icon: Zap },
  { name: "Leaderboard", href: "/leaderboard", icon: Trophy },
  { name: "Wallet", href: "/wallet", icon: Wallet },
]

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "pt", name: "Português", flag: "🇵🇹" },
  { code: "pt-BR", name: "Português (Brasil)", flag: "🇧🇷" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
]

export function Sidebar() {
  const location = useLocation()
  const { i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false)
  const langDropdownRef = useRef<HTMLDivElement>(null)
  const { isCollapsed, toggleSidebar } = useSidebar()
  const [theme, setTheme] = useState<string>(() => localStorage.getItem("theme") || "system")
  const [isDark, setIsDark] = useState(false)

  // Get current language
  const currentLangCode = i18n.language || localStorage.getItem("lang") || "en"
  const currentLang = languages.find((l) => l.code === currentLangCode) || languages[0]

  // Check theme state and sync with actual theme
  useEffect(() => {
    const root = document.documentElement
    const current = localStorage.getItem("theme") || "system"
    setTheme(current)
    
    let actualTheme = current
    if (current === "system") {
      actualTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    }
    setIsDark(actualTheme === "dark")
    
    // Sync with document
    if (actualTheme === "dark") {
      root.classList.add("dark")
      root.setAttribute("data-theme", "dark")
      root.style.colorScheme = "dark"
    } else {
      root.classList.remove("dark")
      root.setAttribute("data-theme", "light")
      root.style.colorScheme = "light"
    }
    
    // Listen for system theme changes
    if (current === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
      const handler = () => {
        const isDarkMode = mediaQuery.matches
        setIsDark(isDarkMode)
        if (isDarkMode) {
          root.classList.add("dark")
          root.setAttribute("data-theme", "dark")
          root.style.colorScheme = "dark"
        } else {
          root.classList.remove("dark")
          root.setAttribute("data-theme", "light")
          root.style.colorScheme = "light"
        }
      }
      mediaQuery.addEventListener("change", handler)
      return () => mediaQuery.removeEventListener("change", handler)
    }
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  // Close language dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        langDropdownRef.current &&
        !langDropdownRef.current.contains(event.target as Node)
      ) {
        setIsLangDropdownOpen(false)
      }
    }
    if (isLangDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isLangDropdownOpen])

  // Toggle theme
  const toggleTheme = () => {
    const current = theme || localStorage.getItem("theme") || "system"
    let newTheme = "system"
    if (current === "system") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      newTheme = prefersDark ? "light" : "dark"
    } else if (current === "light") {
      newTheme = "dark"
    } else {
      newTheme = "light"
    }
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    setIsDark(newTheme === "dark" || (newTheme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches))
    const root = document.documentElement
    if (newTheme === "system") {
      const actualTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      if (actualTheme === "dark") {
        root.classList.add("dark")
        root.setAttribute("data-theme", "dark")
        root.style.colorScheme = "dark"
      } else {
        root.classList.remove("dark")
        root.setAttribute("data-theme", "light")
        root.style.colorScheme = "light"
      }
    } else if (newTheme === "dark") {
      root.classList.add("dark")
      root.setAttribute("data-theme", "dark")
      root.style.colorScheme = "dark"
    } else {
      root.classList.remove("dark")
      root.setAttribute("data-theme", "light")
      root.style.colorScheme = "light"
    }
  }

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
        <div className={`flex flex-col items-center border-b border-border ${isCollapsed ? "p-2 py-4" : "p-6"}`}>
          <button
            onClick={toggleSidebar}
            className="hidden md:flex w-8 h-8 items-center justify-center rounded-lg hover:bg-muted transition-colors mb-4 opacity-0 group-hover:opacity-100"
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            data-testid="sidebar-toggle-button"
          >
            {isCollapsed ? (
              <ChevronRight className="w-4 h-4" />
            ) : (
              <ChevronLeft className="w-4 h-4" />
            )}
          </button>
          {!isCollapsed && (
            <Link to="/" onClick={() => setIsOpen(false)} className="text-center">
              <div className="text-2xl font-bold text-primary">
                NEO<span className="text-accent">CHAIN</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Web3 Learning</p>
            </Link>
          )}
          {isCollapsed && (
            <Link to="/" onClick={() => setIsOpen(false)}>
              <div className="text-xl font-bold text-primary">N</div>
            </Link>
          )}
        </div>


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
            {/* Mobile only: Theme, Language, Settings */}
            <div className="md:hidden space-y-2">
              {/* Theme */}
              <button
                onClick={toggleTheme}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                <span className="text-sm font-medium">Theme</span>
              </button>
              {/* Language with dropdown */}
              <div className="relative" ref={langDropdownRef}>
                <button
                  onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  <Languages className="w-5 h-5" />
                  <span className="text-sm font-medium">{currentLang.name}</span>
                </button>
                {/* Language Dropdown */}
                {isLangDropdownOpen && (
                  <div className="absolute left-0 bottom-full mb-2 w-full bg-card border border-border rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code)
                          setIsLangDropdownOpen(false)
                        }}
                        className={`w-full px-4 py-2 text-left hover:bg-muted transition-colors flex items-center gap-2 ${
                          currentLangCode === lang.code
                            ? "bg-primary/20 text-primary font-medium"
                            : "text-foreground"
                        }`}
                      >
                        <span className="text-base">{lang.flag}</span>
                        <span className="text-sm">{lang.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              {/* Settings */}
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
            </div>
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

