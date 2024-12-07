import { JSX } from "@emotion/react/jsx-runtime";

export default function Stepper(): JSX.Element {
  return (
    <div className="flex gap-2">
      <div className="bg-amber-100 rounded-lg w-16 h-1"></div>
      <div className="bg-amber-100 rounded-lg w-16 h-1"></div>
      <div className="bg-amber-100 rounded-lg w-16 h-1"></div>
    </div>
  );
}
