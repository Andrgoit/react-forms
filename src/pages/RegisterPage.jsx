import { useState } from "react";
import {
  RegisterFormStepOne,
  RegisterFormStepTwo,
  RegisterFormStepThree,
  RegisterFormStepFour,
  RegisterFormStepFive,
} from "src/components";

export default function RegisterPage({ onRegister }) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({});

  const handlerClickNextStep = () => {
    setStep((prev) => prev + 1);
  };
  const handlerClickPrevStep = () => {
    setStep((prev) => prev - 1);
  };

  const handlerUpdateData = (newData) => {
    console.log("newData", newData);

    setData((prev) => ({ ...prev, ...newData }));
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-5 bg-gradient-to-br from-[#1ce08e] to-[#000851]">
      {step === 0 ? (
        <RegisterFormStepOne
          nextStep={handlerClickNextStep}
          updateData={handlerUpdateData}
        />
      ) : null}
      {step === 1 ? (
        <RegisterFormStepTwo
          nextStep={handlerClickNextStep}
          prevStep={handlerClickPrevStep}
          updateData={handlerUpdateData}
        />
      ) : null}
      {step === 2 ? (
        <RegisterFormStepThree
          data={data}
          nextStep={handlerClickNextStep}
          prevStep={handlerClickPrevStep}
        />
      ) : null}
      {step === 3 ? (
        <RegisterFormStepFour
          nextStep={handlerClickNextStep}
          updateData={handlerUpdateData}
        />
      ) : null}
      {step === 4 ? <RegisterFormStepFive onRegister={onRegister} /> : null}
    </div>
  );
}
