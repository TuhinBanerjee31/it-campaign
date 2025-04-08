import n1 from "../assets/n1.jpeg";
import n2 from "../assets/n2.jpeg";
import n3 from "../assets/n3.jpeg";
import NewsCard from "./NewsCard";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const data = [n1, n2, n3];

const Updates = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });

  return (
    <div ref={ref} className="min-h-screen py-30 font-sora px-3 overflow-hidden">
      <motion.h1
        initial={{ y: "-100%", x: "-200%", opacity: 0 }}
        animate={isInView ? { y: "0%", x: "0%", opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-2xl md:text-4xl tracking-wider font-light pb-7 text-primary-700 max-w-xl"
      >
        TECH INSIGHTS & UPDATES
      </motion.h1>

      <motion.div
        initial={{ y: "100%", x: "200%", opacity: 0 }}
        animate={isInView ? { y: "0%", x: "0%", opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="min-h-[60vh] flex-col md:flex-row gap-5 md:gap-0 p-6 md:p-2 bg-primary-50 border-primary-100 border rounded shadow flex justify-around items-center"
      >
        {data.map((item, index) => (
          <NewsCard key={index} image={item} />
        ))}
      </motion.div>
    </div>
  );
};

export default Updates;
