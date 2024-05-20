import { HardhatUserConfig, vars } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import 'dotenv/config'

const SEPOLIA_WALLET_KEY = process.env.SEPOLIA_WALLET_KEY ?? "";
const WALLET_MNEMONIC = process.env.WALLET_MNEMONIC;


const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {
    },
    sepolia: {
      url: "https://sepolia.infura.io/v3/66c4b87046104259a568349d87ba03d1",
      accounts: [SEPOLIA_WALLET_KEY]
    },
    bnbtest: {
      url: "https://data-seed-prebsc-1-s1.bnbchain.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: {mnemonic: WALLET_MNEMONIC}
    },
    bnbmainnet: {
      url: "https://bsc-dataseed.bnbchain.org/",
      chainId: 56,
      gasPrice: 20000000000,
      accounts: {mnemonic: WALLET_MNEMONIC}
    }
  }
};

export default config;
