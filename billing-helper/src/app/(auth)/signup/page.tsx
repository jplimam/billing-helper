"use client";

import { motion } from "framer-motion";
import NameEmail from "@/components/SignUp/NameEmail/page";
import Password from "@/components/SignUp/Password/page";
import Success from "@/components/SignUp/Success/page";
import Stepper from "@/components/Stepper/page";
import { useState } from "react";

type stepsType = "first-step" | "second-step" | "third-step";

export default function SignUp() {
  let [step, setStep] = useState<stepsType>("third-step");

  const stepContent = {
    "first-step": <NameEmail />,
    "second-step": <Password />,
    "third-step": <Success />,
  };

  return (
    <div className="h-screen w-screen bg-gray-900">
      <motion.div
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
        }}
      >
        {stepContent[step]}
      </motion.div>
      <div className="flex justify-center pt-24">
        <Stepper />
      </div>
    </div>
  );
}
