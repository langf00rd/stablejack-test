export default function SkeletonAnimation(props: {
  show: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div className={props.show ? "w-full h-10 bg-gray-100 animate-pulse" : ""}>
      {props.children}
    </div>
  );
}
