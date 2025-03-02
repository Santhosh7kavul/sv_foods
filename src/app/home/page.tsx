// /* eslint-disable react/no-unescaped-entities */
// /* eslint-disable react-hooks/exhaustive-deps */
// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import Image from "next/image";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { useEffect, useState, useRef } from "react";
// import { motion } from "framer-motion";

// import img1 from "../../resources/slide1.png";
// import img2 from "../../resources/slide2.png";
// import img3 from "../../resources/slide3.png";
// import item1 from "../../resources/item1.png";
// import item2 from "../../resources/item2.png";
// import item3 from "../../resources/item3.jpg";
// import imgBG11 from "../../resources/img1.png";
// import imgBG12 from "../../resources/img12.png";
// import imgBG2 from "../../resources/img2.png";
// import imgBG22 from "../../resources/img22.png";
// import imgBG3 from "../../resources/img3.png";


// const slides = [
//   // {
//   //   image: img1, // Thumbnail or background image
//   //   title: "Experience the Quality",
//   //   video: "your-video-url.mp4", // Replace with actual video URL
//   //   position: "absolute left-0 w-full bottom-8 p-4 text-center text-white font-bold",
//   //   showVideo: false, // Controls video playback
//   // },
//   {
//     image: img1,
//     title: "High-Quality Cattle Feed",
//     description: `“Feeding the future with natural,\n sustainable cattle feed for thriving, healthy animals.”`,
//     position: "absolute left-0 w-full bottom-8 p-4  text-center text-2xl text-white font-bold whitespace-pre-line",
//   },
//   {
//     image: img2,
//     title: "Boosting Livestock Productivity",
//     description: "Top-Recommended Silage Provider in India",
//     position: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-black p-4 font-bold bg-white rounded-md shadow-lg text-2xl", // Centered
//   },
//   {
//     image: img3,
//     title: "Sustainable Farming",
//     description: "Silage is a highly nutritious, fermented feed made up from corn and corn fodder at their milking stage offering a year-round,\n consistent food source that supports livestock productivity and health.",
//     position: "absolute left-0 w-full text-center text-white p-4 font-bold top-8 whitespace-pre-line  text-xl", // Positioned at the top
//   },
// ];

// const items = [
//   {
//     image: item1,
//     title: "Flourishing cattle",
//   },
//   {
//     image: item2,
//     title: "Silage fodder",
//   },
//   {
//     image: item3,
//     title: "Higher milk yield",
//   },
// ]
// const nutrientsItems = [
//   "9-11% of Protein",
//   "2-4% of Fat",
//   "25-30% of Carbohydrates",
//   "30-35% of Dry fodder",
// ];
// const productionItems = [
//   "Improved Growth and Development",
//   "Enhanced Feed Efficiency",
//   "Better Milk Production",
//   "Sustainable Farming",
//   "Improved Longevity",
// ]

// const Home = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   // const [isVisible1, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);
//   const [bgImage, setBgImage] = useState(imgBG11); // Default to imgBG1
//   const [bgImage1, setBgImage1] = useState(imgBG2);
//   useEffect(() => {
//     const updateImage = () => {
//       if (window.innerWidth < 640) {
//         setBgImage(imgBG12); // Mobile Image
//         setBgImage1(imgBG22);
//       } else {
//         setBgImage(imgBG11); // Desktop Image
//         setBgImage1(imgBG2);
//       }
//     };

//     updateImage(); // Run on mount
//     window.addEventListener("resize", updateImage); // Listen for screen resize

//     return () => window.removeEventListener("resize", updateImage); // Cleanup
//   }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsVisible(entry.isIntersecting);
//       },
//       { threshold: 0.5 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);
//   return (

//     <div>
//       {/* slides */}
//       <div className="w-full h-[500px] mt-2">
//         <Swiper
//           spaceBetween={50}
//           slidesPerView={1}
//           autoplay={{ delay: 3000 }}
//           pagination={{ clickable: true }}
//           navigation
//           modules={[Autoplay, Pagination, Navigation]}
//           className="w-full h-full"
//         >
//           {slides.map((slide, index) => (
//             <SwiperSlide key={index} className="relative">
//               {/* Background Image */}
//               <Image
//                 src={slide.image}
//                 alt={slide.title}
//                 layout="fill"
//                 objectFit="cover"
//                 className="w-full h-full"
//               />

