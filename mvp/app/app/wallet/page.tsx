"use client"

import { useState } from "react"
import { Wallet, Copy, ExternalLink, Send, TrendingUp, AlertCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useWeb3 } from "@/lib/web3-context"
import { TESTNET_CONFIG, type TestnetKey } from "@/lib/web3-config"

export default function WalletPage() {
  const { wallet, connectWallet, disconnectWallet, switchNetwork, clearError } = useWeb3()
  const [selectedNetwork, setSelectedNetwork] = useState<TestnetKey>("sepolia")
  const [isCopied, setIsCopied] = useState(false)

  const mockTransactions = [
    {
      id: 1,
      type: "sent",
      to: "0x1234...5678",
      amount: "0.5",
      token: "ETH",
      timestamp: "2 hours ago",
      hash: "0xabcd...ef01",
    },
    {
      id: 2,
      type: "received",
      from: "0x9abc...def2",
      amount: "1.0",
      token: "TEST",
      timestamp: "5 hours ago",
      hash: "0x1234...5678",
    },
    {
      id: 3,
      type: "contract",
      action: "Swap tokens on Uniswap",
      amount: "0.1",
      token: "ETH",
      timestamp: "1 day ago",
      hash: "0xabcd...1234",
    },
  ]

  const handleConnectWallet = () => {
    connectWallet(selectedNetwork)
  }

  const handleSwitchNetwork = (newNetwork: TestnetKey) => {
    setSelectedNetwork(newNetwork)
    if (wallet.isConnected) {
      switchNetwork(newNetwork)
    }
  }

  const copyAddress = () => {
    if (wallet.address) {
      navigator.clipboard.writeText(wallet.address)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    }
  }

  const viewOnExplorer = () => {
    if (wallet.address && wallet.network) {
      const config = TESTNET_CONFIG[wallet.network]
      window.open(`${config.blockExplorer}/address/${wallet.address}`, "_blank")
    }
  }

  const openFaucet = () => {
    if (wallet.network) {
      const config = TESTNET_CONFIG[wallet.network]
      window.open(config.faucet, "_blank")
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Wallet Manager</h1>
        <p className="text-foreground/60 mt-2">Manage your testnet wallet and track transactions</p>
      </div>

      {wallet.error && (
        <Alert className="bg-destructive/10 border-destructive/30">
          <AlertCircle className="h-4 w-4 text-destructive" />
          <AlertDescription>
            {wallet.error}
            <Button variant="ghost" size="sm" onClick={clearError} className="ml-2 h-auto p-0">
              Dismiss
            </Button>
          </AlertDescription>
        </Alert>
      )}

      {!wallet.isConnected ? (
        <Card className="border-primary/30 bg-gradient-to-br from-primary/10 to-accent/10">
          <CardHeader className="text-center">
            <CardTitle>Connect Your Wallet</CardTitle>
            <CardDescription>Start interacting with testnet contracts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Select Network</label>
                <select
                  value={selectedNetwork}
                  onChange={(e) => setSelectedNetwork(e.target.value as TestnetKey)}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {Object.entries(TESTNET_CONFIG).map(([key, config]) => (
                    <option key={key} value={key}>
                      {config.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <Button onClick={handleConnectWallet} size="lg" className="w-full" disabled={wallet.isLoading}>
              <Wallet className="w-5 h-5 mr-2" />
              {wallet.isLoading ? "Connecting..." : "Connect Wallet"}
            </Button>
          </CardContent>
        </Card>
      ) : (
        <>
          <Alert className="bg-primary/10 border-primary/30">
            <Wallet className="h-4 w-4 text-primary" />
            <AlertDescription>
              Connected to {wallet.network ? TESTNET_CONFIG[wallet.network].name : "Unknown Network"} •{" "}
              {wallet.address?.slice(0, 6)}...{wallet.address?.slice(-4)}
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Wallet Balance</span>
                  <TrendingUp className="w-5 h-5 text-primary" />
                </CardTitle>
                <CardDescription>
                  Testnet {wallet.network ? TESTNET_CONFIG[wallet.network].nativeCurrency.symbol : "ETH"} Balance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-4xl font-bold text-primary">{wallet.balance}</p>
                    <p className="text-sm text-foreground/60">
                      {wallet.network ? TESTNET_CONFIG[wallet.network].nativeCurrency.symbol : "ETH"}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={copyAddress}>
                      <Copy className="w-4 h-4 mr-2" />
                      {isCopied ? "Copied!" : "Copy Address"}
                    </Button>
                    <Button variant="outline" size="sm" onClick={viewOnExplorer}>
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View on Explorer
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Interact with testnet</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button className="w-full justify-start">
                  <Send className="w-4 h-4 mr-2" />
                  Send Transaction
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent" onClick={openFaucet}>
                  Get Testnet Tokens
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  Deploy Test Contract
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Select Network</CardTitle>
              <CardDescription>Switch between different testnets</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-3">
                {Object.entries(TESTNET_CONFIG).map(([key, config]) => (
                  <Button
                    key={key}
                    variant={wallet.network === key ? "default" : "outline"}
                    className="justify-start"
                    onClick={() => handleSwitchNetwork(key as TestnetKey)}
                    disabled={wallet.isLoading}
                  >
                    <div className="w-2 h-2 rounded-full bg-current mr-2" />
                    {config.name}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Transaction History</CardTitle>
              <CardDescription>Recent blockchain interactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockTransactions.map((tx) => (
                  <div
                    key={tx.id}
                    className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          tx.type === "sent"
                            ? "bg-red-500/20 text-red-500"
                            : tx.type === "received"
                              ? "bg-green-500/20 text-green-500"
                              : "bg-primary/20 text-primary"
                        }`}
                      >
                        <Send className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">
                          {tx.type === "sent" ? "Sent to" : tx.type === "received" ? "Received from" : tx.action}
                        </p>
                        <p className="text-sm text-foreground/60">{tx.timestamp}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p
                        className={`font-semibold ${tx.type === "sent" ? "text-red-500" : tx.type === "received" ? "text-green-500" : "text-primary"}`}
                      >
                        {tx.type === "sent" ? "-" : tx.type === "received" ? "+" : ""} {tx.amount} {tx.token}
                      </p>
                      <a
                        href={`${wallet.network ? TESTNET_CONFIG[wallet.network].blockExplorer : ""}${"/tx/"}${tx.hash}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-primary hover:underline"
                      >
                        {tx.hash}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Button onClick={disconnectWallet} variant="destructive" className="w-full">
            Disconnect Wallet
          </Button>
        </>
      )}
    </div>
  )
}
