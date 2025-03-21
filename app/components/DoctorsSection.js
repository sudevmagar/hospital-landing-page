"use client";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (idx) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: idx * 0.2,
    },
  }),
};

export default function DoctorsSection() {
  return (
    <section id="doctors" className="px-6 py-12 bg-gray-100 md:px-24">
      <motion.h1
        className="text-5xl font-bold text-center text-[#444] drop-shadow-lg mb-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        our <span className="text-[#16a085]">doctors</span>
      </motion.h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 max-w-4xl mx-auto">
        {[
          { img: "doc-1.jpg", name: "Nour Ahmed" },
          { img: "doc-2.jpg", name: "Mostafa Said" },
          { img: "doc-3.jpg", name: "Omar Elmokhtar" },
          { img: "doc-4.jpg", name: "Tamer Hafiz" },
          { img: "doc-5.jpg", name: "Karem Elbnaa" },
          { img: "doc-6.jpg", name: "Mahmoud Baker" },
        ].map((doctor, idx) => (
          <motion.div
            key={idx}
            className="bg-white p-4 rounded-md shadow-md border-2 border-[#16a085] text-center w-full max-w-xs mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={idx}
            variants={cardVariants}
          >
            <div className="flex justify-center">
              <img
                src={`/image/${doctor.img}`}
                alt={doctor.name}
                className="h-40 w-40 rounded-md border-2 border-[#16a085] my-4 object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-[#444]">{doctor.name}</h3>
            <span className="text-[#16a085] text-base">expert doctor</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}