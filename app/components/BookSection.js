"use client";
import { motion } from "framer-motion";

const contentVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function BookSection() {
  return (
    <section id="book" className="px-6 py-12 md:px-24">
      <motion.h1
        className="text-5xl font-bold text-center text-[#444] drop-shadow-lg mb-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-[#16a085]">book</span> now
      </motion.h1>
      <div className="flex flex-wrap items-center gap-6">
        <motion.div
          className="flex-1 min-w-[300px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={contentVariants}
        >
          <img src="/image/book-img.svg" alt="Book" className="w-full" />
        </motion.div>
        <motion.form
          className="flex-1 min-w-[300px] bg-white p-6 rounded-md shadow-md border-2 border-[#16a085] text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={contentVariants}
        >
          <h3 className="text-3xl font-bold text-[#444] mb-4">book appointment</h3>
          <input
            type="text"
            placeholder="your name"
            className="w-full p-2 mb-4 border-2 border-[#16a085] rounded-md text-[#444]"
          />
          <input
            type="number"
            placeholder="your number"
            className="w-full p-2 mb-4 border-2 border-[#16a085] rounded-md text-[#444]"
          />
          <input
            type="email"
            placeholder="your email"
            className="w-full p-2 mb-4 border-2 border-[#16a085] rounded-md text-[#444]"
          />
          <input type="date" className="w-full p-2 mb-4 border-2 border-[#16a085] rounded-md text-[#444]" />
          <input
            type="submit"
            value="book now"
            className="px-8 py-2 text-[#16a085] border-2 border-[#16a085] rounded-md shadow-md hover:bg-[#16a085] hover:text-white cursor-pointer"
          />
        </motion.form>
      </div>
    </section>
  );
}