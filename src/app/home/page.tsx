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
//   {
//     image: img1,
//     title: "High-Quality Cattle Feed",
//     description: `"Feeding the future with natural,\n sustainable cattle feed for thriving, healthy animals."`,
//     // position: "absolute left-0 w-full bottom-8 p-4 text-center text-sm sm:text-xl md:text-2xl text-white font-bold whitespace-pre-line",
//     position: 'absolute left-1/2 -translate-x-1/2 text-center text-white p-2 sm:p-4 font-bold top-4 sm:top-8 whitespace-pre-line text-sm sm:text-lg md:text-xl max-w-full  w-full px-4 bg-gray-800 bg-opacity-90 rounded-lg inline-block'
//   },
//   {
//     image: img2,
//     title: "Boosting Livestock Productivity",
//     description: "Top-Recommended Silage Provider in India",
//     position: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-black p-2 sm:p-4 font-bold bg-white/90 rounded-md shadow-lg text-sm sm:text-xl md:text-2xl max-w-xs sm:max-w-md",
//   },
//   {
//     image: img3,
//     title: "Sustainable Farming",
//     description: "Silage is a highly nutritious, fermented feed made up from corn and corn fodder at their milking stage offering a year-round,\n consistent food source that supports livestock productivity and health.",
//     // position: " absolute left-0 w-full text-center text-white p-2 sm:p-4 font-bold top-4 sm:top-8 whitespace-pre-line text-sm sm:text-lg md:text-xl max-w-full px-4", 
//     position: 'absolute left-1/2 -translate-x-1/2 text-center text-white p-2 sm:p-4 font-bold top-4 sm:top-8 whitespace-pre-line text-sm sm:text-lg md:text-xl max-w-full  w-full px-4 bg-gray-800 bg-opacity-90 rounded-lg inline-block'
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
// ];



// const nutrientsItems = [
//   "High-quality silage feed",
//   "Available 24x7, 365 days a year",
//   "Helps maintain good health and milk production in cattle",
//   "Increases milk yield by 20%",
//   "Reduces labor costs by 40%",
//   "Storage period of up to 18 months",
//   "30-40% dry matter (DM) content",
//   "8-9% crude protein (CP) content",
//   "Reduces feed costs by 25%",
//   "Enhances the growth of goats and sheep as well",


// ];

// const productionItems = [
//   "Improved Growth and Development",
//   "Enhanced Feed Efficiency",
//   "Better Milk Production",
//   "Sustainable Farming",
//   "Improved Longevity",
// ];

// const Home = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);
//   const [bgImage, setBgImage] = useState(imgBG11);
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
//       { threshold: 0.2 } // Lower threshold for better mobile visibility
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
//     <div className="overflow-x-hidden">

//       {/* Slides */}
//       <div className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] mt-2">
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
//               <div className={slide.position}>
//                 <p>{slide.description}</p>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/* Item images list */}
//       <div className="flex flex-col items-center text-center mt-8 sm:mt-12 px-4">
//         {/* Title Centered */}
//         <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 font-inria tracking-widest">Our Benefits</h2>

//         {/* Items Grid */}
//         <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
//           {items.map((item, index) => (
//             <div key={index} className="flex flex-col items-center">
//               {/* Image Wrapper (Responsive Size) */}
//               <div className="relative w-full h-[250px] sm:w-[550px] sm:h-[320px] md:w-[280px] md:h-[360px] lg:w-[300px] lg:h-[400px] overflow-hidden rounded-lg shadow-lg">
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

//       <div className="flex justify-center items-center w-full mt-12">
//         <motion.video
//           src="/videos/video.mp4"
//           controls
//           className="w-full max-w-[600px] rounded-lg shadow-md"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 2 * 0.1 }}
//         />
//       </div>


//       {/* Image background and nutrients */}
//       <div
//         ref={sectionRef}
//         className="relative w-full h-[60vh] sm:h-[80vh] md:h-screen overflow-hidden mt-8 sm:mt-12 md:mt-16 flex flex-col items-center"
//       >
//         {/* Background Image - Dynamically Changes Based on Screen Size */}
//         <div className="absolute top-0 left-0 w-full h-full">
//           <Image
//             src={bgImage}
//             alt="Background"
//             layout="fill"
//             objectFit="cover"
//             objectPosition="center"
//             priority
//             className="w-full h-full"
//           />
//         </div>