//               {/* Description Positioned Accordingly */}
//               <div
//                 className={slide.position}
//               >
//                 <p>{slide.description}</p>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/* item images list */}
//       <div className="flex flex-col items-center text-center mt-12">
//         {/* Title Centered */}
//         <h2 className="text-5xl font-bold mb-8 font-bold font-inria tracking-widest">Our Benefits</h2>

//         {/* Items Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {items.map((item, index) => (
//             <div key={index} className="flex flex-col items-center">
//               {/* Image Wrapper (Same Size for All) */}
//               <div className="relative w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg">
//                 <Image
//                   src={item.image}
//                   alt={item.title}
//                   layout="fill"
//                   objectFit="cover"
//                   className="transition-transform duration-300 ease-in-out transform hover:scale-110"
//                 />
//               </div>

//               {/* Title */}
//               <p className="text-black font-semibold text-lg mt-3">{item.title}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* image background and nutrients */}
//        <div ref={sectionRef} className="relative w-full h-screen overflow-hidden mt-12 sm:mt-16 flex flex-col items-center">
//       {/* Background Image - Dynamically Changes Based on Screen Size */}
//       <div className="absolute top-0 left-0 w-full h-full">
//         <Image
//           src={bgImage}
//           alt="Background"
//           layout="fill"
//           objectFit="cover"
//           objectPosition="center"
//           priority
//           className="w-full h-full"
//         />
//       </div>

//       {/* Title - Responsive Text Size */}
//       <h1 className="absolute top-4 left-1/2 transform -translate-x-1/2 text-base sm:text-xl md:text-2xl lg:text-3xl font-bold font-inria px-3 py-2 rounded-md text-center bg-white/70">
//         Natural feed for complete livestock wellness
//       </h1>

//       {/* Animated Nutrients List */}
//       <motion.ul
//         className="absolute left-5 sm:left-10 top-1/2 transform -translate-y-1/2 text-base sm:text-xl md:text-2xl lg:text-3xl font-bold text-white text-left p-2 sm:p-4 space-y-2 sm:space-y-4 underline"
//         initial="hidden"
//         animate={isVisible ? "visible" : "hidden"}
//         variants={{
//           hidden: { opacity: 0, x: -50 },
//           visible: { opacity: 1, x: 0, transition: { staggerChildren: 0.3, ease: "easeInOut" } },
//         }}
//       >
//         {nutrientsItems.map((item, index) => (
//           <motion.li
//             key={index}
//             variants={{
//               hidden: { opacity: 0, x: -30 },
//               visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: index * 0.3 } },
//             }}
//           >
//             {item}
//           </motion.li>
//         ))}
//       </motion.ul>
//     </div>



//       {/* image background and production */}
//       <div className="flex flex-col items-center text-center mt-12">
//         <h2 className="text-5xl mb- font-bold font-inria tracking-widest">Production facilities</h2>
//       </div>


//       <div className="relative w-full h-screen overflow-hidden sm:mt-16">
//         {/* Background Image */}
//         <Image
//           src={bgImage1}
//           alt="Image Background"
//           fill
//           priority
//           className="absolute top-0 left-0 w-full h-full object-cover"
//         />

//         {/* Title at the Top */}
//         <h1 className="absolute top-10  text-primary-light text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold font-inika px-4 sm:px-6 md:px-8 py-2 rounded-md text-center ">
//           "Revolutionizing cattle feeding with tailored, high-quality nutrition solutions that enhance livestock growth, optimize feed efficiency, and promote long-term animal health."
//         </h1>

//         {/* List of Production Items */}
//         <ul className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-4 w-full p-4 font-inria">
//           {productionItems.map((item, index) => (
//             <li key={index} className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black w-max mx-auto">
//               {item}
//             </li>
//           ))}
//         </ul>
//       </div>


//       {/* reviews */}
//       <div className="relative w-screen h-screen overflow-hidden mt-12 flex items-center justify-center">
//         {/* Background Image with Light White Gradient */}
//         <div className="absolute inset-0 bg-white/60 z-20"></div>
//         <Image
//           src={imgBG3}
//           alt="image Background1"
//           layout="fill"
//           objectFit="cover"
//           className="w-full h-full "
//         />

//         {/* Title at the Top */}
//         <h1 className="absolute top-6 left-1/2 transform -translate-x-1/2 text-black text-4xl font-bold px-6 py-2 rounded-md z-20 font-bold font-inria tracking-widest">
//           Reviews
//         </h1>

