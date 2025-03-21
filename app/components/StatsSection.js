"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

export default function StatsSection() {
  const stats = [
    { icon: "fa-user-md", stat: 140, text: "doctors at work" },
    { icon: "fa-users", stat: 1040, text: "satisfied patients" },
    { icon: "fa-procedures", stat: 500, text: "bed facility" },
    { icon: "fa-hospital", stat: 80, text: "available hospitals" },
  ];

  return (
    <section className="grid grid-cols-1 gap-6 px-6 py-12 md:grid-cols-4 md:px-24">
      {stats.map((item, idx) => (
        <motion.div
          key={idx}
          className="text-center p-6 border-2 border-[#16a085] rounded-md shadow-[0_0.5rem_1.5rem_rgba(0,0,0,0.1)]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
        >
          <i className={`fas ${item.icon} text-5xl text-[#16a085] mb-2`}></i>
          <Counter target={item.stat} />
          <p className="text-[#777] text-lg">{item.text}</p>
        </motion.div>
      ))}
    </section>
  );
}

function Counter({ target }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (value) => Math.round(value));
  const displayCount = useTransform(rounded, (value) => `${value}+`);

  useEffect(() => {
    const animation = animate(count, target, {
      duration: 3,
      ease: "easeOut",
    });
    return animation.stop;
  }, [count, target]);

  return <motion.h3 className="text-4xl font-bold text-[#444]">{displayCount}</motion.h3>;
}