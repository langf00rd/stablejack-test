import SkeletonAnimation from "./skeleton";

export function RenderBalanceMessage(props: { balance: number }) {
  if (isNaN(props.balance)) return <SkeletonAnimation show />;
  if (props.balance < 1) {
    return (
      <h1 className="text-red-500">
        Access Denied. You need at least 1 token to proceed
      </h1>
    );
  } else return <h1>Welcome to the Dashboard</h1>;
}