//         {/* Title - Responsive Text Size */}
//         <h1 className="absolute top-4 left-1/2 transform -translate-x-1/2 text-base sm:text-4xl md:text-4xl lg:text-3xl font-bold font-inria px-3 py-2 rounded-md text-center bg-white/80 max-w-[100%] sm:max-w-[100%]">
//           Natural feed for complete livestock wellness
//         </h1>

//         {/* Animated Nutrients List */}
//         <motion.ul
//           className="absolute left-3 sm:left-5 md:left-10 top-1/4 transform -translate-y-1/2 text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-white text-left p-2 sm:p-4 space-y-1 sm:space-y-2 md:space-y-4 underline bg-black/30 sm:bg-transparent rounded-md"
//           initial="hidden"
//           animate={isVisible ? "visible" : "hidden"}
//           variants={{
//             hidden: { opacity: 0, x: -50 },
//             visible: { opacity: 1, x: 0, transition: { staggerChildren: 0.3, ease: "easeInOut" } },
//           }}
//         >
//           {nutrientsItems.map((item, index) => (
//             <motion.li
//               key={index}
//               variants={{
//                 hidden: { opacity: 0, x: -30 },
//                 visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: index * 0.3 } },
//               }}
//             >
//               {item}
//             </motion.li>
//           ))}
//         </motion.ul>
//       </div>

//       {/* Image background and production */}
//       <div className="flex flex-col items-center text-center mt-8 sm:mt-12 px-4">
//         <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 font-inria tracking-widest">Production facilities</h2>
//       </div>

//       <div className="relative w-full h-[60vh] sm:h-[80vh] md:h-screen overflow-hidden">
//         {/* Background Image */}
//         <Image
//           src={bgImage1}
//           alt="Image Background"
//           fill
//           priority
//           className="absolute top-0 left-0 w-full h-full object-cover"
//         />

//         {/* Title at the Top */}
//         <h1 className="absolute top-4 sm:top-10 left-1/2 transform -translate-x-1/2 text-primary-light text-sm sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl font-semibold font-inika px-4 py-2 rounded-md text-center max-w-[95%] sm:max-w-[90%] md:max-w-[80%]  sm:bg-transparent ">
//           "Revolutionizing cattle feeding with tailored, high-quality nutrition solutions that enhance livestock growth, optimize feed efficiency, and promote long-term animal health."
//         </h1>

//         {/* List of Production Items */}
//         <ul className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-2 sm:space-y-4 w-full p-4 font-inria mt-4">
//           {productionItems.map((item, index) => (
//             <li key={index} className="text-sm sm:text-xl md:text-xl lg:text-2xl xl:text-3xl font-bold text-black w-max mx-auto  px-2 py-1 rounded-md sm:bg-transparent">
//               {item}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Reviews */}
//       <div className="relative w-full h-[70vh] sm:h-[80vh] md:h-screen overflow-hidden mt-8 sm:mt-12 flex items-center justify-center px-4">
//         {/* Background Image with Light White Gradient */}
//         <div className="absolute inset-0 bg-white/70 z-20"></div>
//         <Image
//           src={imgBG3}
//           alt="image Background1"
//           layout="fill"
//           objectFit="cover"
//           className="w-full h-full"
//         />

//         {/* Title at the Top */}
//         <h1 className="absolute top-4 sm:top-6 left-1/2 transform -translate-x-1/2 text-black text-2xl sm:text-3xl md:text-4xl font-bold px-4 sm:px-6 py-2 rounded-md z-20 font-inria tracking-widest">
//           Reviews
//         </h1>

