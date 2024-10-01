import { useState } from "react";

import {
  ForgotPasswordFormStepOne,
  ForgotPasswordFormStepTwo,
  ForgotPasswordFormStepThree,
  ForgotPasswordFormStepFour,
} from "src/components";

export default function ForgotPasswordPage({ updatePassword, localUsers }) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState(null);
  const [code, setCode] = useState(null);

  const getCodeNumber = (code) => setCode(code);

  const updateData = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
  };

  const handlerClickNextStep = () => {
    setStep((prev) => prev + 1);
  };

  const finishUpdatePassword = () => {
    console.log("data", data);

    updatePassword(data);
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-5 bg-gradient-to-br from-[#1ce08e] to-[#480051]">
      {step === 0 ? (
        <ForgotPasswordFormStepOne
          nextStep={handlerClickNextStep}
          getCodeNumber={getCodeNumber}
          updateData={updateData}
          localUsers={localUsers}
        />
      ) : null}

      {step === 1 ? (
        <ForgotPasswordFormStepTwo
          nextStep={handlerClickNextStep}
          verificationCode={code}
          data={data}
        />
      ) : null}
      {step === 2 ? (
        <ForgotPasswordFormStepThree
          nextStep={handlerClickNextStep}
          updateData={updateData}
        />
      ) : null}
      {step === 3 ? (
        <ForgotPasswordFormStepFour
          finishUpdatePassword={finishUpdatePassword}
        />
      ) : null}
    </div>
  );
}
