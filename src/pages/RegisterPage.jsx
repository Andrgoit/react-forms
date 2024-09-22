import { useState } from "react";
import { RegisterFormStepOne, RegisterFormStepTwo } from "src/components";

export default function RegisterPage() {
  // eslint-disable-next-line no-unused-vars
  const [step, setStep] = useState(0);

  // const formSteps = [RegisterFormStepOne, RegisterFormStepTwo];

  // const handlerClickNextStep = () => {};

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-5 bg-gradient-to-br from-[#1ce08e] to-[#000851]">
      {step === 0 ? <RegisterFormStepOne /> : null}
      {step === 1 ? <RegisterFormStepTwo /> : null}
    </div>
  );
}
