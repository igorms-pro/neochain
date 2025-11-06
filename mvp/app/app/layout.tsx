"use client"

import type React from "react"

import Link from "next/link"
import { Home, Zap, Trophy, User, LogOut, Menu } from "lucide-react"
import { useState } from "react"

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="flex h-screen bg-background text-foreground">
      {/* Sidebar */}
      <div
        className={`${sidebarOpen ? "w-64" : "w-20"} bg-card border-r border-border transition-all duration-300 flex flex-col`}
      >
        <div className="p-4 border-b border-border">
          <div className="flex items-center justify-between">
            {sidebarOpen && (
              <div className="text-lg font-bold">
                NEO<span className="text-accent">CHAIN</span>
              </div>
            )}
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-1 hover:bg-muted rounded transition">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <Link
            href="/app"
            className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-primary/10 transition text-primary font-semibold"
          >
            <Home className="w-5 h-5" />
            {sidebarOpen && <span>Dashboard</span>}
          </Link>
          <Link
            href="/app/missions"
            className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-primary/10 transition text-foreground/70 hover:text-foreground"
          >
            <Zap className="w-5 h-5" />
            {sidebarOpen && <span>Missions</span>}
          </Link>
          <Link
            href="/app/leaderboard"
            className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-primary/10 transition text-foreground/70 hover:text-foreground"
          >
            <Trophy className="w-5 h-5" />
            {sidebarOpen && <span>Leaderboard</span>}
          </Link>
          <Link
            href="/app/profile"
            className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-primary/10 transition text-foreground/70 hover:text-foreground"
          >
            <User className="w-5 h-5" />
            {sidebarOpen && <span>Profile</span>}
          </Link>
        </nav>

        <div className="p-4 border-t border-border">
          <button className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-destructive/10 transition text-destructive w-full justify-center">
            <LogOut className="w-5 h-5" />
            {sidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  )
}
