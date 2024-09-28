import { useState } from "react";
import ok from "src/assets/icons/ok.png";
import uploadIcon from "src/assets/icons/uploadIcon.png";
import profileIcon from "src/assets/icons/profileUser.svg";

export default function RegisterFormStepTwo({
  nextStep,
  updateRegistrationData,
}) {
  const [avatar, setAvatar] = useState(null);
  const [imageURL, setImageURL] = useState(null);

  const fileReader = new FileReader();
  fileReader.onloadend = () => {
    setImageURL(fileReader.result);
  };

  const handlerOnChangeInput = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
    fileReader.readAsDataURL(file);
  };

  const handlerChangePhotoBtn = () => {
    setAvatar(null);
  };

  const handlerSubmitBtn = () => {
    updateRegistrationData({
      avatar,
      imageURL,
    });
    nextStep();
  };

  return (
    <div className="flex h-full w-full max-w-[400px] justify-center rounded-xl bg-white px-4 py-5 shadow-xl backdrop-blur-sm">
      {avatar ? (
        <div className="flex h-full w-full flex-col items-center justify-center gap-5 bg-white">
          <p className="text-xl">Edit photo</p>
          <div className="flex h-[400px] w-full bg-slate-500">
            <img
              src={imageURL ? imageURL : profileIcon}
              alt="user avatar"
              className="w-full"
            />
          </div>

          <form
            onSubmit={handlerSubmitBtn}
            className="flex w-full flex-col items-center gap-4"
          >
            <button
              type="submit"
              className="mt-8 inline-block w-full max-w-full cursor-pointer rounded-lg border bg-[#6168E4] py-4 text-white transition-colors duration-300 hover:border hover:border-[#6168E4] hover:bg-transparent hover:text-[#6168E4]"
            >
              Save
            </button>
            <button
              onClick={handlerChangePhotoBtn}
              type="button"
              className="mt-8 inline-block w-full max-w-full cursor-pointer rounded-lg border border-[#6168E4] bg-transparent py-4 text-[#6168E4] transition-colors duration-300 hover:bg-[#6168E4] hover:text-white"
            >
              Change photo
            </button>
          </form>
        </div>
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-5 bg-white">
          <p className="text-xl">Sign up</p>
          <div className="flex w-full items-center justify-between font-medium">
            <div className="mr-1 flex h-10 w-10 min-w-10 items-center justify-center rounded-full bg-[#6168E4]">
              <img src={ok} alt="" />
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
          <form
            onSubmit={nextStep}
            className="flex w-full flex-col items-center gap-4"
          >
            <label htmlFor="avatar">
              <input
                id="avatar"
                name="avatar"
                type="file"
                accept="image/jpeg, image/png"
                onChange={handlerOnChangeInput}
                autoComplete="off"
                className="hidden"
              />
              <img src={uploadIcon} alt="" className="h-[160px] w-[160px]" />
            </label>

            <button
              type="submit"
              className="mt-8 inline-block w-full max-w-full cursor-pointer rounded-lg border bg-[#6168E4] py-4 text-white transition-colors duration-300 hover:bg-[#3d43b9]"
            >
              Continue
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
