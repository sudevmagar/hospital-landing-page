"use client";
import { motion } from "framer-motion";

const contentVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function About() {
  return (
    <section id="about" className="px-6 py-12 md:px-24">
      <motion.h1
        className="text-5xl font-bold text-center text-[#444] drop-shadow-lg mb-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-[#16a085]">about</span> us
      </motion.h1>
      <div className="flex flex-wrap items-center gap-6">
        <motion.div
          className="flex-1 min-w-[300px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={contentVariants}
        >
          <img src="/image/about-img.svg" alt="About" className="w-full" />
        </motion.div>
        <motion.div
          className="flex-1 min-w-[300px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={contentVariants}
        >
          <h3 className="text-4xl font-bold text-[#444] drop-shadow-lg">
            we take care of your healthy life
          </h3>
          <p className="text-[#777] text-lg py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum praesentium, aperiam amet dicta sunt id.
          </p>
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 text-[#16a085] border-2 border-[#16a085] rounded-md shadow-md hover:bg-[#16a085] hover:text-white"
          >
            learn more <i className="fas fa-chevron-right ml-2 text-white bg-[#16a085] p-2 rounded-md"></i>
          </a>
        </motion.div>
      </div>
    </section>
  );
}