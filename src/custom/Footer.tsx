import CustomBtn from "./buttons/CustomBtn";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import foot from "../assets/footer.jpeg";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });

  return (
    <footer
      ref={ref}
      className="bg-center bg-cover bg-no-repeat font-sora"
      style={{ backgroundImage: `url(${foot})` }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="container px-6 py-12 mx-auto"
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <h1 className="max-w-lg text-xl font-medium tracking-tight text-primary-100 xl:text-2xl">
              Subscribe our newsletter to get an update.
            </h1>

            <div className="flex flex-col items-center gap-2 mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
              <input
                id="email"
                type="text"
                className="px-4 py-2 text-gray-700 bg-white border rounded-md border-gray-600 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                placeholder="Email Address"
              />

              <CustomBtn title={"Submit"} redirect={""} />

              {/* <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                Subscribe
              </button> */}
            </div>
          </div>

          <div>
            <p className="font-semibold text-primary-100">Quick Link</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <p className="text-primary-300 transition-colors duration-300 hover:text-primary-200 hover:underline hover:cursor-pointer">
                Home
              </p>
              <p className="text-primary-300 transition-colors duration-300 hover:text-primary-200 hover:underline hover:cursor-pointer">
                Who We Are
              </p>
              <p className="text-primary-300 transition-colors duration-300 hover:text-primary-200 hover:underline hover:cursor-pointer">
                Our Philosophy
              </p>
            </div>
          </div>

          <div>
            <p className="font-semibold text-primary-100">Industries</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <p className="text-primary-300 transition-colors duration-300 hover:text-primary-200 hover:underline hover:cursor-pointer">
                Retail & E-Commerce
              </p>
              <p className="text-primary-300 transition-colors duration-300 hover:text-primary-200 hover:underline hover:cursor-pointer">
                Information Technology
              </p>
              <p className="text-primary-300 transition-colors duration-300 hover:text-primary-200 hover:underline hover:cursor-pointer">
                Finance & Insurance
              </p>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 md:my-8 h-2" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex flex-1 gap-4 hover:cursor-pointer">
            <p className="font-sans text-primary-50 text-start py-2 md:text-center md:text-lg">
              © 2025 IT Campaign Inc. All rights reserved.
            </p>
          </div>

          <div className="flex gap-4 hover:cursor-pointer">
            <img
              src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg"
              width="30"
              height="30"
              alt="fb"
            />
            <img
              src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg"
              width="30"
              height="30"
              alt="tw"
            />
            <img
              src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg"
              width="30"
              height="30"
              alt="inst"
            />
            <img
              src="https://www.svgrepo.com/show/94698/github.svg"
              className=""
              width="30"
              height="30"
              alt="gt"
            />
            <img
              src="https://www.svgrepo.com/show/22037/path.svg"
              width="30"
              height="30"
              alt="pn"
            />
            <img
              src="https://www.svgrepo.com/show/28145/linkedin.svg"
              width="30"
              height="30"
              alt="in"
            />
            <img
              src="https://www.svgrepo.com/show/22048/dribbble.svg"
              className=""
              width="30"
              height="30"
              alt="db"
            />
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
