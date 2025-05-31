import { bigIntToNumber } from "@/lib/utils";
import { useEffect } from "react";
import { useAccount, useReadContract, useWriteContract } from "wagmi";
import abi from "../configs/abi.json";

export function useContract() {
  const { address, isConnected } = useAccount();
  const { writeContract, isPending, isSuccess, isError } = useWriteContract();

  useEffect(() => {
    if (!isPending && isSuccess) alert("transaction run successfully!");
  }, [isSuccess, isPending]);

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
    if (isSuccess) alert("success");
  };

  // burn token
  const burn = async (id: bigint) => {
    writeContract({
      abi: abi.data,
      address: abi.address as `0x${string}`,
      functionName: "burn",
      args: [BigInt(id)],
    });
  };

  return {
    balance: bigIntToNumber(balanceOfResult.data),
    contractName: String(nameResult.data ?? ""),
    mint,
    isConnected,
    abi,
    burn,
    writePending: isPending,
    writeSuccess: isSuccess,
    writeError: isError,
  };
}
