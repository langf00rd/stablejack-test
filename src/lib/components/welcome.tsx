import BurnTokenForm from "./forms/burn-token";
import MintForm from "./forms/mint";

export default function Welcome() {
  return (
    <div className="space-y-5">
      <div className="bg-gradient-to-tr from-purple-300 via-purple-700 to-blue-600 text-white p-10 rounded-md">
        <div className="space-y-2">
          <h1 className="text-2xl text-center md:max-w-[500px]">
            Welcome to the Dashboard
          </h1>
        </div>
      </div>
      <MintForm />
      <BurnTokenForm />
    </div>
  );
}
