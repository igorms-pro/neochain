"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, ArrowLeft, Zap } from "lucide-react"
import Link from "next/link"

// Mock mission data
const missionDetails: Record<number, any> = {
  1: {
    title: "Awakening",
    description: "Understand blockchain fundamentals, cryptography, and decentralization.",
    difficulty: "Beginner",
    xp: 500,
    progress: 100,
    status: "completed",
    sections: [
      {
        id: 1,
        title: "What is Blockchain?",
        content:
          "A blockchain is a distributed ledger technology that maintains a secure and decentralized record of transactions. Each block contains cryptographic hashes linking it to the previous block, creating an immutable chain.",
        type: "reading",
        completed: true,
      },
      {
        id: 2,
        title: "Cryptography Basics",
        content:
          "Cryptography secures blockchain by using public and private key pairs. Your private key signs transactions, while your public key verifies them without revealing the private key.",
        type: "reading",
        completed: true,
      },
      {
        id: 3,
        title: "Quiz: Blockchain Fundamentals",
        content: "Test your understanding of blockchain basics",
        type: "quiz",
        completed: true,
        questions: [
          {
            q: "What is the primary purpose of a blockchain?",
            options: [
              "To store data decentralized and securely",
              "To increase transaction speed",
              "To replace the internet",
            ],
            correct: 0,
          },
          {
            q: "What does a hash do in blockchain?",
            options: [
              "Encrypts all data",
              "Creates a unique fingerprint of data that changes if data is altered",
              "Stores user identities",
            ],
            correct: 1,
          },
        ],
      },
      {
        id: 4,
        title: "Interactive: Create a Digital Wallet",
        content: "Learn how to generate and secure a private key",
        type: "interactive",
        completed: true,
      },
      {
        id: 5,
        title: "Challenge: Understanding Consensus",
        content: "Explain how Proof of Work differs from Proof of Stake",
        type: "challenge",
        completed: true,
      },
    ],
  },
  2: {
    title: "Smart Contracts Unlocked",
    description: "Deploy your first smart contract and interact with the Ethereum testnet.",
    difficulty: "Intermediate",
    xp: 750,
    progress: 65,
    status: "in-progress",
    sections: [
      {
        id: 1,
        title: "Solidity Introduction",
        content: "Learn the fundamentals of Solidity, the programming language for smart contracts on Ethereum.",
        type: "reading",
        completed: true,
      },
      {
        id: 2,
        title: "Smart Contract Basics",
        content:
          "Smart contracts are self-executing contracts with the terms written in code. They automatically execute when conditions are met.",
        type: "reading",
        completed: true,
      },
      {
        id: 3,
        title: "Quiz: Smart Contract Concepts",
        content: "Test your knowledge",
        type: "quiz",
        completed: false,
        questions: [
          {
            q: "What is a smart contract?",
            options: [
              "A legal contract stored online",
              "Self-executing code deployed on blockchain",
              "A digital signature",
            ],
            correct: 1,
          },
        ],
      },
      {
        id: 4,
        title: "Deploy Your First Contract",
        content: "Deploy a simple ERC-20 token to the testnet",
        type: "interactive",
        completed: false,
      },
    ],
  },
  3: {
    title: "DeFi Explorer",
    description: "Navigate yield farming, liquidity pools, and decentralized exchanges.",
    difficulty: "Advanced",
    xp: 1000,
    progress: 30,
    status: "in-progress",
    sections: [
      {
        id: 1,
        title: "DeFi Protocols Overview",
        content: "Understand lending protocols, AMMs, and yield farming mechanisms.",
        type: "reading",
        completed: true,
      },
      {
        id: 2,
        title: "Liquidity Pools Deep Dive",
        content: "Learn how automated market makers work and provide liquidity.",
        type: "reading",
        completed: false,
      },
    ],
  },
}

