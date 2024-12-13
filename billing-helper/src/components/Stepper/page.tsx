import { JSX } from "@emotion/react/jsx-runtime";

export default function Stepper({ step }: any): JSX.Element {
  if (step === "first-step") {
    return (
      <div className="flex gap-2">
        <div className="bg-yellow-400 rounded-lg w-16 h-1"></div>
        <div className="bg-amber-100 rounded-lg w-16 h-1"></div>
        <div className="bg-amber-100 rounded-lg w-16 h-1"></div>
      </div>
    );
  }

  if (step === "second-step") {
    return (
      <div className="flex gap-2">
        <div className="bg-yellow-400 rounded-lg w-16 h-1"></div>
        <div className="bg-yellow-400 rounded-lg w-16 h-1"></div>
        <div className="bg-amber-100 rounded-lg w-16 h-1"></div>
      </div>
    );
  }

  if (step === "third-step") {
    return (
      <div className="flex gap-2">
        <div className="bg-yellow-400 rounded-lg w-16 h-1"></div>
        <div className="bg-yellow-400 rounded-lg w-16 h-1"></div>
        <div className="bg-yellow-400 rounded-lg w-16 h-1"></div>
      </div>
    );
  }

  return (
    <>
      <h1>Error</h1>
      <p>Internal Server Error</p>
    </>
  );
}
