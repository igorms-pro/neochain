"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MissionCard } from "@/components/mission-card"

const missions = [
  {
    id: 1,
    title: "Awakening",
    description: "Understand blockchain fundamentals, cryptography, and decentralization.",
    progress: 100,
    status: "completed" as const,
    xp: 500,
    difficulty: "Beginner",
    tasks: 5,
  },
  {
    id: 2,
    title: "Smart Contracts Unlocked",
    description: "Deploy your first smart contract and interact with the Ethereum testnet.",
    progress: 65,
    status: "in-progress" as const,
    xp: 750,
    difficulty: "Intermediate",
    tasks: 4,
  },
  {
    id: 3,
    title: "DeFi Explorer",
    description: "Navigate yield farming, liquidity pools, and decentralized exchanges.",
    progress: 30,
    status: "in-progress" as const,
    xp: 1000,
    difficulty: "Advanced",
    tasks: 6,
  },
  {
    id: 4,
    title: "NFT Mastery",
    description: "Create and manage NFTs on various blockchains.",
    progress: 0,
    status: "locked" as const,
    xp: 1250,
    difficulty: "Advanced",
    tasks: 5,
  },
]

export default function MissionsPage() {
  return (
    <div className="p-4 md:p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Your Missions</h1>
        <p className="text-muted-foreground mt-1">Complete challenges to earn XP and level up</p>
      </div>

      {/* Filters */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="active">In Progress</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4 mt-4">
          <div className="grid grid-cols-1 gap-4">
            {missions.map((mission) => (
              <MissionCard key={mission.id} {...mission} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="active" className="space-y-4 mt-4">
          <div className="grid grid-cols-1 gap-4">
            {missions
              .filter((m) => m.status === "in-progress")
              .map((mission) => (
                <MissionCard key={mission.id} {...mission} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="completed" className="space-y-4 mt-4">
          <div className="grid grid-cols-1 gap-4">
            {missions
              .filter((m) => m.status === "completed")
              .map((mission) => (
                <MissionCard key={mission.id} {...mission} />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
