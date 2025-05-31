import { ClassNameValue } from "tailwind-merge";
import { cn } from "../utils";

export default function SkeletonAnimation(props: {
  show: boolean;
  children?: React.ReactNode;
  className?: ClassNameValue;
}) {
  return (
    <div
      className={
        props.show
          ? cn("w-full h-8 bg-gray-100 animate-pulse", props.className)
          : ""
      }
    >
      {props.children}
    </div>
  );
}
