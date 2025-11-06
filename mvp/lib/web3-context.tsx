// Web3 Provider Context for wallet state management

"use client"

import type React from "react"
import { createContext, useContext, useState, useCallback } from "react"
import { TESTNET_CONFIG, type TestnetKey } from "./web3-config"

export interface WalletState {
  isConnected: boolean
  address: string | null
  balance: string | null
  chainId: number | null
  network: TestnetKey | null
  isLoading: boolean
  error: string | null
}

interface Web3ContextType {
  wallet: WalletState
  connectWallet: (network: TestnetKey) => Promise<void>
  disconnectWallet: () => void
  switchNetwork: (network: TestnetKey) => Promise<void>
  getBalance: (address: string) => Promise<string>
  clearError: () => void
}

const Web3Context = createContext<Web3ContextType | undefined>(undefined)

export function Web3Provider({ children }: { children: React.ReactNode }) {
  const [wallet, setWallet] = useState<WalletState>({
    isConnected: false,
    address: null,
    balance: null,
    chainId: null,
    network: null,
    isLoading: false,
    error: null,
  })

  const connectWallet = useCallback(async (network: TestnetKey) => {
    setWallet((prev) => ({ ...prev, isLoading: true, error: null }))
    try {
      const mockAddress = "0x742d35Cc6634C0532925a3b844Bc9e7595f42bE"
      const mockBalance = "2.5"
      const config = TESTNET_CONFIG[network]

      setWallet({
        isConnected: true,
        address: mockAddress,
        balance: mockBalance,
        chainId: config.chainId,
        network,
        isLoading: false,
        error: null,
      })
    } catch (err) {
      setWallet((prev) => ({
        ...prev,
        isLoading: false,
        error: err instanceof Error ? err.message : "Failed to connect wallet",
      }))
    }
  }, [])

  const disconnectWallet = useCallback(() => {
    setWallet({
      isConnected: false,
      address: null,
      balance: null,
      chainId: null,
      network: null,
      isLoading: false,
      error: null,
    })
  }, [])

  const switchNetwork = useCallback(
    async (network: TestnetKey) => {
      if (!wallet.isConnected) return
      setWallet((prev) => ({ ...prev, isLoading: true }))
      try {
        const config = TESTNET_CONFIG[network]
        setWallet((prev) => ({
          ...prev,
          network,
          chainId: config.chainId,
          isLoading: false,
        }))
      } catch (err) {
        setWallet((prev) => ({
          ...prev,
          isLoading: false,
          error: err instanceof Error ? err.message : "Failed to switch network",
        }))
      }
    },
    [wallet.isConnected],
  )

  const getBalance = useCallback(async (address: string) => {
    try {
      // Mock balance fetching - in production would use ethers.js
      return "2.5"
    } catch (err) {
      throw err
    }
  }, [])

  const clearError = useCallback(() => {
    setWallet((prev) => ({ ...prev, error: null }))
  }, [])

  const value: Web3ContextType = {
    wallet,
    connectWallet,
    disconnectWallet,
    switchNetwork,
    getBalance,
    clearError,
  }

  return <Web3Context.Provider value={value}>{children}</Web3Context.Provider>
}

export function useWeb3() {
  const context = useContext(Web3Context)
  if (!context) {
    throw new Error("useWeb3 must be used within Web3Provider")
  }
  return context
}
