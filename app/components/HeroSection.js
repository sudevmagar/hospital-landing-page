"use client"
import Image from "next/image";
export default function HeroSection() {
    return (
      <section id="home" className="flex flex-wrap items-center mt-8 pt-12 gap-6 px-6 md:px-24">
        <div className="flex-1 min-w-[300px]">
          <Image width={0} height={0} src="/image/home-img.svg" alt="Home" className="w-full" />
        </div>
        <div className="flex-1 min-w-[300px]">
          <h3 className="text-3xl font-bold text-[#444] drop-shadow-lg md:text-4xl">
            stay safe, stay healthy
          </h3>
          <p className="text-[#777] text-base py-3 md:text-lg md:py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptatibus maiores quo nesciunt quod minus!
          </p>
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 text-[#16a085] border-2 border-[#16a085] rounded-md shadow-md hover:bg-[#16a085] hover:text-white"
          >
            contact us <i className="fas fa-chevron-right ml-2 text-white bg-[#16a085] p-2 rounded-md"></i>
          </a>
        </div>
      </section>
    );
  }