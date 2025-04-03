import { motion } from "motion/react";
import headerImg from "../assets/header.jpeg";
import HeaderBtn from "./buttons/HeaderBtn";

const Header = () => {
  return (
    <div className="flex font-sora">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
        className="min-h-[65vh] sm:min-h-[80vh] md:min-h-screen w-[85%] bg-cover bg-no-repeat rounded-lg flex flex-col justify-end md:justify-center gap-2 p-4 md:p-10 items-end m-5 z-10"
        style={{ backgroundImage: `url(${headerImg})` }}
      >
        <h3 className="text-base md:text-4xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-100 font-medium">
          Empowering Your Design
        </h3>
        <h3 className="text-base md:text-4xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-100 font-medium">
          Enhancing Your Digital Future
        </h3>
        <h3 className="text-base md:text-4xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-100 font-medium">
          Uplifting Blockchain Domain
        </h3>
        <HeaderBtn />
      </motion.div>

      <motion.div className="min-h-[65vh] sm:min-h-[80vh] md:min-h-screen max-w-[15%] flex justify-center items-center p-7 md:p-10 z-0">
        <motion.h1
          initial={{ y: "20vh", opacity: 0 }} // Start off-screen to the right
          animate={{ y: 10, opacity: 1 }} // Slide into place
          exit={{ y: "100vh" }} // Exit to the right (optional)
          transition={{ duration: 2, ease: "easeOut" }} // Adjust speed and easing
          className="text-center w-[80vh] md:w-[100vh] absolute rotate-90 text-primary-600 text-5xl sm:text-6xl md:text-7xl font-light tracking-wider"
        >
          IT Campaign
        </motion.h1>
      </motion.div>
    </div>
  );
};

export default Header;
