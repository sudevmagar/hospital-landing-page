"use client";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ServicesSection() {
  return (
    <section id="services" className="px-6 py-12 bg-gray-100 md:px-24">
      <motion.h1
        className="text-5xl font-bold text-center text-[#444] drop-shadow-lg mb-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        our <span className="text-[#16a085]">services</span>
      </motion.h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {[
          { icon: "fa-notes-medical", title: "free checkups" },
          { icon: "fa-ambulance", title: "24/7 ambulance" },
          { icon: "fa-user-md", title: "expert doctors" },
          { icon: "fa-pills", title: "medicines" },
          { icon: "fa-procedures", title: "bed facility" },
          { icon: "fa-heartbeat", title: "total care" },
        ].map((service, idx) => (
          <motion.div
            key={idx}
            className="bg-white p-6 rounded-md shadow-md border-2 border-[#16a085] text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <i className={`fas ${service.icon} text-5xl text-[#16a085] mb-2`}></i>
            <h3 className="text-2xl font-bold text-[#444]">{service.title}</h3>
            <p className="text-[#777] text-base py-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, labore?
            </p>
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 text-[#16a085] border-2 border-[#16a085] rounded-md shadow-md hover:bg-[#16a085] hover:text-white"
            >
              learn more <i className="fas fa-chevron-right ml-2 text-white bg-[#16a085] p-2 rounded-md"></i>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}