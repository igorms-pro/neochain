"use client"

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts"
import { Flame, Star, Award, ArrowRight, Trophy } from "lucide-react"
import Link from "next/link"
import { ProgressionCard } from "@/components/progression-card"
import { BadgesDisplay } from "@/components/badges-display"
import { getUnlockedBadges } from "@/lib/gamification"

const xpData = [
  { day: "Mon", xp: 150 },
  { day: "Tue", xp: 220 },
  { day: "Wed", xp: 180 },
  { day: "Thu", xp: 320 },
  { day: "Fri", xp: 290 },
  { day: "Sat", xp: 400 },
  { day: "Sun", xp: 350 },
]

const streakData = [
  { week: "W1", streak: 3 },
  { week: "W2", streak: 7 },
  { week: "W3", streak: 12 },
  { week: "W4", streak: 9 },
]

export default function Dashboard() {
  // Mock user stats for demo
  const userStats = {
    userId: "user-1",
    level: 5,
    totalXP: 2450,
    currentLevelXP: 700,
    streak: 12,
    badges: ["first-step", "web3-curious", "streak-master", "level-5"],
    completedMissions: 3,
    rank: "Initiate" as const,
  }

  const unlockedBadges = getUnlockedBadges(userStats)

  return (
    <main className="p-8 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">Welcome back, Initiate</h1>
        <p className="text-foreground/60">Your Web3 learning journey awaits</p>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-4 gap-4">
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-foreground/60 text-sm font-semibold">Total XP</span>
            <Star className="w-5 h-5 text-accent" />
          </div>
          <p className="text-3xl font-bold text-primary">{userStats.totalXP}</p>
          <p className="text-sm text-foreground/60 mt-2">+350 this week</p>
        </div>

        <div className="bg-card border border-border rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-foreground/60 text-sm font-semibold">Level</span>
            <Trophy className="w-5 h-5 text-primary" />
          </div>
          <p className="text-3xl font-bold text-primary">{userStats.level}</p>
          <p className="text-sm text-foreground/60 mt-2">{userStats.rank} Rank</p>
        </div>

        <div className="bg-card border border-border rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-foreground/60 text-sm font-semibold">Streak</span>
            <Flame className="w-5 h-5 text-accent" />
          </div>
          <p className="text-3xl font-bold text-accent">{userStats.streak}</p>
          <p className="text-sm text-foreground/60 mt-2">Days on fire</p>
        </div>

        <div className="bg-card border border-border rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-foreground/60 text-sm font-semibold">Badges</span>
            <Award className="w-5 h-5 text-primary" />
          </div>
          <p className="text-3xl font-bold text-primary">{unlockedBadges.length}</p>
          <p className="text-sm text-foreground/60 mt-2">Unlocked</p>
        </div>
      </div>

      {/* Charts and Badges Section */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* XP Progress Chart */}
        <div className="bg-card border border-border rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-6">Weekly XP Progress</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={xpData}>
              <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.18 0.03 240)" />
              <XAxis dataKey="day" stroke="oklch(0.65 0.05 240)" />
              <YAxis stroke="oklch(0.65 0.05 240)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "oklch(0.12 0.02 240)",
                  border: "1px solid oklch(0.18 0.03 240)",
                  borderRadius: "8px",
                }}
              />
              <Bar dataKey="xp" radius={[8, 8, 0, 0]}>
                {xpData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill="oklch(0.5 0.22 200)" />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Streak Trend Chart */}
        <div className="bg-card border border-border rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-6">Streak Trend</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={streakData}>
              <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.18 0.03 240)" />
              <XAxis dataKey="week" stroke="oklch(0.65 0.05 240)" />
              <YAxis stroke="oklch(0.65 0.05 240)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "oklch(0.12 0.02 240)",
                  border: "1px solid oklch(0.18 0.03 240)",
                  borderRadius: "8px",
                }}
              />
              <Line
                type="monotone"
                dataKey="streak"
                stroke="oklch(0.95 0.15 300)"
                strokeWidth={3}
                dot={{ fill: "oklch(0.95 0.15 300)", r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Progression Card and Badges Display */}
        <ProgressionCard totalXP={userStats.totalXP} />
        <div className="lg:col-span-2">
          <BadgesDisplay unlockedBadges={unlockedBadges as any} />
        </div>
      </div>

      {/* Current Missions */}
      <div className="bg-card border border-border rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">Current Missions</h2>
          <Link
            href="/app/missions"
            className="text-primary hover:text-primary/80 text-sm font-semibold flex items-center gap-1"
          >
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="space-y-4">
          {[
            { title: "Awakening", progress: 100, xp: 500 },
            { title: "Smart Contracts Unlocked", progress: 65, xp: 750 },
            { title: "DeFi Explorer", progress: 30, xp: 1000 },
          ].map((mission, i) => (
            <div
              key={i}
              className="p-4 rounded-lg bg-muted hover:border-primary/50 border border-transparent transition"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold">{mission.title}</h3>
                <span className="text-sm text-accent font-semibold">+{mission.xp} XP</span>
              </div>
              <div className="w-full bg-input rounded-full h-2">
                <div className="bg-primary h-2 rounded-full transition-all" style={{ width: `${mission.progress}%` }} />
              </div>
              <p className="text-xs text-foreground/60 mt-2">{mission.progress}% Complete</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
