import manage from "../assets/manage.jpeg";
import cloud from "../assets/cloud.jpeg";
import cyber from "../assets/cyber.jpeg";
import network from "../assets/network.jpeg";
import ServiceCard from "./ServiceCard";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const data = [
  {
    id: "01",
    image: cloud,
    title: "Cloud Services",
    redirect: "/",
  },
  {
    id: "02",
    image: manage,
    title: "Managed IT Services",
    redirect: "/",
  },
  {
    id: "03",
    image: cyber,
    title: "Cybersecurity Services",
    redirect: "/",
  },
  {
    id: "04",
    image: network,
    title: "Network Infrastructure",
    redirect: "/",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });

  return (
    <div ref={ref} className="min-h-screen font-sora">
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={isInView ? { x: "0%", opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="pl-5 pt-5 pb-10 md:pb-0 md:pl-15 md:pt-15"
      >
        <h5 className="text-xs md:text-lg font-medium text-primary-400 py-4">
          Our IT Services
        </h5>
        <h1 className="text-2xl md:text-3xl tracking-wider font-light text-primary-700 max-w-xl">
          COMPREHENSIVE SOLUTIONS TAILORED TO YOUR NEEDS
        </h1>
      </motion.div>

      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={isInView ? { y: "0%", opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col md:flex-row justify-around items-center gap-8 md:gap-0"
      >
        {data.map((item, index) => (
          <ServiceCard key={index} data={item} />
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
