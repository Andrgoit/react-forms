import { Link } from "react-router-dom";
import success from "src/assets/image/Success.png";

export default function ForgotPasswordFormStepFour({ finishUpdatePassword }) {
  return (
    <div className="flex h-full w-full max-w-[400px] flex-col items-center justify-center gap-5 rounded-xl bg-white px-4 py-5 shadow-xl backdrop-blur-sm">
      <p className="text-xl">Password reset</p>
      <img src={success} alt="" />
      <h2 className="text-2xl font-bold text-black">Password saved</h2>
      <span className="max-w-[300px] text-center text-sm text-[#65697E]">
        Please use your new password to log in.
      </span>
      <div className="flex w-full flex-col gap-4">
        <Link
          onClick={finishUpdatePassword}
          to="/login"
          className="block w-full max-w-full cursor-pointer rounded-lg border bg-[#6168E4] py-4 text-center text-white transition-colors duration-300 hover:border hover:border-[#6168E4] hover:bg-transparent hover:text-[#6168E4]"
        >
          Log in
        </Link>
      </div>
    </div>
  );
}
