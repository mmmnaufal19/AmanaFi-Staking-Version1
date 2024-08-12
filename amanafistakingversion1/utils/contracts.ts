import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { STAKING_CONTRACT_ABI } from "./stakingContractABI";

// Replace <contract_address> with the contract address of your contract

const stakeTokenContractAddress = "0x0C42DFF70CB112927E9084049834374139aAA4d3";
const rewardTokenContractAddress = "0xd591A90244Ac6cdF186d4481F525430466DEf497";
const stakingContractAddress = "0x51Bc90F6E6AAC48AACE31cd6F185ab5fD305BA08";

export const STAKE_TOKEN_CONTRACT =getContract ({
    client: client,
    chain: chain,
    address: stakeTokenContractAddress,
})

export const REWARD_TOKEN_CONTRACT =getContract ({
    client: client,
    chain: chain,
    address: rewardTokenContractAddress,
})

export const STAKING_CONTRACT =getContract ({
    client: client,
    chain: chain,
    address: stakingContractAddress,
    abi: STAKING_CONTRACT_ABI

})