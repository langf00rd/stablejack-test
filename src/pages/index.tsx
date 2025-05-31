import { useContract } from "@/hooks/use-contract";
import { RenderBalanceMessage } from "@/lib/components/balance-message";
import SkeletonAnimation from "@/lib/components/skeleton";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Home() {
  const { balance, contractName, isConnected } = useContract();
  return (
    <div className="max-w-[600px] mx-auto">
      <header className="justify-between flex items-center p-5">
        <h1 className="font-bold text-xl flex items-center gap-2">
          {!contractName ? (
            <SkeletonAnimation className="w-[100px]" show />
          ) : (
            <>{contractName}</>
          )}{" "}
          Dashboard
        </h1>
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
              <>
                <RenderBalanceMessage balance={balance} />
              </>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
