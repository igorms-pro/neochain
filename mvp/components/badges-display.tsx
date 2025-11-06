"use client"

import { Card, CardContent } from "@/components/ui/card"
import { BADGES, type BadgeId } from "@/lib/gamification"
import { Lock } from "lucide-react"

interface BadgesDisplayProps {
  unlockedBadges: BadgeId[]
}

export function BadgesDisplay({ unlockedBadges }: BadgesDisplayProps) {
  const rarityColors = {
    common: "bg-slate-500/20 border-slate-500/30",
    uncommon: "bg-green-500/20 border-green-500/30",
    rare: "bg-blue-500/20 border-blue-500/30",
    epic: "bg-purple-500/20 border-purple-500/30",
    legendary: "bg-yellow-500/20 border-yellow-500/30",
  }

  const rarityTextColors = {
    common: "text-slate-400",
    uncommon: "text-green-400",
    rare: "text-blue-400",
    epic: "text-purple-400",
    legendary: "text-yellow-400",
  }

  return (
    <Card className="border-border">
      <CardContent className="p-6 space-y-4">
        <h3 className="text-lg font-semibold">Badges ({unlockedBadges.length})</h3>
        <div className="grid grid-cols-4 gap-3">
          {Object.values(BADGES).map((badge) => {
            const isUnlocked = unlockedBadges.includes(badge.id)
            return (
              <div
                key={badge.id}
                className={`flex flex-col items-center gap-2 p-3 rounded-lg border transition ${
                  isUnlocked ? `${rarityColors[badge.rarity]}` : "bg-muted/50 border-muted opacity-50"
                }`}
                title={badge.description}
              >
                <div className="text-3xl">{badge.icon}</div>
                {!isUnlocked && <Lock className="w-4 h-4 absolute text-foreground/40 -translate-y-1 translate-x-3" />}
                <p
                  className={`text-xs text-center font-semibold ${isUnlocked ? rarityTextColors[badge.rarity] : "text-foreground/40"}`}
                >
                  {badge.name}
                </p>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
