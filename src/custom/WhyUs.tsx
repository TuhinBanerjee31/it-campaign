import floating from "../assets/floating.jpeg";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const WhyUs = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true, margin: "-200px" });

  return (
    <div
      className="min-h-screen flex flex-col md:flex-row px-2 justify-around bg-cover bg-center bg-no-repeat m-2 rounded font-sora"
      style={{ backgroundImage: `url(${floating})` }}
      ref={ref}
    >
      <motion.div
        className="py-8"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h5 className="text-base text-white">Why Partner with Us?</h5>
        <h1 className="text-3xl uppercase text-white max-w-md">
          FOCUS ON YOUR MISSION. LET US MANAGE YOUR IT.
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col justify-center gap-10 md:gap-15"
      >
        <div className="bg-[#ffffff6c] p-4 rounded-tl-lg rounded-br-lg flex gap-6 md:gap-10">
          <h5 className="text-base text-primary-800 font-medium">
            Cutting-Edge Technology
          </h5>
          <p className="text-base">
            Describe the service and how customers or clients can benefit from
            it.
          </p>
        </div>

        <div className="bg-[#ffffff6c] p-4 rounded-tl-lg rounded-br-lg flex gap-6 md:gap-10">
          <h5 className="text-base text-primary-800 font-medium">
            Cost-Effective Solutions
          </h5>
          <p className="text-base">
            Describe the service and how customers or clients can benefit from
            it.
          </p>
        </div>

        <div className="bg-[#ffffff6c] p-4 rounded-tl-lg rounded-br-lg flex gap-6 md:gap-10">
          <h5 className="text-base text-primary-800 font-medium">
            24/7 Support and Monitoring
          </h5>
          <p className="text-base">
            Describe the service and how customers or clients can benefit from
            it.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default WhyUs;
