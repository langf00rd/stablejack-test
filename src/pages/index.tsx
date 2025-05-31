import SkeletonAnimation from "@/components/skeleton";
import { bigIntToNumber } from "@/utils";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useReadContract } from "wagmi";

// @ts-ignore
import abi from "../configs/abi.json";

export default function Home() {
  const { address } = useAccount();

  const result = useReadContract({
    abi: abi.data,
    address: abi.address,
    functionName: "balanceOf",
    args: [address],
  });

  const balance = bigIntToNumber(result.data);

  return (
    <div className="max-w-[600px] mx-auto">
      <header className="justify-between flex items-center p-5">
        <h1 className="font-bold text-xl">token thing</h1>
        <ConnectButton />
      </header>
      <main className="p-5">
        <div className="text-center font-semibold py-10 text-xl text-gray-600">
          {isNaN(balance) ? (
            <SkeletonAnimation show />
          ) : (
            <>
              {balance < 1 ? (
                <h1>Access Denied. You need at least 1 token to proceed</h1>
              ) : (
                <h1>Welcome to the Dashboard</h1>
              )}
            </>
          )}
        </div>
      </main>
    </div>
  );
}