//         {/* Paragraph Division Centered */}
//         <div className="relative z-30 bg-white text-black p-4 sm:p-6 max-w-[95%] sm:max-w-xl md:max-w-2xl lg:max-w-4xl text-center rounded-lg shadow-lg">
//           <p className="text-sm sm:text-base md:text-lg lg:text-xl">
//             "As a customer of Corn Rich Silage, you can expect top-quality, nutritionally balanced feeding solutions designed to meet the unique needs of your herd. Our products are crafted with care and precision to support the health, growth, and productivity of your livestock. Whether you're looking to enhance feed efficiency, boost milk production, or improve overall herd performance, we are dedicated to providing you with the best solutions and expert guidance every step of the way.
//             <br /><br />
//             With Corn Rich Silage, you're not just a customer—you're a valued partner in achieving farming success."
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
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

// Import images
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
    position: "bg-gradient-to-b from-black/70 to-transparent absolute inset-0 flex items-start justify-center pt-16 sm:pt-24"
  },
  {
    image: img2,
    title: "Boosting Livestock Productivity",
    description: "Top-Recommended Silage Provider in India",
    position: "absolute inset-0 flex items-center justify-center"
  },
  {
    image: img3,
    title: "Sustainable Farming",
    description: "Silage is a highly nutritious, fermented feed made up from corn and corn fodder at their milking stage offering a year-round,\n consistent food source that supports livestock productivity and health.",
    position: "bg-gradient-to-t from-black/70 to-transparent absolute inset-0 flex items-end justify-center pb-16 sm:pb-24"
  },
];

const items = [
  {
    image: item1,
    title: "Flourishing Cattle",
    description: "Healthier, happier livestock with optimal nutrition"
  },
  {
    image: item2,
    title: "Premium Silage Fodder",
    description: "Nutrient-rich feed for year-round availability"
  },
  {
    image: item3,
    title: "Higher Milk Yield",
    description: "Increased productivity and quality milk production"
  },
];

const nutrientsItems = [
  "High-quality silage feed",
  "Available 24x7, 365 days a year",
  "Helps maintain good health and milk production",
  "Increases milk yield by 20%",
  "Reduces labor costs by 40%",
  "Storage period of up to 18 months",
  "30-40% dry matter (DM) content",
  "8-9% crude protein (CP) content",
  "Reduces feed costs by 25%",
  "Enhances growth of goats and sheep"
];

