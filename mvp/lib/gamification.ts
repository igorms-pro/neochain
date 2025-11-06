// Gamification system - XP, Badges, Progression

export interface UserStats {
  userId: string
  level: number
  totalXP: number
  currentLevelXP: number
  streak: number
  badges: BadgeId[]
  completedMissions: number
  rank: "Awakened" | "Initiate" | "Adept" | "Master" | "Legend"
}

export type BadgeId =
  | "first-step"
  | "web3-curious"
  | "speed-runner"
  | "streak-master"
  | "explorer"
  | "mission-master"
  | "xp-collector"
  | "perfectionist"
  | "level-5"
  | "level-10"

export interface Badge {
  id: BadgeId
  name: string
  description: string
  icon: string
  rarity: "common" | "uncommon" | "rare" | "epic" | "legendary"
  condition: (stats: UserStats) => boolean
}

// XP Requirements for each level
export const LEVEL_XP_REQUIREMENTS: Record<number, number> = {
  1: 0,
  2: 250,
  3: 600,
  4: 1100,
  5: 1750,
  6: 2550,
  7: 3500,
  8: 4600,
  9: 5850,
  10: 7250,
}

// Badge definitions
export const BADGES: Record<BadgeId, Badge> = {
  "first-step": {
    id: "first-step",
    name: "First Step",
    description: "Complete your first mission",
    icon: "👣",
    rarity: "common",
    condition: (stats) => stats.completedMissions >= 1,
  },
  "web3-curious": {
    id: "web3-curious",
    name: "Web3 Curious",
    description: "Earn 500 XP",
    icon: "🔍",
    rarity: "common",
    condition: (stats) => stats.totalXP >= 500,
  },
  "speed-runner": {
    id: "speed-runner",
    name: "Speed Runner",
    description: "Complete a mission in under 30 minutes",
    icon: "⚡",
    rarity: "uncommon",
    condition: (stats) => stats.totalXP >= 1000, // Simplified for demo
  },
  "streak-master": {
    id: "streak-master",
    name: "Streak Master",
    description: "Maintain a 7-day streak",
    icon: "🔥",
    rarity: "uncommon",
    condition: (stats) => stats.streak >= 7,
  },
  explorer: {
    id: "explorer",
    name: "Explorer",
    description: "Complete 5 different missions",
    icon: "🗺️",
    rarity: "rare",
    condition: (stats) => stats.completedMissions >= 5,
  },
  "mission-master": {
    id: "mission-master",
    name: "Mission Master",
    description: "Complete all available missions",
    icon: "🎖️",
    rarity: "epic",
    condition: (stats) => stats.completedMissions >= 10,
  },
  "xp-collector": {
    id: "xp-collector",
    name: "XP Collector",
    description: "Earn 5000 total XP",
    icon: "💎",
    rarity: "epic",
    condition: (stats) => stats.totalXP >= 5000,
  },
  perfectionist: {
    id: "perfectionist",
    name: "Perfectionist",
    description: "Score 100% on all quizzes in a mission",
    icon: "✨",
    rarity: "rare",
    condition: (stats) => stats.totalXP >= 2000, // Simplified
  },
  "level-5": {
    id: "level-5",
    name: "Level 5 Reached",
    description: "Reach level 5",
    icon: "⭐",
    rarity: "uncommon",
    condition: (stats) => stats.level >= 5,
  },
  "level-10": {
    id: "level-10",
    name: "Level 10 Legend",
    description: "Reach level 10",
    icon: "👑",
    rarity: "legendary",
    condition: (stats) => stats.level >= 10,
  },
}

// Rank progression
export const RANK_LEVELS: Record<
  "Awakened" | "Initiate" | "Adept" | "Master" | "Legend",
  { minLevel: number; minXP: number }
> = {
  Awakened: { minLevel: 1, minXP: 0 },
  Initiate: { minLevel: 3, minXP: 600 },
  Adept: { minLevel: 6, minXP: 2550 },
  Master: { minLevel: 8, minXP: 4600 },
  Legend: { minLevel: 10, minXP: 7250 },
}

export function calculateLevel(totalXP: number): number {
  for (let level = 10; level >= 1; level--) {
    if (totalXP >= LEVEL_XP_REQUIREMENTS[level]) {
      return level
    }
  }
  return 1
}

export function getXPForCurrentLevel(totalXP: number): number {
  const currentLevel = calculateLevel(totalXP)
  return totalXP - LEVEL_XP_REQUIREMENTS[currentLevel]
}

export function getXPToNextLevel(totalXP: number): number {
  const currentLevel = calculateLevel(totalXP)
  if (currentLevel >= 10) return 0
  const nextLevelRequirement = LEVEL_XP_REQUIREMENTS[currentLevel + 1]
  return nextLevelRequirement - totalXP
}

export function getRank(totalXP: number, level: number): "Awakened" | "Initiate" | "Adept" | "Master" | "Legend" {
  if (level >= RANK_LEVELS.Legend.minLevel && totalXP >= RANK_LEVELS.Legend.minXP) return "Legend"
  if (level >= RANK_LEVELS.Master.minLevel && totalXP >= RANK_LEVELS.Master.minXP) return "Master"
  if (level >= RANK_LEVELS.Adept.minLevel && totalXP >= RANK_LEVELS.Adept.minXP) return "Adept"
  if (level >= RANK_LEVELS.Initiate.minLevel && totalXP >= RANK_LEVELS.Initiate.minXP) return "Initiate"
  return "Awakened"
}

export function getUnlockedBadges(stats: UserStats): BadgeId[] {
  return (Object.values(BADGES) as Badge[]).filter((badge) => badge.condition(stats)).map((badge) => badge.id)
}

export function getProgressionPercentage(totalXP: number): number {
  const currentLevel = calculateLevel(totalXP)
  if (currentLevel >= 10) return 100
  const currentLevelXP = getXPForCurrentLevel(totalXP)
  const nextLevelTotal = LEVEL_XP_REQUIREMENTS[currentLevel + 1] - LEVEL_XP_REQUIREMENTS[currentLevel]
  return Math.round((currentLevelXP / nextLevelTotal) * 100)
}
