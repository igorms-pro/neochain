"use client"

import { User, Zap, Trophy, Award } from "lucide-react"

export default function ProfilePage() {
  return (
    <main className="p-8 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">Your Profile</h1>
        <p className="text-foreground/60">Manage your learning profile and achievements</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <div className="bg-card border border-border rounded-xl p-6 space-y-6">
            {/* Avatar */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                <User className="w-12 h-12 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold">Alex Chen</h2>
              <p className="text-foreground/60 text-sm">Initiate • Level 5</p>
            </div>

            {/* Stats */}
            <div className="space-y-3 pt-4 border-t border-border">
              <div className="flex items-center justify-between text-sm">
                <span className="text-foreground/60">Member Since</span>
                <span className="font-semibold">Jan 2025</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-foreground/60">Total XP</span>
                <span className="font-semibold text-primary">2,450</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-foreground/60">Missions</span>
                <span className="font-semibold">3/12</span>
              </div>
            </div>

            {/* Edit Button */}
            <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition">
              Edit Profile
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Badges Section */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-accent" />
              Badges Earned
            </h3>
            <div className="grid grid-cols-4 gap-4">
              {[
                { name: "First Step", icon: "👣" },
                { name: "Web3 Curious", icon: "🔍" },
                { name: "Smart Learner", icon: "🧠" },
                { name: "Speed Runner", icon: "⚡" },
                { name: "Streak Master", icon: "🔥" },
                { name: "Explorer", icon: "🗺️" },
                { name: "Contributor", icon: "🤝" },
                { name: "Level 5", icon: "⭐" },
              ].map((badge, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-2 p-4 rounded-lg bg-muted hover:border-primary/50 border border-transparent transition"
                >
                  <div className="text-2xl">{badge.icon}</div>
                  <p className="text-xs text-center text-foreground/60 font-semibold">{badge.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Overview */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-primary" />
              Achievements
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg bg-muted">
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-accent" />
                  <div>
                    <p className="font-semibold">12-Day Streak</p>
                    <p className="text-sm text-foreground/60">Keep the momentum going</p>
                  </div>
                </div>
                <span className="text-accent font-bold">12/30</span>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg bg-muted">
                <div className="flex items-center gap-3">
                  <Trophy className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-semibold">Top 10% Learner</p>
                    <p className="text-sm text-foreground/60">Rank in top learners</p>
                  </div>
                </div>
                <span className="text-primary font-bold">🏅</span>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg bg-muted">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-accent" />
                  <div>
                    <p className="font-semibold">All Missions Started</p>
                    <p className="text-sm text-foreground/60">Begin the full journey</p>
                  </div>
                </div>
                <span className="text-primary font-bold">✓</span>
              </div>
            </div>
          </div>

          {/* Settings Section */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-6">Preferences</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold">Email Notifications</label>
                <input type="checkbox" defaultChecked className="w-4 h-4 cursor-pointer" />
              </div>
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold">Daily Reminders</label>
                <input type="checkbox" defaultChecked className="w-4 h-4 cursor-pointer" />
              </div>
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold">Public Profile</label>
                <input type="checkbox" className="w-4 h-4 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
