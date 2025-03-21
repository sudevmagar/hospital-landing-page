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

const ReviewSection = () => {
  const reviewData = [
    {
      name: "Ahmed Gaber",
      image: "/image/pic-1.png",
      rating: 4.5,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quod voluptates consequuntur aliquid exercitationem voluptate omnis maxime quia temporibus, dignissimos minima incidunt blanditiis deserunt eaque maiores. Dolorum deserunt nisi quis.",
    },
    {
      name: "Sara Salama",
      image: "/image/pic-2.png",
      rating: 4.5,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quod voluptates consequuntur aliquid exercitationem voluptate omnis maxime quia temporibus, dignissimos minima incidunt blanditiis deserunt eaque maiores. Dolorum deserunt nisi quis.",
    },
    {
      name: "Mohamed Samer",
      image: "/image/pic-3.png",
      rating: 4.5,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quod voluptates consequuntur aliquid exercitationem voluptate omnis maxime quia temporibus, dignissimos minima incidunt blanditiis deserunt eaque maiores. Dolorum deserunt nisi quis.",
    },
  ];

  return (
    <section id="review" className="py-8 px-6 md:px-24">
      <motion.h3
        className="text-3xl font-bold text-center text-[#444] mb-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        client's <span className="text-[#16a085]">review</span>
      </motion.h3>
      <div className="grid grid-cols-1 gap-8 max-w-[1440px] mx-auto md:grid-cols-3">
        {reviewData.map((review, index) => (
          <motion.div
            key={index}
            className="relative bg-white rounded-[2rem] shadow-[0_0.5rem_1.5rem_rgba(0,0,0,0.1)] border border-[#eee] text-center overflow-hidden z-0 max-w-[28rem] w-full h-[28rem] mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            variants={cardVariants}
          >
            {/* Green semi-circle taking half the card height */}
            <div className="absolute top-[1.5rem] left-1/2 -translate-x-1/2 bg-[#16a085] h-[14rem] w-[140%] rounded-b-[50%] -z-[1]"></div>

            <img
              src={review.image}
              alt={review.name}
              className="w-[8rem] h-[8rem] rounded-full object-cover border-[0.4rem] border-white mx-auto mt-3"
              onError={(e) => {
                console.error(`Failed to load image: ${review.image}`);
                e.target.src = "/image/placeholder.png";
              }}
            />
            <h3 className="text-white text-[1.5rem] font-semibold py-[1rem]">{review.name}</h3>
            <div className="flex justify-center gap-1 pb-2">
              {[...Array(5)].map((_, i) => (
                <i
                  key={i}
                  className={`fas ${
                    i < Math.floor(review.rating)
                      ? "fa-star"
                      : i === Math.floor(review.rating) && review.rating % 1 !== 0
                      ? "fa-star-half-alt"
                      : "fa-star text-opacity-50"
                  } text-white text-[1rem]`}
                ></i>
              ))}
            </div>
            <p className="text-[#777] text-[1rem] leading-[1.8] px-8 pt-[1.5rem] pb-6 h-[14rem] overflow-hidden">
              {review.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;