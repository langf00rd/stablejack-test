import { useContract } from "@/hooks/use-contract";
import { validateWalletAddress } from "@/lib/utils";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function AllowanceForm() {
  const { mint, contractName } = useContract();
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState(0);

  function validateForm(): boolean {
    return validateWalletAddress(address);
  }

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    mint(address, BigInt(amount));
  }

  return (
    <form
      onSubmit={submit}
      className="space-y-6 bg-neutral-50 border border-neutral-100 p-10 rounded-[30px]"
    >
      <h2 className="text-neutral-600 font-medium text-left">
        Mint {contractName}
      </h2>
      <fieldset>
        <Label>Address</Label>
        <Input
          required
          placeholder="0x123abc"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </fieldset>
      <fieldset>
        <Label>Amount</Label>
        <Input
          required
          placeholder="10"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
      </fieldset>
      <Button type="submit" disabled={!validateForm()}>
        Continue
      </Button>
    </form>
  );
}
