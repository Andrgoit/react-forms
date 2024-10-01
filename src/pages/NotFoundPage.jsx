import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import error from "src/assets/image/Error.png";

export default function NotFoundPage() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-5 bg-gradient-to-br from-[#e79292] to-[#f00707]">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="flex h-full w-full max-w-[400px] flex-col items-center justify-center gap-5 rounded-xl bg-white px-4 py-5 shadow-xl backdrop-blur-sm"
      >
        <img src={error} alt="error" />
        <h2 className="text-center text-2xl font-bold text-black">
          Ooops! Something went wrong...
        </h2>
        <p className="text-center text-base text-[#65697E]">
          We are having some technical issues right now. Don’t worry, it’s not
          you - it’s us.
        </p>
        <Link
          to="/"
          className="mt-8 inline-block w-full max-w-full cursor-pointer rounded-lg border bg-[#6168E4] py-4 text-center text-white transition-colors duration-300 hover:bg-[#3d43b9]"
        >
          Go Home
        </Link>
      </motion.div>
    </div>
  );
}
