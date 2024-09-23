import { Link } from "react-router-dom";
import { useFormik } from "formik";

import { motion } from "framer-motion";

import ok from "src/assets/icons/ok.png";

export default function RegisterFormStepFour({ nextStep, updateData }) {
  const formik = useFormik({
    initialValues: {
      linkedin: "http://linkedin.com",
      instagram: "http://instagram.com",
      telegram: "http://telegram.com",
      facebook: "http://facebook.com",
      skype: "https://join.skype.com/invite",
    },

    onSubmit: (values) => {
      console.log(values);
      updateData(values);
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
      <p className="text-xl">Sign up</p>
      <div className="flex w-full items-center justify-between font-medium">
        <div className="relative mr-1 flex h-10 w-10 min-w-10 items-center justify-center rounded-full bg-[#6168E4]">
          <img src={ok} alt="icon" />
        </div>

        <span className="h-[1px] w-full bg-[#A5A8BA]"></span>
        <div className="relative mr-1 flex h-10 w-10 min-w-10 items-center justify-center rounded-full bg-[#6168E4]">
          <img src={ok} alt="icon" />
        </div>
        <span className="h-[1px] w-full bg-[#A5A8BA]"></span>
        <div className="mx-1 flex h-10 w-10 min-w-10 items-center justify-center rounded-full border-[2px] border-[#6168E4] text-[#6168E4]">
          3
        </div>
      </div>
      <h2 className="text-2xl font-bold text-black">Connect social medias</h2>
      <span className="text-sm text-[#65697E]">(Optional)</span>
      <form
        onSubmit={formik.handleSubmit}
        className="flex w-full flex-col gap-4"
      >
        <div className="w-full">
          <div className="relative w-full">
            <input
              id="linkedin"
              name="linkedin"
              type="text"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.linkedin}
              autoComplete="off"
              className={`w-full rounded-lg border ${formik.values.linkedin ? "[&+label]:top-2 [&:valid+label]:text-xs" : ""} border-[#A5A8BA] p-4 text-black outline-[#6168E4] transition-all duration-300 [&:focus+label]:top-2 [&:focus+label]:text-xs ${formik.touched.linkedin && formik.errors.linkedin ? "border-[2px] border-red-600" : "border-[2px] border-[#6168E4]"} `}
            />
            <label
              htmlFor="linkedin"
              className="absolute left-4 top-1/2 translate-y-[-50%] text-[#65697E] transition-all duration-300"
            >
              Linkedin URL (Optional)
            </label>
          </div>
        </div>

        <div className="w-full">
          <div className="relative w-full">
            <input
              id="instagram"
              name="instagram"
              type="text"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.instagram}
              autoComplete="off"
              className={`w-full rounded-lg border ${formik.values.instagram ? "[&+label]:top-2 [&:valid+label]:text-xs" : ""} border-[#A5A8BA] p-4 text-black outline-[#6168E4] transition-all duration-300 [&:focus+label]:top-2 [&:focus+label]:text-xs ${formik.touched.instagram && formik.errors.instagram ? "border-[2px] border-red-600" : "border-[2px] border-[#6168E4]"} `}
            />
            <label
              htmlFor="linkedin"
              className="absolute left-4 top-1/2 translate-y-[-50%] text-[#65697E] transition-all duration-300"
            >
              Instagram URL (Optional)
            </label>
          </div>
        </div>

        <div className="w-full">
          <div className="relative w-full">
            <input
              id="telegram"
              name="telegram"
              type="text"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.telegram}
              autoComplete="off"
              className={`w-full rounded-lg border ${formik.values.telegram ? "[&+label]:top-2 [&:valid+label]:text-xs" : ""} border-[#A5A8BA] p-4 text-black outline-[#6168E4] transition-all duration-300 [&:focus+label]:top-2 [&:focus+label]:text-xs ${formik.touched.telegram && formik.errors.telegram ? "border-[2px] border-red-600" : "border-[2px] border-[#6168E4]"} `}
            />
            <label
              htmlFor="linkedin"
              className="absolute left-4 top-1/2 translate-y-[-50%] text-[#65697E] transition-all duration-300"
            >
              Telegram URL (Optional)
            </label>
          </div>
        </div>

        <div className="w-full">
          <div className="relative w-full">
            <input
              id="facebook"
              name="facebook"
              type="text"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.facebook}
              autoComplete="off"
              className={`w-full rounded-lg border ${formik.values.facebook ? "[&+label]:top-2 [&:valid+label]:text-xs" : ""} border-[#A5A8BA] p-4 text-black outline-[#6168E4] transition-all duration-300 [&:focus+label]:top-2 [&:focus+label]:text-xs ${formik.touched.facebook && formik.errors.facebook ? "border-[2px] border-red-600" : "border-[2px] border-[#6168E4]"} `}
            />
            <label
              htmlFor="linkedin"
              className="absolute left-4 top-1/2 translate-y-[-50%] text-[#65697E] transition-all duration-300"
            >
              Facebook URL (Optional)
            </label>
          </div>
        </div>

        <div className="w-full">
          <div className="relative w-full">
            <input
              id="skype"
              name="skype"
              type="text"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.skype}
              autoComplete="off"
              className={`w-full rounded-lg border ${formik.values.skype ? "[&+label]:top-2 [&:valid+label]:text-xs" : ""} border-[#A5A8BA] p-4 text-black outline-[#6168E4] transition-all duration-300 [&:focus+label]:top-2 [&:focus+label]:text-xs ${formik.touched.skype && formik.errors.skype ? "border-[2px] border-red-600" : "border-[2px] border-[#6168E4]"} `}
            />
            <label
              htmlFor="linkedin"
              className="absolute left-4 top-1/2 translate-y-[-50%] text-[#65697E] transition-all duration-300"
            >
              Skype URL (Optional)
            </label>
          </div>
        </div>

        <button
          onClick={() => 5}
          type="submit"
          className="mt-8 inline-block w-full max-w-full cursor-pointer rounded-lg border bg-[#6168E4] py-4 text-white transition-colors duration-300 hover:bg-[#3d43b9]"
        >
          Create account
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
