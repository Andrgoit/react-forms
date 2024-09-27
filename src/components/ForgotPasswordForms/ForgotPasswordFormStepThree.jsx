import { useFormik } from "formik";
import { useState } from "react";
import { motion } from "framer-motion";

import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";
import Filled_Warning from "src/assets/icons/Icon_Filled_Error.svg?react";

export default function ForgotPasswordFormStepThree({ updateData, nextStep }) {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);

  const validate = (values) => {
    const errors = {};

    if (!values.password) {
      errors.password = "This field cannot be empty";
    } else if (values.password.length < 8) {
      errors.password = "Must be 8 characters or more";
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = "This field cannot be empty";
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Wrong confirm password";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validate,

    onSubmit: (values) => {
      updateData(values);
      nextStep();
    },
  });

  const handlerClickShowPassword = (id) => {
    if (id === "password") {
      return setIsShowPassword(!isShowPassword);
    }
    if (id === "confirmPassword") {
      return setIsShowConfirmPassword(!isShowConfirmPassword);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="flex h-full w-full max-w-[400px] flex-col items-center justify-center gap-5 rounded-xl bg-white px-4 py-5 shadow-xl backdrop-blur-sm"
    >
      <p className="text-xl">Password reset</p>

      <h2 className="text-2xl font-bold text-black">Create new password</h2>
      <form
        onSubmit={formik.handleSubmit}
        className="flex w-full flex-col gap-4"
      >
        <div className="w-full">
          <div className="relative w-full">
            <input
              id="password"
              name="password"
              type={isShowPassword ? "text" : "password"}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.password}
              className={`w-full ${formik.values.password ? "[&+label]:top-2 [&:valid+label]:text-xs" : ""} rounded-lg border border-[#A5A8BA] p-4 text-black outline-[#6168E4] transition-all duration-300 [&:focus+label]:top-2 [&:focus+label]:text-xs ${formik.touched.password && formik.errors.password ? "border-[2px] border-red-600" : "border-[2px] border-[#6168E4]"} `}
            />
            <label
              htmlFor="password"
              className="absolute left-4 top-1/2 translate-y-[-50%] text-[#65697E] transition-all duration-300"
            >
              Password <span className="text-red-600">*</span>
            </label>
            <div
              className="absolute right-3 top-1/2 translate-y-[-50%]"
              onClick={() => handlerClickShowPassword("password")}
            >
              {isShowPassword ? (
                <FaRegEye size={24} />
              ) : (
                <FaRegEyeSlash size={24} />
              )}
            </div>
          </div>
          {formik.touched.password && formik.errors.password ? (
            <div className="flex items-center gap-1 text-xs text-red-600">
              <Filled_Warning />
              {formik.errors.password}
            </div>
          ) : null}
        </div>

        <p className="text-xs text-[#2C2C2D]">
          Create a strong password that is at least 8 characters long, includes
          upper-case, lower-case letters, at least 1 digit and 1 special
          character.
        </p>
        <div className="w-full">
          <div className="relative w-full">
            <input
              id="confirmPassword"
              name="confirmPassword"
              type={isShowConfirmPassword ? "text" : "password"}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
              className={`w-full ${formik.values.confirmPassword ? "[&+label]:top-2 [&:valid+label]:text-xs" : ""} rounded-lg border border-[#A5A8BA] p-4 text-black outline-[#6168E4] transition-all duration-300 [&:focus+label]:top-2 [&:focus+label]:text-xs ${formik.touched.confirmPassword && formik.errors.confirmPassword ? "border-[2px] border-red-600" : "border-[2px] border-[#6168E4]"} `}
            />
            <label
              htmlFor="confirmPassword"
              className="absolute left-4 top-1/2 translate-y-[-50%] text-[#65697E] transition-all duration-300"
            >
              Confirm password <span className="text-red-600">*</span>
            </label>
            <div
              className="absolute right-3 top-1/2 translate-y-[-50%]"
              onClick={() => handlerClickShowPassword("confirmPassword")}
            >
              {isShowConfirmPassword ? (
                <FaRegEye size={24} />
              ) : (
                <FaRegEyeSlash size={24} />
              )}
            </div>
          </div>
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div className="flex items-center gap-1 text-xs text-red-600">
              <Filled_Warning />
              {formik.errors.confirmPassword}
            </div>
          ) : null}
        </div>

        <button
          type="submit"
          className="mt-8 inline-block w-full max-w-full cursor-pointer rounded-lg border bg-[#6168E4] py-4 text-white transition-colors duration-300 hover:bg-[#3d43b9]"
        >
          Save password
        </button>
      </form>
    </motion.div>
  );
}
