import { useState } from "react";
import {
  RegisterFormStepOne,
  RegisterFormStepTwo,
  RegisterFormStepThree,
  RegisterFormStepFour,
  RegisterFormStepFive,
} from "src/components";

export default function RegisterPage({ userRegistration }) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({});

  const handlerClickNextStep = () => {
    setStep((prev) => prev + 1);
  };
  const handlerClickPrevStep = () => {
    setStep((prev) => prev - 1);
  };

  const handlerUpdateRegistrationData = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
  };

  const finalStepOfRegistration = () => {
    userRegistration(data);
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-5 bg-gradient-to-br from-[#1ce08e] to-[#000851]">
      {step === 0 ? (
        <RegisterFormStepOne
          nextStep={handlerClickNextStep}
          updateRegistrationData={handlerUpdateRegistrationData}
        />
      ) : null}
      {step === 1 ? (
        <RegisterFormStepTwo
          nextStep={handlerClickNextStep}
          prevStep={handlerClickPrevStep}
          updateRegistrationData={handlerUpdateRegistrationData}
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
          updateRegistrationData={handlerUpdateRegistrationData}
        />
      ) : null}
      {step === 4 ? (
        <RegisterFormStepFive
          finalStepOfRegistration={finalStepOfRegistration}
        />
      ) : null}
    </div>
  );
}
