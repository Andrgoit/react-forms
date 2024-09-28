import success from "src/assets/image/Success.png";

export default function RegisterFormStepFive({ finalStepOfRegistration }) {
  return (
    <div className="flex h-full w-full max-w-[400px] flex-col items-center justify-center gap-5 rounded-xl bg-white px-4 py-5 shadow-xl backdrop-blur-sm">
      <p className="text-xl">Sign up</p>
      <img src={success} alt="" />
      <h2 className="text-2xl font-bold text-black">Account created</h2>
      <span className="max-w-[300px] text-center text-sm text-[#65697E]">
        Fill in your profile details to introduce yourself to other U-pamers.
      </span>
      <div className="flex w-full flex-col gap-4">
        <button
          type="button"
          className="inline-block w-full max-w-full cursor-pointer rounded-lg border bg-[#6168E4] py-4 text-white transition-colors duration-300 hover:border hover:border-[#6168E4] hover:bg-transparent hover:text-[#6168E4]"
        >
          Fill in profile details
        </button>
        <button
          onClick={finalStepOfRegistration}
          type="button"
          className="inline-block w-full max-w-full cursor-pointer rounded-lg border border-[#6168E4] bg-transparent py-4 text-[#6168E4] transition-colors duration-300 hover:bg-[#6168E4] hover:text-white"
        >
          Go to the Chat
        </button>
      </div>
    </div>
  );
}
