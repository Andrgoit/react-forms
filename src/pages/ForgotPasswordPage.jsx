import { useState } from "react";
import { ForgotPasswordFormStepOne } from "src/components";

export default function ForgotPasswordPage() {
  const [step, setStep] = useState(0);
  // const [data, setData] = useState({});

  const handlerClickNextStep = () => {
    setStep((prev) => prev + 1);
  };
  // const handlerClickPrevStep = () => {
  //   setStep((prev) => prev - 1);
  // };
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-5 bg-gradient-to-br from-[#1ce08e] to-[#480051]">
      {step === 0 ? (
        <ForgotPasswordFormStepOne nextStep={handlerClickNextStep} />
      ) : null}
    </div>
  );
}
