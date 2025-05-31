import { useContract } from "@/hooks/use-contract";
import { FlameIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function BurnTokenForm() {
  const { contractName, burn, writePending } = useContract();
  const [id, setId] = useState(0);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    burn(BigInt(id));
  }

  return (
    <form
      onSubmit={submit}
      className="space-y-6 bg-neutral-50 border border-neutral-100 p-10 rounded-[30px]"
    >
      <h2 className="text-black font-medium text-left">Burn {contractName}</h2>
      <fieldset>
        <Input
          required
          type="number"
          placeholder="10"
          value={id}
          onChange={(e) => setId(Number(e.target.value))}
        />
      </fieldset>
      <Button variant="destructive" type="submit" disabled={writePending}>
        <FlameIcon />
        {writePending ? "Pending..." : "Burn token"}
      </Button>
    </form>
  );
}
