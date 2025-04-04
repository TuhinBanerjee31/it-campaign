import { motion, useInView } from "motion/react";
import { useRef } from "react";
import StatCard from "./StatCard";

const data = [
  {
    value: 11,
    title: "Years of Experience",
    symbol: "+",
    summary: "A legacy of excellence IT services.",
  },
  {
    value: 70,
    title: "Increase in Efficiency",
    symbol: "%",
    summary: "Streamlined operations and improved workflow.",
  },
  {
    value: 92,
    title: "Client Satisfaction Rate",
    symbol: "%",
    summary: "Trusted by businesses across all sectors for superior service.",
  },
  {
    value: 1400,
    title: "Projects Completed",
    symbol: "+",
    summary: "Delivering cutting-edge solutions for a seamless digital future.",
  },
];

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });

  console.log(ref)

  return (
    <div ref={ref} className="min-h-screen font-sora">
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={isInView ? { x: "0%", opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="pl-5 my-30 md:pl-15"
      >
        <h1 className="text-2xl md:text-4xl tracking-wider font-light text-primary-700 max-w-xl">
          INNOVATIVE SOLUTIONS
        </h1>
        <h1 className="text-2xl md:text-4xl tracking-wider font-light text-primary-700 max-w-xl">
          FOR BUSINESSES
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-wrap md:flex-nowrap gap-10 md:gap-0 justify-around px-4"
      >
        {data.map((item, index) => (
          <StatCard key={index} reference={ref} data={item} />
        ))}
      </motion.div>
    </div>
  );
};

export default Stats;
