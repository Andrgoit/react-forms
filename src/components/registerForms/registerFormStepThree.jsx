import ok from "src/assets/icons/ok.png";
import editIcon from "src/assets/icons/editButton.png";
import profileIcon from "src/assets/icons/profileUser.svg";

export default function RegisterFormStepThree({ nextStep, prevStep, data }) {
  console.log("data RegisterFormStepThree", data);
  const { imageURL } = data;

  return (
    <div className="flex h-full w-full max-w-[400px] justify-center rounded-xl bg-white px-4 py-5 shadow-xl backdrop-blur-sm">
      <div className="flex h-full w-full flex-col items-center justify-center gap-5 bg-white">
        <p className="text-xl">Sign up</p>
        <div className="flex w-full items-center justify-between font-medium">
          <div className="relative mr-1 flex h-10 w-10 min-w-10 items-center justify-center rounded-full bg-[#6168E4]">
            <img src={ok} alt="icon" />
          </div>

          <span className="h-[1px] w-full bg-[#A5A8BA]"></span>
          <div className="mx-1 flex h-10 w-10 min-w-10 items-center justify-center rounded-full border-[2px] border-[#6168E4] text-[#6168E4]">
            2
          </div>
          <span className="h-[1px] w-full bg-[#A5A8BA]"></span>
          <div className="ml-1 flex h-10 w-10 min-w-10 items-center justify-center rounded-full border border-[#A5A8BA]">
            3
          </div>
        </div>
        <h2 className="text-2xl font-bold text-black">
          Upload profile picture
        </h2>
        <span className="text-sm text-[#65697E]">(Optional)</span>
        <div className="flex w-full flex-col items-center gap-8">
          <div className="relative">
            <div className="h-[160px] w-[160px] overflow-hidden rounded-full">
              <img
                src={imageURL ? imageURL : profileIcon}
                alt="user avatar"
                className="h-full w-full object-fill"
              />
            </div>
            <img
              src={editIcon}
              alt="edit icon"
              className="absolute bottom-0 right-0 z-10 cursor-pointer"
              onClick={prevStep}
            />
          </div>
          <button
            onClick={nextStep}
            type="submit"
            className="inline-block w-full max-w-full cursor-pointer rounded-lg border bg-[#6168E4] py-4 text-white transition-colors duration-300 hover:bg-[#3d43b9]"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
