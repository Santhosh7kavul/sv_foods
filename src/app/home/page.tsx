/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState, useRef } from "react";


import img1 from "../../resources/slide1.png";
import img2 from "../../resources/slide2.png";
import img3 from "../../resources/slide3.png";
import item1 from "../../resources/item1.png";
import item2 from "../../resources/item2.png";
import item3 from "../../resources/item3.jpg";
import imgBG1 from "../../resources/img1.png";
import imgBG2 from "../../resources/img2.png";
import imgBG3 from "../../resources/img3.png";


const slides = [
  {
    image: img1,
    title: "High-Quality Cattle Feed",
    description: `“Feeding the future with natural,\n sustainable cattle feed for thriving, healthy animals.”`,
    position: "absolute left-0 w-full bottom-8 p-4  text-center text-2xl text-white font-bold whitespace-pre-line",
  },
  {
    image: img2,
    title: "Boosting Livestock Productivity",
    description: "Top-Recommended Silage Provider in India",
    position: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-black p-4 font-bold bg-white rounded-md shadow-lg text-2xl", // Centered
  },
  {
    image: img3,
    title: "Sustainable Farming",
    description: "Silage is a highly nutritious, fermented feed made up from corn and corn fodder at their milking stage offering a year-round,\n consistent food source that supports livestock productivity and health.",
    position: "absolute left-0 w-full text-center text-white p-4 font-bold top-8 whitespace-pre-line  text-xl", // Positioned at the top
  },
];

const items = [
  {
    image: item1,
    title: "Flourishing cattle",
  },
  {
    image: item2,
    title: "Silage fodder",
  },
  {
    image: item3,
    title: "Higher milk yield",
  },
]
const nutrientsItems = [
  "9-11% of Protein",
  "2-4% of Fat",
  "25-30% of Carbohydrates",
  "30-35% of Dry fodder",
];
const productionItems = [
  "Improved Growth and Development",
  "Enhanced Feed Efficiency",
  "Better Milk Production",
  "Sustainable Farming",
  "Improved Longevity",
]

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  // const [isVisible1, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (

    <div>
      {/* slides */}
      <div className="w-full h-[500px] mt-2">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          navigation
          modules={[Autoplay, Pagination, Navigation]}
          className="w-full h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="relative">
              {/* Background Image */}
              <Image
                src={slide.image}
                alt={slide.title}
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />

              {/* Description Positioned Accordingly */}
              <div
                className={slide.position}
              >
                <p>{slide.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* item images list */}
      <div className="flex flex-col items-center text-center mt-12">
        {/* Title Centered */}
        <h2 className="text-5xl font-bold mb-8 font-bold font-inria tracking-widest">Our Benefits</h2>

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Image Wrapper (Same Size for All) */}
              <div className="relative w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 ease-in-out transform hover:scale-110"
                />
              </div>

              {/* Title */}
              <p className="text-black font-semibold text-lg mt-3">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* image background and nutrients */}
      <div ref={sectionRef} className="relative w-full h-screen overflow-hidden mt-12 sm:mt-16">
        <Image
          src={imgBG1}
          alt="image Background1"
          fill
          priority
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* Title at the Top */}
        <h1 className="absolute top-4 left-1/2 transform -translate-x-1/2 text-black text-xl sm:text-2xl md:text-3xl font-bold font-inria px-4 py-2 rounded-md text-center bg-white/70">
          Natural feed for complete livestock wellness
        </h1>

        {/* List of Nutrients */}
        <ul className="absolute left-5 sm:left-10 top-1/2 transform -translate-y-1/2 text-2xl sm:text-3xl md:text-4xl font-bold text-white text-left p-4 sm:p-6 space-y-4 sm:space-y-6 underline">
          {nutrientsItems.map((item, index) => (
            <li
              key={index}
              className={`my-2 opacity-0 translate-x-[-20px] transition-all duration-700 ease-in-out ${isVisible ? "opacity-100 translate-x-0" : ""
                }`}
              style={{ transitionDelay: `${index * 300}ms` }} // Staggered delay
            >
              {item}
            </li>
          ))}
        </ul>
      </div>


      {/* image background and production */}
      <div className="flex flex-col items-center text-center mt-12">
        <h2 className="text-5xl mb- font-bold font-inria tracking-widest">Production facilities</h2>
      </div>


      <div className="relative w-full h-screen overflow-hidden sm:mt-16">
        {/* Background Image */}
        <Image
          src={imgBG2}
          alt="Image Background"
          fill
          priority
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* Title at the Top */}
        <h1 className="absolute top-10  text-primary-light text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold font-inika px-4 sm:px-6 md:px-8 py-2 rounded-md text-center ">
          "Revolutionizing cattle feeding with tailored, high-quality nutrition solutions that enhance livestock growth, optimize feed efficiency, and promote long-term animal health."
        </h1>

        {/* List of Production Items */}
        <ul className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-4 w-full p-4 font-inria">
          {productionItems.map((item, index) => (
            <li key={index} className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black w-max mx-auto">
              {item}
            </li>
          ))}
        </ul>
      </div>


      {/* reviews */}
      <div className="relative w-screen h-screen overflow-hidden mt-12 flex items-center justify-center">
        {/* Background Image with Light White Gradient */}
        <div className="absolute inset-0 bg-white/60 z-20"></div>
        <Image
          src={imgBG3}
          alt="image Background1"
          layout="fill"
          objectFit="cover"
          className="w-full h-full "
        />

        {/* Title at the Top */}
        <h1 className="absolute top-6 left-1/2 transform -translate-x-1/2 text-black text-4xl font-bold px-6 py-2 rounded-md z-20 font-bold font-inria tracking-widest">
          Reviews
        </h1>

        {/* Paragraph Division Centered */}
        <div className="relative z-30 bg-white text-black p-6 max-w-4xl text-center rounded-lg shadow-lg">
          <p className="text-xl">
            “As a customer of Corn Rich Silage, you can expect top-quality, nutritionally balanced feeding solutions designed to meet the unique needs of your herd. Our products are crafted with care and precision to support the health, growth, and productivity of your livestock. Whether you're looking to enhance feed efficiency, boost milk production, or improve overall herd performance, we are dedicated to providing you with the best solutions and expert guidance every step of the way.
            <br /><br />
            With Corn Rich Silage, you’re not just a customer—you’re a valued partner in achieving farming success.”
          </p>
        </div>
      </div>


    </div>
  );
};

export default Home;