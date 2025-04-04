import overviewImg from "../assets/overview.jpeg";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const Overview = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true, margin: "-200px" });

  return (
    <div ref={ref} className="min-h-screen flex flex-col md:flex-row items-center justify-around font-sora p-2 py-30 md:py-10 bg-primary-50">
      {/* Image moves in from left */}
      <motion.img
        src={overviewImg}
        className="w-[70%] md:w-[35vw] rounded-bl-4xl rounded-tr-4xl"
        initial={{ x: "-100%", opacity: 0 }}
        animate={isInView ? { x: "0%", opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      {/* Text moves in from right */}
      <motion.div
        className="flex flex-col gap-2 md:gap-4 max-w-lg p-3"
        initial={{ x: "100%", opacity: 0 }}
        animate={isInView ? { x: "0%", opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      >
        <h5 className="text-xs md:text-lg font-medium text-primary-400">About Us</h5>
        <h2 className="text-3xl md:text-4xl tracking-wider text-primary-700">
          Dedicated to Delivering Excellence in IT Solutions.
        </h2>
        <p className="text-base tracking-widest text-primary-700">
          We are dedicated to providing exceptional IT solutions that drive
          innovation, enhance efficiency, and support seamless digital
          transformation. With a commitment to excellence, we tailor our
          services to meet your unique business needs, ensuring reliability,
          security, and long-term success in an ever-evolving digital landscape.
        </p>
      </motion.div>
    </div>
  );
};

export default Overview;
