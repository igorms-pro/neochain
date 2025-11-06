"use client"

import { useState } from "react"
import { Code2, BookOpen, Zap, CheckCircle2, AlertCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useWeb3 } from "@/lib/web3-context"
import { TESTNET_CONFIG } from "@/lib/web3-config"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function TestnetPage() {
  const { wallet } = useWeb3()
  const [selectedContract, setSelectedContract] = useState("counter")
  const [deploymentStatus, setDeploymentStatus] = useState("ready")
  const [deployedAddress, setDeployedAddress] = useState<string | null>(null)

  const contracts = {
    counter: {
      name: "Counter Contract",
      description: "A simple contract to increment/decrement a counter",
      code: `pragma solidity ^0.8.0;

contract Counter {
    uint256 public count;
    
    function increment() public {
        count++;
    }
    
    function decrement() public {
        count--;
    }
}`,
      difficulty: "Beginner",
      xpReward: 50,
    },
    token: {
      name: "ERC-20 Token",
      description: "Create your own testnet token",
      code: `pragma solidity ^0.8.0;

contract TestToken {
    string public name = "Test Token";
    uint256 public totalSupply = 1000000;
    mapping(address => uint256) balances;
}`,
      difficulty: "Intermediate",
      xpReward: 100,
    },
  }

  const missions = [
    {
      id: 1,
      title: "Deploy Your First Contract",
      description: "Successfully deploy the Counter contract to Sepolia testnet",
      status: "active",
      progress: 60,
    },
    {
      id: 2,
      title: "Interact with Contract",
      description: "Call the increment function 5 times",
      status: "locked",
      progress: 0,
    },
    {
      id: 3,
      title: "Read Contract State",
      description: "Query the current counter value",
      status: "locked",
      progress: 0,
    },
  ]

  const handleDeploy = () => {
    if (!wallet.isConnected) {
      alert("Please connect your wallet first")
      return
    }
    setDeploymentStatus("deploying")
    setTimeout(() => {
      const mockAddress = "0x" + Math.random().toString(16).slice(2, 42)
      setDeployedAddress(mockAddress)
      setDeploymentStatus("deployed")
    }, 3000)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Testnet Playground</h1>
        <p className="text-foreground/60 mt-2">Write, deploy, and interact with smart contracts safely</p>
      </div>

      {!wallet.isConnected && (
        <Alert className="bg-amber-500/10 border-amber-500/30">
          <AlertCircle className="h-4 w-4 text-amber-500" />
          <AlertDescription>Connect your wallet to deploy and interact with smart contracts</AlertDescription>
        </Alert>
      )}

      <Tabs defaultValue="contracts" className="space-y-4">
        <TabsList>
          <TabsTrigger value="contracts">Smart Contracts</TabsTrigger>
          <TabsTrigger value="missions">Contract Missions</TabsTrigger>
          <TabsTrigger value="docs">Documentation</TabsTrigger>
        </TabsList>

        <TabsContent value="contracts" className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            {Object.entries(contracts).map(([key, contract]) => (
              <Card
                key={key}
                className={`cursor-pointer transition ${selectedContract === key ? "border-primary/50 bg-primary/5" : "border-border"}`}
                onClick={() => setSelectedContract(key)}
              >
                <CardHeader>
                  <CardTitle className="text-lg">{contract.name}</CardTitle>
                  <CardDescription>{contract.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium bg-primary/20 text-primary px-2 py-1 rounded">
                      {contract.difficulty}
                    </span>
                    <span className="text-sm font-semibold text-accent">{contract.xpReward} XP</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code2 className="w-5 h-5" />
                {contracts[selectedContract as keyof typeof contracts].name}
              </CardTitle>
              {wallet.network && <CardDescription>Network: {TESTNET_CONFIG[wallet.network].name}</CardDescription>}
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <pre>{contracts[selectedContract as keyof typeof contracts].code}</pre>
              </div>

              <div
                className={`p-4 rounded-lg border flex items-start gap-3 ${
                  deploymentStatus === "deployed"
                    ? "bg-green-500/10 border-green-500/30"
                    : "bg-blue-500/10 border-blue-500/30"
                }`}
              >
                {deploymentStatus === "deployed" ? (
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                )}
                <div className="flex-1">
                  <p className="font-medium">
                    {deploymentStatus === "ready"
                      ? "Ready to Deploy"
                      : deploymentStatus === "deploying"
                        ? "Deploying..."
                        : "Successfully Deployed!"}
                  </p>
                  <p className="text-sm text-foreground/60 mt-1">
                    {deploymentStatus === "deployed" && deployedAddress
                      ? `Contract deployed to ${deployedAddress.slice(0, 10)}...${deployedAddress.slice(-8)}`
                      : wallet.isConnected
                        ? "Click the button below to deploy to " +
                          (wallet.network ? TESTNET_CONFIG[wallet.network].name : "testnet")
                        : "Connect wallet to deploy"}
                  </p>
                </div>
              </div>

              <Button
                onClick={handleDeploy}
                disabled={deploymentStatus !== "ready" || !wallet.isConnected}
                className="w-full"
                size="lg"
              >
                <Zap className="w-5 h-5 mr-2" />
                {deploymentStatus === "ready"
                  ? "Deploy Contract"
                  : deploymentStatus === "deploying"
                    ? "Deploying..."
                    : "Deployed Successfully"}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="missions" className="space-y-4">
          <div className="space-y-3">
            {missions.map((mission) => (
              <Card key={mission.id}>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold">{mission.title}</h3>
                        <p className="text-sm text-foreground/60 mt-1">{mission.description}</p>
                      </div>
                      <span
                        className={`text-xs font-medium px-3 py-1 rounded-full ${
                          mission.status === "active" ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {mission.status}
                      </span>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>Progress</span>
                        <span>{mission.progress}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all"
                          style={{ width: `${mission.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="docs" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Getting Started with Contracts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div>
                <h4 className="font-semibold mb-2">What is a Smart Contract?</h4>
                <p className="text-foreground/70">
                  Smart contracts are self-executing programs stored on the blockchain. They automatically execute when
                  conditions are met, eliminating the need for intermediaries.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Solidity Basics</h4>
                <ul className="list-disc list-inside space-y-1 text-foreground/70">
                  <li>Solidity is the most popular smart contract language</li>
                  <li>Contracts are defined with the keyword 'contract'</li>
                  <li>Functions define what the contract can do</li>
                  <li>State variables store contract data on-chain</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Deployment Steps</h4>
                <ol className="list-decimal list-inside space-y-1 text-foreground/70">
                  <li>Connect your wallet to a testnet</li>
                  <li>Write your contract code</li>
                  <li>Compile and deploy to the blockchain</li>
                  <li>Interact with the deployed contract</li>
                </ol>
              </div>

              <div className="bg-primary/10 border border-primary/30 rounded-lg p-3">
                <p className="text-xs font-medium text-primary mb-1">Pro Tip</p>
                <p className="text-xs">Always test your contracts on a testnet before deploying to mainnet!</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
