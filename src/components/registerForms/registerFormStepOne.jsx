import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { useState } from "react";
import { motion } from "framer-motion";

import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";
import Filled_Warning from "src/assets/icons/Icon_Filled_Error.svg?react";
import errorIcon from "src/assets/icons/Error.png";

export default function RegisterFormStepOne({
  nextStep,
  updateRegistrationData,
  localUsers,
}) {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
  const [isClickedContinueBtn, setIsClickedContinueBtn] = useState(false);
  const [errors, setErrors] = useState(false);
  const errorCounts = Object.keys(errors).length;

  console.log("localUsers", localUsers);

  const validate = (values) => {
    const errors = {};

    if (!values.login) {
      errors.login = "This field cannot be empty";
    }
    if (localUsers?.find(({ login }) => login === values.login)) {
      errors.login = "User already exist";
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.login)) {
      errors.login = "Invalid email address";
    }

    if (!values.firstName) {
      errors.firstName = "This field cannot be empty";
    } else if (values.firstName.length < 3) {
      errors.firstName = "Must be 3 characters or more";
    }

    if (!values.lastName) {
      errors.lastName = "This field cannot be empty";
    } else if (values.lastName.length < 3) {
      errors.lastName = "Must be 3 characters or more";
    }

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
    setErrors(errors);
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      login: "",
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
    },
    validate,

    onSubmit: (values) => {
      console.log(values);

      setIsClickedContinueBtn(false);
      updateRegistrationData(values);
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
      <p className="text-xl">Sign up</p>
      <div className="flex w-full items-center justify-between font-medium">
        {isClickedContinueBtn && errorCounts ? (
          <div className="mr-1 flex h-10 w-10 min-w-10 items-center justify-center rounded-full bg-[#E6674E]">
            <img src={errorIcon} alt="" />
          </div>
        ) : (
          <div className="mr-1 flex h-10 w-10 min-w-10 items-center justify-center rounded-full border-[2px] border-[#6168E4] text-[#6168E4]">
            1
          </div>
        )}
        <span className="h-[1px] w-full bg-[#A5A8BA]"></span>
        <div className="mx-1 flex h-10 w-10 min-w-10 items-center justify-center rounded-full border border-[#A5A8BA]">
          2
        </div>
        <span className="h-[1px] w-full bg-[#A5A8BA]"></span>
        <div className="ml-1 flex h-10 w-10 min-w-10 items-center justify-center rounded-full border border-[#A5A8BA]">
          3
        </div>
      </div>
      <h2 className="text-2xl font-bold text-black">Fill in account details</h2>
      <form
        onSubmit={formik.handleSubmit}
        className="flex w-full flex-col gap-4"
      >
        <div className="w-full">
          <div className="relative w-full">
            <input
              id="login"
              name="login"
              type="email"
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
              Login <span className="text-red-600">*</span>
            </label>
          </div>
          {formik.touched.login && formik.errors.login ? (
            <div className="flex items-center gap-1 text-xs text-red-600">
              <Filled_Warning />
              {formik.errors.login}
            </div>
          ) : null}
        </div>

        <div className="w-full">
          <div className="relative w-full">
            <input
              id="firstName"
              name="firstName"
              type="text"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.firstName}
              autoComplete="off"
              className={`w-full rounded-lg border ${formik.values.firstName ? "[&+label]:top-2 [&:valid+label]:text-xs" : ""} border-[#A5A8BA] p-4 text-black outline-[#6168E4] transition-all duration-300 [&:focus+label]:top-2 [&:focus+label]:text-xs ${formik.touched.firstName && formik.errors.firstName ? "border-[2px] border-red-600" : "border-[2px] border-[#6168E4]"} `}
            />
            <label
              htmlFor="firstName"
              className="absolute left-4 top-1/2 translate-y-[-50%] text-[#65697E] transition-all duration-300"
            >
              First name <span className="text-red-600">*</span>
            </label>
          </div>
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className="flex items-center gap-1 text-xs text-red-600">
              <Filled_Warning />
              {formik.errors.firstName}
            </div>
          ) : null}
        </div>

        <div className="w-full">
          <div className="relative w-full">
            <input
              id="lastName"
              name="lastName"
              type="text"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.lastName}
              autoComplete="off"
              className={`w-full rounded-lg border ${formik.values.lastName ? "[&+label]:top-2 [&:valid+label]:text-xs" : ""} border-[#A5A8BA] p-4 text-black outline-[#6168E4] transition-all duration-300 [&:focus+label]:top-2 [&:focus+label]:text-xs ${formik.touched.lastName && formik.errors.lastName ? "border-[2px] border-red-600" : "border-[2px] border-[#6168E4]"} `}
            />
            <label
              htmlFor="firstName"
              className="absolute left-4 top-1/2 translate-y-[-50%] text-[#65697E] transition-all duration-300"
            >
              Last name <span className="text-red-600">*</span>
            </label>
          </div>
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className="flex items-center gap-1 text-xs text-red-600">
              <Filled_Warning />
              {formik.errors.lastName}
            </div>
          ) : null}
        </div>

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
          onClick={() => setIsClickedContinueBtn(true)}
          type="submit"
          className="mt-8 inline-block w-full max-w-full cursor-pointer rounded-lg border bg-[#6168E4] py-4 text-white transition-colors duration-300 hover:bg-[#3d43b9]"
        >
          Continue
        </button>
      </form>
      <div className="flex justify-center gap-1 font-semibold">
        <p>Already have an account? </p>
        <Link to="/login" className="cursor-pointer text-[#0066CC]">
          Login
        </Link>
      </div>
    </motion.div>
  );
}
