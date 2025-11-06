"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Lock, Play, CheckCircle, Star } from "lucide-react"

interface MissionCardProps {
  id: number
  title: string
  description: string
  difficulty: string
  xp: number
  progress: number
  status: "locked" | "completed" | "in-progress"
  tasks: number
}

export function MissionCard({ id, title, description, difficulty, xp, progress, status, tasks }: MissionCardProps) {
  const difficultyColors = {
    Beginner: "bg-blue-500/20 text-blue-500",
    Intermediate: "bg-yellow-500/20 text-yellow-500",
    Advanced: "bg-red-500/20 text-red-500",
  }

  return (
    <Card className={`border-border transition hover:border-primary/50 ${status === "locked" ? "opacity-60" : ""}`}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-semibold">{title}</h3>
              {status === "completed" && <CheckCircle className="w-5 h-5 text-green-500" />}
              {status === "locked" && <Lock className="w-5 h-5 text-muted-foreground" />}
              {status === "in-progress" && <Star className="w-5 h-5 text-accent animate-pulse" />}
            </div>
            <p className="text-sm text-muted-foreground mb-3">{description}</p>
            <div className="flex flex-wrap gap-2">
              <Badge className={difficultyColors[difficulty as keyof typeof difficultyColors]}>{difficulty}</Badge>
              <Badge variant="secondary">{tasks} Tasks</Badge>
              <Badge className="bg-primary/20 text-primary">+{xp} XP</Badge>
            </div>
          </div>
          <div className="ml-4">
            {status === "locked" ? (
              <Button disabled>
                <Lock className="w-4 h-4 mr-2" />
                Locked
              </Button>
            ) : status === "completed" ? (
              <Button variant="outline" disabled>
                <CheckCircle className="w-4 h-4 mr-2" />
                Done
              </Button>
            ) : (
              <Link href={`/app/missions/${id}`}>
                <Button>
                  <Play className="w-4 h-4 mr-2" />
                  Continue
                </Button>
              </Link>
            )}
          </div>
        </div>

        {status !== "locked" && (
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-semibold">{progress}%</span>
            </div>
            <Progress value={progress} />
          </div>
        )}
      </CardContent>
    </Card>
  )
}
