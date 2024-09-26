import { Link } from "react-router-dom";
import { useFormik } from "formik";
// import { useState } from "react";
import { motion } from "framer-motion";

import Filled_Warning from "src/assets/icons/Icon_Filled_Error.svg?react";

const validate = (values) => {
  const errors = {};

  if (!values.login) {
    errors.login = "This field cannot be empty";
  } else if (values.login.length < 3) {
    errors.login = "Must be 3 characters or more";
  }

  return errors;
};

export default function ForgotPasswordFormStepOne() {
  const formik = useFormik({
    initialValues: { login: "" },
    validate,
    onSubmit: (values) => {
      console.log(values);

      formik.resetForm({
        login: "",
        password: "",
      });
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

      <h1 className="text-3xl font-bold">Forgot your password? </h1>
      <p className="text-center text-base text-[#65697E]">
        No worries! Enter your account email, and we’ll send you verification
        code to reset.
      </p>
      <form
        onSubmit={formik.handleSubmit}
        className="flex w-full flex-col gap-4"
      >
        <div className="w-full">
          <div className="relative w-full">
            <input
              id="login"
              name="login"
              type="text"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.login}
              autoComplete="off"
              className={`w-full rounded-lg border ${formik.values.login ? "[&+label]:top-2 [&:valid+label]:text-xs" : ""} border-[#A5A8BA] p-4 text-black outline-[#6168E4] transition-all duration-300 [&:focus+label]:top-2 [&:focus+label]:text-xs ${formik.touched.login && formik.errors.login ? "border-[2px] border-red-600" : "border-[2px] border-[#6168E4]"} `}
            />
            <label
              htmlFor="login"
              className="absolute left-4 top-1/2 translate-y-[-50%] text-[#65697E] transition-all duration-300"
            >
              Login
            </label>
          </div>
          {formik.touched.login && formik.errors.login ? (
            <div className="flex items-center gap-1 text-xs text-red-600">
              <Filled_Warning />
              {formik.errors.login}
            </div>
          ) : null}
        </div>

        <button
          type="submit"
          className="mt-8 inline-block w-full max-w-full cursor-pointer rounded-lg border bg-[#6168E4] py-4 text-white transition-colors duration-300 hover:bg-[#3d43b9]"
        >
          Reset password
        </button>
      </form>
      <div className="flex justify-center gap-1 font-semibold">
        <p>Already have a verification? </p>
        <Link to="#" className="cursor-pointer text-[#0066CC]">
          Enter code
        </Link>
      </div>
    </motion.div>
  );
}
