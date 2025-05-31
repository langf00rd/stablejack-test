import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { avalanche } from "wagmi/chains";

export const wagmiConfig = getDefaultConfig({
  appName: "token dashboard",
  projectId: "YOUR_PROJECT_ID",
  chains: [avalanche],
  ssr: false, // app doesnt do ssr
});
