import { useFormik } from "formik";
// import { useState } from "react";
import { motion } from "framer-motion";

import Filled_Warning from "src/assets/icons/Icon_Filled_Error.svg?react";

export default function ForgotPasswordFormStepTwo({
  nextStep,
  data,
  verificationCode,
}) {
  const validate = (values) => {
    const errors = {};

    if (!values.code) {
      errors.code = "This field cannot be empty";
    } else if (Number(values.code) !== verificationCode) {
      errors.code = "Invalid verification code";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: { ...data, code: "" },
    validate,
    onSubmit: () => {
      nextStep();
    },
  });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="flex h-full w-full max-w-[400px] flex-col items-center justify-center gap-5 rounded-xl bg-white px-4 py-5 shadow-xl backdrop-blur-sm"
    >
      <p className="text-xl">Password reset</p>

      <h1 className="text-3xl font-bold">Enter code</h1>
      <p className="text-center text-base text-[#65697E]">
        Please check your email and provide the verification code
      </p>
      <form
        onSubmit={formik.handleSubmit}
        className="flex w-full flex-col gap-4"
      >
        <div className="w-full">
          <div className="relative w-full">
            <input
              id="email"
              name="email"
              type="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
              autoComplete="off"
              disabled={data}
              className={`w-full rounded-lg border ${formik.values.email ? "[&+label]:top-2 [&:valid+label]:text-xs" : ""} border-[#A5A8BA] p-4 text-black outline-[#6168E4] transition-all duration-300 [&:focus+label]:top-2 [&:focus+label]:text-xs ${formik.touched.email && formik.errors.email ? "border-[2px] border-red-600" : "border-[2px] border-[#6168E4]"} `}
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-1/2 translate-y-[-50%] text-[#65697E] transition-all duration-300"
            >
              Email
            </label>
          </div>
          {formik.touched.email && formik.errors.email ? (
            <div className="flex items-center gap-1 text-xs text-red-600">
              <Filled_Warning />
              {formik.errors.email}
            </div>
          ) : null}
        </div>

        <div className="w-full">
          <div className="relative w-full">
            <input
              id="code"
              name="code"
              type="text"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.code}
              autoComplete="off"
              placeholder="_ _ _"
              className={`w-full rounded-lg border ${formik.values.code ? "[&+label]:top-2 [&:valid+label]:text-xs" : ""} border-[#A5A8BA] p-4 text-black outline-[#6168E4] transition-all duration-300 [&:focus+label]:top-2 [&:focus+label]:text-xs ${formik.touched.code && formik.errors.code ? "border-[2px] border-red-600" : "border-[2px] border-[#6168E4]"} `}
            />
            <label
              htmlFor="code"
              className="absolute left-4 top-1/2 translate-y-[-50%] text-[#65697E] transition-all duration-300"
            >
              Verification Code
            </label>
          </div>
          {formik.touched.code && formik.errors.code ? (
            <div className="flex items-center gap-1 text-xs text-red-600">
              <Filled_Warning />
              {formik.errors.code}
            </div>
          ) : null}
        </div>

        <button
          type="submit"
          className="mt-8 inline-block w-full max-w-full cursor-pointer rounded-lg border bg-[#6168E4] py-4 text-white transition-colors duration-300 hover:bg-[#3d43b9]"
        >
          Confirm code
        </button>
      </form>
    </motion.div>
  );
}
