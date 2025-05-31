import { bigIntToNumber } from "@/lib/utils";
import { useAccount, useReadContract, useWriteContract } from "wagmi";
import abi from "../configs/abi.json";

export function useContract() {
  const { address, isConnected } = useAccount();
  const { writeContract } = useWriteContract();

  // get address of connected user
  const balanceOfResult = useReadContract({
    abi: abi.data,
    address: abi.address as `0x${string}`,
    functionName: "balanceOf",
    args: [address],
  });

  // get contract name
  const nameResult = useReadContract({
    abi: abi.data,
    address: abi.address as `0x${string}`,
    functionName: "name",
  });

  // mint from contract
  const mint = async (address: string, amount: bigint) => {
    writeContract({
      abi: abi.data,
      address: abi.address as `0x${string}`,
      functionName: "mint",
      args: [address, BigInt(amount)],
    });
  };

  return {
    balance: bigIntToNumber(balanceOfResult.data),
    contractName: String(nameResult.data),
    mint,
    isConnected,
    abi,
  };
}