//         {/* Paragraph Division Centered */}
//         <div className="relative z-30 bg-white text-black p-6 max-w-4xl text-center rounded-lg shadow-lg">
//           <p className="text-xl">
//             “As a customer of Corn Rich Silage, you can expect top-quality, nutritionally balanced feeding solutions designed to meet the unique needs of your herd. Our products are crafted with care and precision to support the health, growth, and productivity of your livestock. Whether you're looking to enhance feed efficiency, boost milk production, or improve overall herd performance, we are dedicated to providing you with the best solutions and expert guidance every step of the way.
//             <br /><br />
//             With Corn Rich Silage, you’re not just a customer—you’re a valued partner in achieving farming success.”
//           </p>
//         </div>
//       </div>


//     </div>
//   );
// };

// export default Home;



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
import { motion } from "framer-motion";

import img1 from "../../resources/slide1.png";
import img2 from "../../resources/slide2.png";
import img3 from "../../resources/slide3.png";
import item1 from "../../resources/item1.png";
import item2 from "../../resources/item2.png";
import item3 from "../../resources/item3.jpg";
import imgBG11 from "../../resources/img1.png";
import imgBG12 from "../../resources/img12.png";
import imgBG2 from "../../resources/img2.png";
import imgBG22 from "../../resources/img22.png";
import imgBG3 from "../../resources/img3.png";

