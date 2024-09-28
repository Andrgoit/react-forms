import { motion } from "framer-motion";
import { MdLogout } from "react-icons/md";

import userIcon from "src/assets/icons/profileUser.svg";
import linkedinIcon from "src/assets/icons/linkedin.svg";
import instagramIcon from "src/assets/icons/instagram.svg";
import telegramIcon from "src/assets/icons/telegram.svg";
import facebookIcon from "src/assets/icons/facebook.svg";
import skypeIcon from "src/assets/icons/skype.svg";

export default function HomePage({ user = {}, handlerLogoutUser }) {
  const {
    login,
    firstName,
    lastName,
    password,
    imageURL = userIcon,
    facebook,
    instagram,
    linkedin,
    skype,
    telegram,
  } = user;
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-5 bg-gradient-to-br from-[#1ce08e] to-[#480051]">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="flex h-full w-full max-w-[400px] flex-col items-center justify-center gap-5 rounded-xl bg-white px-4 py-5 shadow-xl backdrop-blur-sm"
      >
        <h2>{`${firstName}, welcome to your profile!`}</h2>
        <div>
          <img src={imageURL} alt={firstName} />
        </div>
        <div>
          <div className="flex flex-col items-start gap-2">
            <p>Login: {login}</p>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Password: {password}</p>
            <p className="mb-3">Your social links:</p>
          </div>
          <div className="flex flex-col items-start gap-2">
            {linkedin && (
              <div className="flex items-center gap-3">
                <img src={linkedinIcon} alt="linkedin icon" />
                <p>linkedin: {linkedin}</p>
              </div>
            )}
            {instagram && (
              <div className="flex items-center gap-3">
                <img src={instagramIcon} alt="instagram icon" />
                <p>Instagram: {instagram}</p>
              </div>
            )}
            {telegram && (
              <div className="flex items-center gap-3">
                <img src={telegramIcon} alt="telegram icon" />
                <p>Telegram: {telegram}</p>
              </div>
            )}
            {facebook && (
              <div className="flex items-center gap-3">
                <img src={facebookIcon} alt="facebook icon" />
                <p>Facebook: {facebook}</p>
              </div>
            )}
            {skype && (
              <div className="flex items-center gap-3">
                <img src={skypeIcon} alt="skype icon" />
                <p>Skype: {skype}</p>
              </div>
            )}

            <button
              onClick={handlerLogoutUser}
              className="flex w-full max-w-full cursor-pointer items-center justify-center gap-2 rounded-lg border bg-[#6168E4] py-4 text-center text-white transition-colors duration-300 hover:bg-[#3d43b9]"
            >
              Logout <MdLogout size={28} />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
