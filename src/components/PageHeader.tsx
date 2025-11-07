import { Settings } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ThemeToggleButton } from './ThemeToggleButton'
import { LanguageToggleButton } from './LanguageToggleButton'
import { Button } from './ui/button'
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar'

interface PageHeaderProps {
  title: string
}

export function PageHeader({ title }: PageHeaderProps) {
  return (
    <header className="sticky top-0 z-20 bg-background/80 backdrop-blur-sm border-b border-border" data-testid="page-header">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Title - Desktop only */}
        <h1 className="hidden md:block text-2xl font-bold" data-testid="page-title">{title}</h1>
        {/* Mobile: Empty space on left, profile on right */}
        <div className="md:hidden flex-1"></div>
        <div className="flex items-center gap-2 md:ml-auto" data-testid="header-actions">
          {/* User Profile - Desktop: Full card, Mobile: Avatar + Level only */}
          <div className="hidden md:flex items-center gap-3 px-4 py-2 rounded-lg bg-card border border-border" data-testid="user-profile-header">
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" alt="User" />
              <AvatarFallback>AK</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <p className="font-semibold text-sm" data-testid="user-name-header">Alex Kim</p>
                <span className="text-xs text-muted-foreground" data-testid="user-level-header">Level 5</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-muted-foreground">XP:</span>
                <span className="text-primary font-semibold" data-testid="user-xp-header">2,450</span>
                <div className="w-16 bg-muted rounded-full h-1.5" data-testid="xp-progress-bar-header">
                  <div className="bg-gradient-to-r from-primary to-accent h-1.5 rounded-full w-2/3"></div>
                </div>
                <span className="text-muted-foreground">67%</span>
              </div>
            </div>
          </div>
          {/* Mobile: Avatar + Level + XP Progress - on the right */}
          <div className="flex md:hidden items-center gap-2 ml-auto" data-testid="user-profile-mobile">
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" alt="User" />
              <AvatarFallback>AK</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground" data-testid="user-level-mobile">Level 5</span>
              <div className="flex items-center gap-1.5 text-xs">
                <span className="text-primary font-semibold">2,450</span>
                <div className="w-12 bg-muted rounded-full h-1" data-testid="xp-progress-mobile">
                  <div className="bg-gradient-to-r from-primary to-accent h-1 rounded-full w-2/3"></div>
                </div>
              </div>
            </div>
          </div>
          {/* Theme, Language, Settings - Desktop only */}
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggleButton />
            <LanguageToggleButton />
            <Link to="/profile">
              <Button variant="ghost" size="icon" aria-label="Settings" data-testid="settings-button">
                <Settings className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