const productionItems = [
  { title: "Improved Growth", icon: "🌱" },
  { title: "Enhanced Feed Efficiency", icon: "⚡" },
  { title: "Better Milk Production", icon: "🥛" },
  { title: "Sustainable Farming", icon: "♻️" },
  { title: "Improved Longevity", icon: "⏱️" }
];

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isReviewVisible, setIsReviewVisible] = useState(false);
  const [isProductionVisible, setIsProductionVisible] = useState(false);
  const sectionRef = useRef(null);
  const reviewRef = useRef(null);
  const productionRef = useRef(null);
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
    const observerOptions = { threshold: 0.2 };
    
    const nutrientsObserver = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      observerOptions
    );
    
    const reviewObserver = new IntersectionObserver(
      ([entry]) => setIsReviewVisible(entry.isIntersecting),
      observerOptions
    );
    
    const productionObserver = new IntersectionObserver(
      ([entry]) => setIsProductionVisible(entry.isIntersecting),
      observerOptions
    );

    if (sectionRef.current) nutrientsObserver.observe(sectionRef.current);
    if (reviewRef.current) reviewObserver.observe(reviewRef.current);
    if (productionRef.current) productionObserver.observe(productionRef.current);

    return () => {
      if (sectionRef.current) nutrientsObserver.unobserve(sectionRef.current);
      if (reviewRef.current) reviewObserver.unobserve(reviewRef.current);
      if (productionRef.current) productionObserver.unobserve(productionRef.current);
    };
  }, []);

  return (
    <div className="overflow-hidden font-sans">
      {/* Hero Slider */}
      <div className="w-full h-[50vh] sm:h-[60vh] md:h-[75vh] lg:h-[85vh]">
        <Swiper
          effect="fade"
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          navigation
          modules={[EffectFade, Autoplay, Pagination, Navigation]}
          className="w-full h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="relative">
              {/* Background Image */}
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  layout="fill"
                  objectFit="cover"
                  priority={index === 0}
                  className="w-full h-full transform transition duration-3000 scale-100 hover:scale-105"
                />
              </div>

              {/* Overlay and Content */}
              <div className={slide.position}>
                <div className="text-center px-6 max-w-3xl backdrop-blur-sm bg-black/30 rounded-xl p-6 transform transition duration-500 hover:scale-105">
                  <h2 className="text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 sm:mb-4">{slide.title}</h2>
                  <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl whitespace-pre-line">{slide.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-inria tracking-wider text-gray-800">Our Benefits</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Discover how our premium silage solutions help your livestock thrive</p>
          </motion.div>

          {/* Benefits Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {items.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col h-full bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="relative w-full h-64 sm:h-72 overflow-hidden group">
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 flex-1">{item.description}</p>
                  <button className="mt-4 text-green-600 font-medium inline-flex items-center group">
                    Learn more 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-inria tracking-wider text-gray-800">See Our Process</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Watch how we create premium silage to improve your livestock's health and productivity</p>
          </motion.div>
          
          <motion.div
            className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <video
              src="/videos/video.mp4"
              controls
              className="w-full h-full object-cover"
              // poster="/videos/poster.jpg"
            />
          </motion.div>
        </div>
      </section>

      {/* Nutrients Section */}
      <section 
        ref={sectionRef}
        className="relative w-full py-24 sm:py-32 overflow-hidden bg-fixed bg-center"
      >
        {/* Background with Parallax Effect */}
        <div className="absolute inset-0 z-0">
          <Image
            src={bgImage}
            alt="Natural feed background"
            layout="fill"
            objectFit="cover"
            priority
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-inria tracking-wider text-white bg-black/50 inline-block px-6 py-2 rounded-full">
              Natural Feed for Complete Livestock Wellness
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Nutrients List */}
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8"
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 border-b border-white/30 pb-4">Key Benefits</h3>
              <ul className="space-y-4">
                {nutrientsItems.map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center text-white text-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <svg className="w-6 h-6 mr-3 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            {/* Right Column - Call to Action */}
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 flex items-center justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">Ready to transform your livestock nutrition?</h3>
                <p className="text-white/90 mb-8 text-lg">Join thousands of successful farmers who have increased productivity with our premium silage.</p>
                <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Get Started Today
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Production Facilities Section */}
      <section 
        ref={productionRef} 
        className="relative py-24 sm:py-32 overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={bgImage1}
            alt="Production facilities"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-white/60"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isProductionVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-inria tracking-wider text-gray-800">
              Production Facilities
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
            <p className="mt-6 max-w-3xl mx-auto text-gray-700 text-lg">
              "Revolutionizing cattle feeding with tailored, high-quality nutrition solutions that enhance livestock growth, optimize feed efficiency, and promote long-term animal health."
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {productionItems.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                animate={isProductionVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600">
                  Our state-of-the-art facilities ensure the highest quality silage production to maximize your livestock's potential.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section 
        ref={reviewRef}
        className="relative py-24 overflow-hidden"
      >
        {/* Background with Overlay */}
        <div className="absolute inset-0">
          <Image
            src={imgBG3}
            alt="Reviews background"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-white/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isReviewVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6 font-inria tracking-wider text-gray-800">
              What Our Customers Say
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl shadow-2xl p-8 sm:p-10 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={isReviewVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="flex justify-center mb-6">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-xl sm:text-2xl text-gray-600 italic mb-8">
                "As a customer of Corn Rich Silage, you can expect top-quality, nutritionally balanced feeding solutions designed to meet the unique needs of your herd. Our products are crafted with care and precision to support the health, growth, and productivity of your livestock."
              </p>
              <p className="text-xl sm:text-2xl text-gray-600 italic">
                "With Corn Rich Silage, you're not just a customer—you're a valued partner in achieving farming success."
              </p>
              
              <div className="mt-10 pt-6 border-t border-gray-200">
                <h4 className="font-bold text-gray-800">Rajesh Patel</h4>
                <p className="text-gray-600">Dairy Farmer, Karnataka</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-green-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Transform Your Livestock Nutrition?</h2>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-10">
            Join thousands of satisfied farmers who have increased productivity and improved animal health with our premium silage solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-green-900 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-colors duration-300">
              Contact Us Today
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white/10 font-bold py-3 px-8 rounded-full transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;