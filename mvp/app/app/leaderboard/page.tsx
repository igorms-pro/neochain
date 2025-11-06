"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Zap, Flame } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock leaderboard data
const leaderboardData = [
  {
    rank: 1,
    username: "Alex Chen",
    level: 8,
    totalXP: 5200,
    streak: 15,
    badges: 9,
    rank_title: "Master",
  },
  {
    rank: 2,
    username: "Jordan Park",
    level: 7,
    totalXP: 4100,
    streak: 12,
    badges: 8,
    rank_title: "Adept",
  },
  {
    rank: 3,
    username: "Taylor Swift",
    level: 6,
    totalXP: 3200,
    streak: 8,
    badges: 6,
    rank_title: "Adept",
  },
  {
    rank: 4,
    username: "Casey Morgan",
    level: 5,
    totalXP: 2450,
    streak: 5,
    badges: 5,
    rank_title: "Initiate",
  },
  {
    rank: 5,
    username: "Riley Adams",
    level: 5,
    totalXP: 2100,
    streak: 3,
    badges: 4,
    rank_title: "Initiate",
  },
  {
    rank: 6,
    username: "Morgan Lee",
    level: 4,
    totalXP: 1800,
    streak: 7,
    badges: 3,
    rank_title: "Initiate",
  },
  {
    rank: 7,
    username: "Casey Williams",
    level: 4,
    totalXP: 1500,
    streak: 2,
    badges: 3,
    rank_title: "Awakened",
  },
  {
    rank: 8,
    username: "Alex Thompson",
    level: 3,
    totalXP: 1100,
    streak: 4,
    badges: 2,
    rank_title: "Awakened",
  },
]

const streakLeaders = [...leaderboardData].sort((a, b) => b.streak - a.streak)
const xpLeaders = [...leaderboardData].sort((a, b) => b.totalXP - a.totalXP)

export default function LeaderboardPage() {
  return (
    <div className="p-4 md:p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Global Leaderboard</h1>
        <p className="text-muted-foreground mt-1">Compete with other learners and climb the ranks</p>
      </div>

      {/* Tabs for different leaderboards */}
      <Tabs defaultValue="overall" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overall">Overall Rank</TabsTrigger>
          <TabsTrigger value="streak">Streak Leaders</TabsTrigger>
          <TabsTrigger value="xp">XP Leaders</TabsTrigger>
        </TabsList>

        {/* Overall Leaderboard */}
        <TabsContent value="overall" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-3">
                {leaderboardData.map((user, idx) => (
                  <div
                    key={user.rank}
                    className={`flex items-center justify-between p-4 rounded-lg border transition ${
                      idx === 0
                        ? "bg-yellow-500/5 border-yellow-500/30"
                        : idx === 1
                          ? "bg-gray-500/5 border-gray-500/30"
                          : idx === 2
                            ? "bg-orange-500/5 border-orange-500/30"
                            : "bg-muted border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                        {user.rank === 1 ? "🥇" : user.rank === 2 ? "🥈" : user.rank === 3 ? "🥉" : user.rank}
                      </div>
                      <div>
                        <p className="font-semibold">{user.username}</p>
                        <p className="text-xs text-foreground/60">{user.rank_title}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 text-right">
                      <div>
                        <p className="text-sm text-foreground/60">Level</p>
                        <p className="font-bold text-primary">{user.level}</p>
                      </div>
                      <div>
                        <p className="text-sm text-foreground/60 flex items-center gap-1">
                          <Zap className="w-3 h-3" /> XP
                        </p>
                        <p className="font-bold">{user.totalXP}</p>
                      </div>
                      <div>
                        <p className="text-sm text-foreground/60 flex items-center gap-1">
                          <Flame className="w-3 h-3" /> Streak
                        </p>
                        <p className="font-bold text-accent">{user.streak}</p>
                      </div>
                      <div className="w-12 text-right">
                        <p className="text-sm text-foreground/60">Badges</p>
                        <p className="font-bold">{user.badges}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Streak Leaderboard */}
        <TabsContent value="streak" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-3">
                {streakLeaders.map((user, idx) => (
                  <div
                    key={user.rank}
                    className="flex items-center justify-between p-4 rounded-lg bg-muted border border-border hover:border-primary/50 transition"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <Flame className="w-5 h-5 text-accent" />
                      <div>
                        <p className="font-semibold">{user.username}</p>
                        <p className="text-xs text-foreground/60">{user.streak} day streak</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-accent text-lg">{user.streak} days</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* XP Leaderboard */}
        <TabsContent value="xp" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-3">
                {xpLeaders.map((user, idx) => (
                  <div
                    key={user.rank}
                    className="flex items-center justify-between p-4 rounded-lg bg-muted border border-border hover:border-primary/50 transition"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <Zap className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-semibold">{user.username}</p>
                        <p className="text-xs text-foreground/60">Level {user.level}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-primary text-lg">{user.totalXP} XP</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Your Rank Section */}
      <Card className="border-primary/30 bg-primary/5">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-foreground/60 font-semibold mb-1">YOUR RANK</p>
              <h3 className="text-2xl font-bold">Ranked #4 Globally</h3>
              <p className="text-sm text-foreground/60 mt-1">You're 750 XP away from Master rank</p>
            </div>
            <Trophy className="w-12 h-12 text-primary" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