const slides = [
  {
    image: img1,
    title: "High-Quality Cattle Feed",
    description: `"Feeding the future with natural,\n sustainable cattle feed for thriving, healthy animals."`,
    // position: "absolute left-0 w-full bottom-8 p-4 text-center text-sm sm:text-xl md:text-2xl text-white font-bold whitespace-pre-line",
    position: 'absolute left-1/2 -translate-x-1/2 text-center text-white p-2 sm:p-4 font-bold top-4 sm:top-8 whitespace-pre-line text-sm sm:text-lg md:text-xl max-w-full  w-full px-4 bg-gray-800 bg-opacity-90 rounded-lg inline-block'
  },
  {
    image: img2,
    title: "Boosting Livestock Productivity",
    description: "Top-Recommended Silage Provider in India",
    position: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-black p-2 sm:p-4 font-bold bg-white/90 rounded-md shadow-lg text-sm sm:text-xl md:text-2xl max-w-xs sm:max-w-md",
  },
  {
    image: img3,
    title: "Sustainable Farming",
    description: "Silage is a highly nutritious, fermented feed made up from corn and corn fodder at their milking stage offering a year-round,\n consistent food source that supports livestock productivity and health.",
    // position: " absolute left-0 w-full text-center text-white p-2 sm:p-4 font-bold top-4 sm:top-8 whitespace-pre-line text-sm sm:text-lg md:text-xl max-w-full px-4", 
    position: 'absolute left-1/2 -translate-x-1/2 text-center text-white p-2 sm:p-4 font-bold top-4 sm:top-8 whitespace-pre-line text-sm sm:text-lg md:text-xl max-w-full  w-full px-4 bg-gray-800 bg-opacity-90 rounded-lg inline-block'
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
];



const nutrientsItems = [
  "High-quality silage feed",
  "Available 24x7, 365 days a year",
  "Helps maintain good health and milk production in cattle",
  "Increases milk yield by 20%",
  "Reduces labor costs by 40%",
  "Storage period of up to 18 months",
  "30-40% dry matter (DM) content",
  "8-9% crude protein (CP) content",
  "Reduces feed costs by 25%",
  "Enhances the growth of goats and sheep as well",


];

const productionItems = [
  "Improved Growth and Development",
  "Enhanced Feed Efficiency",
  "Better Milk Production",
  "Sustainable Farming",
  "Improved Longevity",
];

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [bgImage, setBgImage] = useState(imgBG11);
  const [bgImage1, setBgImage1] = useState(imgBG2);

  useEffect(() => {
    const updateImage = () => {
      if (window.innerWidth < 640) {
        setBgImage(imgBG12); // Mobile Image
        setBgImage1(imgBG22);
      } else {
        setBgImage(imgBG11); // Desktop Image
        setBgImage1(imgBG2);
      }
    };

    updateImage(); // Run on mount
    window.addEventListener("resize", updateImage); // Listen for screen resize

    return () => window.removeEventListener("resize", updateImage); // Cleanup
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 } // Lower threshold for better mobile visibility
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
    <div className="overflow-x-hidden">

      {/* Slides */}
      <div className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] mt-2">
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
              <div className={slide.position}>
                <p>{slide.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Item images list */}
      <div className="flex flex-col items-center text-center mt-8 sm:mt-12 px-4">
        {/* Title Centered */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 font-inria tracking-widest">Our Benefits</h2>

        {/* Items Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Image Wrapper (Responsive Size) */}
              <div className="relative w-full h-[250px] sm:w-[550px] sm:h-[320px] md:w-[280px] md:h-[360px] lg:w-[300px] lg:h-[400px] overflow-hidden rounded-lg shadow-lg">
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

      <div className="flex justify-center items-center w-full mt-12">
        <motion.video
          src="/videos/video.mp4"
          controls
          className="w-full max-w-[600px] rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2 * 0.1 }}
        />
      </div>


      {/* Image background and nutrients */}
      <div
        ref={sectionRef}
        className="relative w-full h-[60vh] sm:h-[80vh] md:h-screen overflow-hidden mt-8 sm:mt-12 md:mt-16 flex flex-col items-center"
      >
        {/* Background Image - Dynamically Changes Based on Screen Size */}
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src={bgImage}
            alt="Background"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
            className="w-full h-full"
          />
        </div>

        {/* Title - Responsive Text Size */}
        <h1 className="absolute top-4 left-1/2 transform -translate-x-1/2 text-base sm:text-4xl md:text-4xl lg:text-3xl font-bold font-inria px-3 py-2 rounded-md text-center bg-white/80 max-w-[100%] sm:max-w-[100%]">
          Natural feed for complete livestock wellness
        </h1>

        {/* Animated Nutrients List */}
        <motion.ul
          className="absolute left-3 sm:left-5 md:left-10 top-1/4 transform -translate-y-1/2 text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-white text-left p-2 sm:p-4 space-y-1 sm:space-y-2 md:space-y-4 underline bg-black/30 sm:bg-transparent rounded-md"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { staggerChildren: 0.3, ease: "easeInOut" } },
          }}
        >
          {nutrientsItems.map((item, index) => (
            <motion.li
              key={index}
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: index * 0.3 } },
              }}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </div>

      {/* Image background and production */}
      <div className="flex flex-col items-center text-center mt-8 sm:mt-12 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 font-inria tracking-widest">Production facilities</h2>
      </div>

      <div className="relative w-full h-[60vh] sm:h-[80vh] md:h-screen overflow-hidden">
        {/* Background Image */}
        <Image
          src={bgImage1}
          alt="Image Background"
          fill
          priority
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* Title at the Top */}
        <h1 className="absolute top-4 sm:top-10 left-1/2 transform -translate-x-1/2 text-primary-light text-sm sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl font-semibold font-inika px-4 py-2 rounded-md text-center max-w-[95%] sm:max-w-[90%] md:max-w-[80%]  sm:bg-transparent ">
          "Revolutionizing cattle feeding with tailored, high-quality nutrition solutions that enhance livestock growth, optimize feed efficiency, and promote long-term animal health."
        </h1>

        {/* List of Production Items */}
        <ul className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-2 sm:space-y-4 w-full p-4 font-inria mt-4">
          {productionItems.map((item, index) => (
            <li key={index} className="text-sm sm:text-xl md:text-xl lg:text-2xl xl:text-3xl font-bold text-black w-max mx-auto  px-2 py-1 rounded-md sm:bg-transparent">
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Reviews */}
      <div className="relative w-full h-[70vh] sm:h-[80vh] md:h-screen overflow-hidden mt-8 sm:mt-12 flex items-center justify-center px-4">
        {/* Background Image with Light White Gradient */}
        <div className="absolute inset-0 bg-white/70 z-20"></div>
        <Image
          src={imgBG3}
          alt="image Background1"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />

        {/* Title at the Top */}
        <h1 className="absolute top-4 sm:top-6 left-1/2 transform -translate-x-1/2 text-black text-2xl sm:text-3xl md:text-4xl font-bold px-4 sm:px-6 py-2 rounded-md z-20 font-inria tracking-widest">
          Reviews
        </h1>

        {/* Paragraph Division Centered */}
        <div className="relative z-30 bg-white text-black p-4 sm:p-6 max-w-[95%] sm:max-w-xl md:max-w-2xl lg:max-w-4xl text-center rounded-lg shadow-lg">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl">
            "As a customer of Corn Rich Silage, you can expect top-quality, nutritionally balanced feeding solutions designed to meet the unique needs of your herd. Our products are crafted with care and precision to support the health, growth, and productivity of your livestock. Whether you're looking to enhance feed efficiency, boost milk production, or improve overall herd performance, we are dedicated to providing you with the best solutions and expert guidance every step of the way.
            <br /><br />
            With Corn Rich Silage, you're not just a customer—you're a valued partner in achieving farming success."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;