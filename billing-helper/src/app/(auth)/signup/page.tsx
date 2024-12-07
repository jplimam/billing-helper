import NameEmail from "@/components/SignUp/NameEmail/page";
import Password from "@/components/SignUp/Password/page";
import Success from "@/components/SignUp/Success/page";
import Stepper from "@/components/Stepper/page";
import { JSX } from "@emotion/react/jsx-runtime";

export default function SignUp(): JSX.Element {
  return (
    <div className="h-screen w-screen bg-gray-900">
      <NameEmail />
      {/* <Password /> */}
      {/* <Success /> */}
      <div className="flex justify-center pt-24">
        <Stepper />
      </div>
    </div>
  );
}
