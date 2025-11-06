"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  calculateLevel,
  getXPForCurrentLevel,
  getXPToNextLevel,
  getRank,
  getProgressionPercentage,
} from "@/lib/gamification"
import { Star, Zap, Award } from "lucide-react"

interface ProgressionCardProps {
  totalXP: number
}

export function ProgressionCard({ totalXP }: ProgressionCardProps) {
  const level = calculateLevel(totalXP)
  const currentLevelXP = getXPForCurrentLevel(totalXP)
  const xpToNext = getXPToNextLevel(totalXP)
  const rank = getRank(totalXP, level)
  const progressPercentage = getProgressionPercentage(totalXP)

  const rankColors = {
    Awakened: "text-blue-500",
    Initiate: "text-cyan-500",
    Adept: "text-purple-500",
    Master: "text-orange-500",
    Legend: "text-yellow-500",
  }

  return (
    <Card className="border-border">
      <CardContent className="p-6 space-y-6">
        {/* Header */}
        <div>
          <p className="text-foreground/60 text-sm font-semibold mb-2">YOUR PROGRESSION</p>
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">Level {level}</h3>
            <span className={`font-bold text-lg ${rankColors[rank]}`}>{rank}</span>
          </div>
        </div>

        {/* Level Progress */}
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-foreground/60">Progress to Level {level === 10 ? "10" : level + 1}</span>
            <span className="font-semibold">{progressPercentage}%</span>
          </div>
          <Progress value={progressPercentage} />
          <p className="text-xs text-foreground/60">
            {currentLevelXP} XP earned • {xpToNext} XP to next level
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border">
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <Zap className="w-5 h-5 text-primary" />
            </div>
            <p className="text-xs text-foreground/60 mb-1">Total XP</p>
            <p className="font-bold">{totalXP}</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <Star className="w-5 h-5 text-accent" />
            </div>
            <p className="text-xs text-foreground/60 mb-1">Level</p>
            <p className="font-bold">{level}</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <Award className="w-5 h-5 text-primary" />
            </div>
            <p className="text-xs text-foreground/60 mb-1">Rank</p>
            <p className="font-bold text-sm">{rank}</p>
          </div>
        </div>

        {/* Milestone Info */}
        {level < 10 && (
          <div className="p-3 rounded-lg bg-muted text-sm">
            <p className="font-semibold mb-1">Next Milestone</p>
            <p className="text-foreground/60">
              Reach Level {level + 1} to unlock {rank === "Awakened" ? "Initiate" : "Adept"} status
            </p>
          </div>
        )}
        {level === 10 && (
          <div className="p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/30 text-sm">
            <p className="font-semibold text-yellow-500 mb-1">Maximum Level Reached!</p>
            <p className="text-foreground/60">You've achieved Legend status. Congratulations!</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