export default function MissionDetailPage({ params }: { params: { id: string } }) {
  const missionId = Number.parseInt(params.id)
  const mission = missionDetails[missionId]
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0)
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({})
  const [sectionProgress, setSectionProgress] = useState<Record<number, boolean>>(
    mission.sections.reduce(
      (acc, s) => {
        acc[s.id] = s.completed
        return acc
      },
      {} as Record<number, boolean>,
    ),
  )

  if (!mission) {
    return <div className="p-8">Mission not found</div>
  }

  const currentSection = mission.sections[currentSectionIndex]
  const completedSections = Object.values(sectionProgress).filter(Boolean).length

  const handleQuizAnswer = (questionIndex: number, answerIndex: number) => {
    setQuizAnswers({ ...quizAnswers, [questionIndex]: answerIndex })
  }

  const handleCompleteSection = () => {
    setSectionProgress({ ...sectionProgress, [currentSection.id]: true })
    if (currentSectionIndex < mission.sections.length - 1) {
      setCurrentSectionIndex(currentSectionIndex + 1)
    }
  }

  const isQuizComplete =
    currentSection.type === "quiz" && currentSection.questions.length === Object.keys(quizAnswers).length

  return (
    <div className="p-4 md:p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/app/missions">
          <Button variant="outline" size="icon">
            <ArrowLeft className="w-4 h-4" />
          </Button>
        </Link>
        <div className="flex-1">
          <h1 className="text-3xl font-bold">{mission.title}</h1>
          <p className="text-foreground/60 mt-1">{mission.description}</p>
        </div>
      </div>

      {/* Mission Stats */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-foreground/60 font-semibold">Difficulty</p>
            <p className="text-lg font-bold">{mission.difficulty}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-foreground/60 font-semibold">Reward</p>
            <p className="text-lg font-bold text-primary flex items-center gap-1">
              <Zap className="w-4 h-4" /> {mission.xp} XP
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-foreground/60 font-semibold">Sections</p>
            <p className="text-lg font-bold">
              {completedSections}/{mission.sections.length}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-foreground/60 font-semibold">Overall Progress</p>
            <p className="text-lg font-bold">{mission.progress}%</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Sections Sidebar */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-6 space-y-2">
              <h3 className="font-semibold text-lg mb-4">Mission Sections</h3>
              {mission.sections.map((section, idx) => (
                <button
                  key={section.id}
                  onClick={() => setCurrentSectionIndex(idx)}
                  className={`w-full text-left p-3 rounded-lg transition ${
                    currentSectionIndex === idx
                      ? "bg-primary/20 border border-primary text-primary"
                      : sectionProgress[section.id]
                        ? "bg-muted hover:bg-muted/80 border border-transparent"
                        : "bg-muted/50 hover:bg-muted border border-transparent opacity-60"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {sectionProgress[section.id] ? (
                      <CheckCircle className="w-4 h-4 flex-shrink-0" />
                    ) : (
                      <div className="w-4 h-4 rounded-full border border-current flex-shrink-0" />
                    )}
                    <span className="text-sm font-medium truncate">{section.title}</span>
                  </div>
                </button>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-6 space-y-6">
              {/* Section Header */}
              <div>
                <Badge className="mb-2">{currentSection.type}</Badge>
                <h2 className="text-2xl font-bold">{currentSection.title}</h2>
              </div>

              {/* Content Based on Type */}
              {currentSection.type === "reading" && (
                <div className="prose prose-invert max-w-none">
                  <p className="text-foreground/80 leading-relaxed">{currentSection.content}</p>
                </div>
              )}

              {currentSection.type === "quiz" && (
                <div className="space-y-6">
                  {currentSection.questions.map((question, qIdx) => (
                    <div key={qIdx} className="space-y-3 p-4 rounded-lg bg-muted">
                      <p className="font-semibold">{question.q}</p>
                      <div className="space-y-2">
                        {question.options.map((option, oIdx) => (
                          <button
                            key={oIdx}
                            onClick={() => handleQuizAnswer(qIdx, oIdx)}
                            className={`w-full text-left p-3 rounded-lg border transition ${
                              quizAnswers[qIdx] === oIdx
                                ? oIdx === question.correct
                                  ? "border-green-500 bg-green-500/10"
                                  : "border-destructive bg-destructive/10"
                                : "border-border hover:border-primary/50"
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {currentSection.type === "interactive" && (
                <div className="space-y-4 p-4 rounded-lg bg-muted">
                  <p className="text-foreground/80">{currentSection.content}</p>
                  <div className="p-4 rounded-lg bg-background border border-border">
                    <p className="text-sm text-foreground/60 mb-3">Interactive Learning Environment</p>
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                      <p className="text-foreground/40">Interactive component would render here</p>
                    </div>
                  </div>
                </div>
              )}

              {currentSection.type === "challenge" && (
                <div className="space-y-4 p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <p className="text-foreground/80">{currentSection.content}</p>
                  <textarea
                    placeholder="Write your response here..."
                    className="w-full p-3 rounded-lg bg-background border border-border text-foreground placeholder-foreground/40 focus:border-primary outline-none transition"
                    rows={4}
                  />
                </div>
              )}

              {/* Progress Indicator */}
              <div className="space-y-2 pt-4 border-t border-border">
                <div className="flex justify-between text-sm">
                  <span className="text-foreground/60">Progress</span>
                  <span className="font-semibold">
                    {completedSections}/{mission.sections.length} sections
                  </span>
                </div>
                <Progress value={(completedSections / mission.sections.length) * 100} />
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-3 pt-4 border-t border-border">
                <Button
                  variant="outline"
                  onClick={() => currentSectionIndex > 0 && setCurrentSectionIndex(currentSectionIndex - 1)}
                  disabled={currentSectionIndex === 0}
                >
                  Previous
                </Button>
                <Button
                  disabled={currentSection.type === "quiz" && !isQuizComplete}
                  onClick={handleCompleteSection}
                  className="flex-1"
                >
                  {sectionProgress[currentSection.id] ? "Section Completed ✓" : "Mark as Complete"}
                </Button>
                <Button
                  variant="outline"
                  onClick={() =>
                    currentSectionIndex < mission.sections.length - 1 && setCurrentSectionIndex(currentSectionIndex + 1)
                  }
                  disabled={currentSectionIndex === mission.sections.length - 1}
                >
                  Next
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
