// Web3 Configuration and Testnet RPC endpoints

export const TESTNET_CONFIG = {
  sepolia: {
    name: "Sepolia",
    chainId: 11155111,
    rpcUrl: "https://eth-sepolia.public.lodestar.tech",
    blockExplorer: "https://sepolia.etherscan.io",
    nativeCurrency: {
      name: "Sepolia ETH",
      symbol: "ETH",
      decimals: 18,
    },
    faucet: "https://www.sepoliafaucet.com",
  },
  goerli: {
    name: "Goerli",
    chainId: 5,
    rpcUrl: "https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
    blockExplorer: "https://goerli.etherscan.io",
    nativeCurrency: {
      name: "Goerli ETH",
      symbol: "ETH",
      decimals: 18,
    },
    faucet: "https://goerlifaucet.com",
  },
  mumbai: {
    name: "Mumbai (Polygon Testnet)",
    chainId: 80001,
    rpcUrl: "https://rpc-mumbai.maticvigil.com",
    blockExplorer: "https://mumbai.polygonscan.com",
    nativeCurrency: {
      name: "Mumbai MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    faucet: "https://faucet.polygon.technology/",
  },
  fuji: {
    name: "Fuji (Avalanche Testnet)",
    chainId: 43113,
    rpcUrl: "https://api.avax-test.network/ext/bc/C/rpc",
    blockExplorer: "https://testnet.snowtrace.io",
    nativeCurrency: {
      name: "Fuji AVAX",
      symbol: "AVAX",
      decimals: 18,
    },
    faucet: "https://faucet.avax.network/",
  },
}

export type TestnetKey = keyof typeof TESTNET_CONFIG

// Smart Contract Templates for deployment
export const CONTRACT_TEMPLATES = {
  counter: {
    name: "Counter Contract",
    description: "A simple contract to increment/decrement a counter",
    abi: [
      { type: "function", name: "count", outputs: [{ type: "uint256" }], stateMutability: "view" },
      { type: "function", name: "increment", stateMutability: "nonpayable" },
      { type: "function", name: "decrement", stateMutability: "nonpayable" },
    ],
    bytecode:
      "0x608060405234801561001057600080fd5b50610150806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063a87d4fcc1461003b578063d09de08a14610059575b600080fd5b610043610063565b60405161005091906100a0565b60405180910390f35b610061610069565b005b60008054905090565b6000808154809291906100819061010b565b9190505550565b6000819050919050565b61009a81610087565b82525050565b60006020820190506100b56000830184610091565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006100f382610087565b915061fe e83610087565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156101285761012761010b565b5b82820190509291505056fea26469706673582212206f870fe64e05e2269da48dda11d915e78f5b0c5f0c4c1b8f3c8e7d6c5a4b3a0a64736f6c634300080b0033",
    difficulty: "Beginner",
    xpReward: 50,
  },
}
