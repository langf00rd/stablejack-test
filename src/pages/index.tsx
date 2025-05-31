import { RenderBalanceMessage } from "@/components/balance-message";
import SkeletonAnimation from "@/components/skeleton";
import { bigIntToNumber } from "@/utils";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useReadContract } from "wagmi";

// @ts-ignore
import abi from "../configs/abi.json";

export default function Home() {
  const { address, isConnected } = useAccount();

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
        {!isConnected ? (
          <h1 className="text-red-500 text-center font-[500] py-10 text-xl">
            Please connect your wallet
          </h1>
        ) : (
          <div className="text-center font-[500] py-10 text-xl text-gray-600">
            {isNaN(balance) ? (
              <SkeletonAnimation show />
            ) : (
              <RenderBalanceMessage balance={balance} />
            )}
          </div>
        )}
      </main>
    </div>
  );
}
