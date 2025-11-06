"use client"

import Link from "next/link"
import { ArrowRight, Zap, Gamepad2, Wallet } from "lucide-react"

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/10">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">
            NEO<span className="text-accent">CHAIN</span>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#features" className="text-foreground/70 hover:text-foreground transition">
              Features
            </a>
            <a href="#missions" className="text-foreground/70 hover:text-foreground transition">
              Missions
            </a>
            <a href="#about" className="text-foreground/70 hover:text-foreground transition">
              About
            </a>
            <Link
              href="/app"
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition"
            >
              Launch App
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-8 mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-balance">
              Awaken to <span className="text-primary text-glow">Web3</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 text-balance max-w-2xl mx-auto">
              Master blockchain through immersive missions, real testnet interactions, and gamified progression. Your
              journey into decentralization starts now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/app"
                className="px-8 py-4 bg-primary text-primary-foreground text-lg font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition flex items-center justify-center gap-2 group"
              >
                Begin Your Awakening <ArrowRight className="group-hover:translate-x-1 transition" />
              </Link>
              <button className="px-8 py-4 border border-primary text-primary rounded-lg text-lg font-semibold hover:bg-primary/10 transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Feature Cards */}
          <div id="features" className="grid md:grid-cols-3 gap-6 mt-24">
            <div className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition group">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition">
                <Zap className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Interactive Missions</h3>
              <p className="text-foreground/60">
                Complete blockchain challenges directly in the browser with real testnet integration
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition group">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition">
                <Gamepad2 className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Gamified Learning</h3>
              <p className="text-foreground/60">
                Earn XP, unlock badges, and climb the leaderboard as you level up your Web3 knowledge
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition group">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition">
                <Wallet className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Wallet Integration</h3>
              <p className="text-foreground/60">
                Connect your wallet and practice real transactions in a safe, guided environment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Missions Preview Section */}
      <section id="missions" className="py-20 px-4 bg-secondary/5 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">The Path of Réveil</h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              Experience a narrative-driven journey through blockchain fundamentals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-card border border-primary/30 rounded-lg p-6 hover:border-primary/60 transition">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    1
                  </div>
                  <h3 className="font-semibold">Awakening</h3>
                </div>
                <p className="text-foreground/60 text-sm">
                  Understand the fundamentals of blockchain, cryptography, and decentralization
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    2
                  </div>
                  <h3 className="font-semibold">Smart Contracts Unlocked</h3>
                </div>
                <p className="text-foreground/60 text-sm">
                  Deploy your first smart contract and interact with the Ethereum testnet
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    3
                  </div>
                  <h3 className="font-semibold">DeFi Explorer</h3>
                </div>
                <p className="text-foreground/60 text-sm">
                  Navigate yield farming, liquidity pools, and decentralized exchanges
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-8 flex flex-col justify-center">
              <div className="space-y-6">
                <div>
                  <div className="text-sm font-semibold text-primary mb-2">YOUR PROGRESS</div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full w-1/3"></div>
                  </div>
                  <p className="text-sm text-foreground/60 mt-2">Level 5 - Initiate</p>
                </div>

                <div className="space-y-2">
                  <div className="text-sm text-foreground/60">Current Streak</div>
                  <p className="text-3xl font-bold text-primary">12 Days</p>
                </div>

                <div className="space-y-2">
                  <div className="text-sm text-foreground/60">Total XP Earned</div>
                  <p className="text-2xl font-bold text-accent">2,450 XP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold">Ready to Begin?</h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            NeoChain transforms complex blockchain concepts into engaging, interactive experiences. No prior crypto
            knowledge required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/app"
              className="px-8 py-4 bg-primary text-primary-foreground text-lg font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition"
            >
              Start Learning Now
            </Link>
            <Link
              href="/app/missions"
              className="px-8 py-4 border border-primary text-primary rounded-lg text-lg font-semibold hover:bg-primary/10 transition"
            >
              Explore Missions
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <p className="font-bold text-primary mb-4">
                NEO<span className="text-accent">CHAIN</span>
              </p>
              <p className="text-foreground/60 text-sm">Learning Web3, made immersive.</p>
            </div>
            <div>
              <p className="font-semibold mb-4">Product</p>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Missions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-4">Community</p>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Docs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-4">Legal</p>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-foreground/60">
            <p>&copy; 2025 NeoChain. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
