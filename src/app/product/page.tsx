/* eslint-disable react-hooks/exhaustive-deps */
// "use client";

// import { useState, useRef } from "react";
// import { motion } from "framer-motion";
// import { Play, Pause } from "lucide-react";
// import Image from "next/image";

// import img1 from "../../resources/product.png";

// interface VideoData {
//   id: number;
//   title: string;
//   description: string;
//   videoSrc: string;
// }

// const videos: VideoData[] = [
//   {
//     id: 1,
//     title: "Step 1: Select and Prepare the Corn Crop",
//     description: "Choose a suitable corn variety for silage and prepare the field for planting.",
//     videoSrc: "/videos1.mp4",
//   },
//   {
//     id: 2,
//     title: "Step 2: Harvest the Corn",
//     description: "Harvest the corn at the right moisture content (65-70%) and maturity stage.",
//     videoSrc: "/video2.mp4",
//   },
//   {
//     id: 3,
//     title: "Step 3: Chop the Corn",
//     description: "Use a forage harvester to chop the corn into small pieces (1/4 to 1/2 inch).",
//     videoSrc: "/video3.mp4",
//   },
//   {
//     id: 4,
//     title: "Step 4: Pack the Silage",
//     description: "Load the chopped corn into a silage bunker, silo, or bag, and pack it tightly. Add a certified inoculant to enhance fermentation.",
//     videoSrc: "/video4.mp4",
//   },
//   {
//     id: 5,
//     title: "Step 5: Seal and Ferment",
//     description: "Cover the packed silage with a tarp or plastic to create an anaerobic environment. Allow it to ferment for 2 to 3 weeks",
//     videoSrc: "/video4.mp4",
//   },
// ];

// export default function Product() {
//   return (
//     <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-100">
//       {/* Product Title */}
//       <h1 className="text-4xl md:text-5xl font-bold font-inria tracking-widest text-black underline decoration-[#DA9100] mb-8">
//         PRODUCT
//       </h1>

//       {/* Product Image */}
//       <div className="w-full flex justify-center">
//         <Image src={img1} alt="Background Image" className="rounded-lg shadow-lg" width={400} height={400} />
//       </div>

//       {/* Silage Header */}
//       <h1 className="text-black text-2xl sm:text-3xl md:text-4xl font-bold px-4 sm:px-6 py-2 rounded-md font-inria tracking-widest mt-12 mb-6">
//         SILAGE
//       </h1>

//       {/* Production Stages Header */}
//       <h1 className="text-4xl md:text-5xl font-bold text-black underline decoration-[#DA9100] mb-8">
//         Production Stages
//       </h1>

//       {/* Video-Text Rows */}
//       <div className="max-w-6xl mx-auto space-y-12">
//         {videos.map((video, index) => (
//           <VideoRow key={video.id} video={video} isReversed={index % 2 !== 0} />
//         ))}
//       </div>
//     </div>
//   );
// }

// // Video Row Component
// function VideoRow({ video, isReversed }: { video: VideoData; isReversed: boolean }) {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const videoRef = useRef<HTMLVideoElement>(null);

//   const togglePlay = () => {
//     if (videoRef.current) {
//       if (isPlaying) {
//         videoRef.current.pause();
//       } else {
//         videoRef.current.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   return (
//     <div className={`flex flex-col md:flex-row items-center gap-12 ${isReversed ? "md:flex-row-reverse" : ""}`}>
//       {/* Video Section */}
//       <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px] flex items-center justify-center">
//         <video
//           ref={videoRef}
//           src={video.videoSrc}
//           className="w-full h-full object-cover rounded-lg shadow-lg"
//           loop
//         />
//         {/* Play Button */}
//         <motion.button
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={togglePlay}
//           className="absolute inset-0 flex items-center justify-center  rounded-lg"
//         >
//           <div className="bg-white p-3 rounded-full shadow-md">
//             {isPlaying ? <Pause size={32} className="text-gray-900" /> : <Play size={32} className="text-gray-900" />}
//           </div>
//         </motion.button>
//       </div>

//       {/* Text Section */}
//       <div className="w-full md:w-1/2 text-center md:text-left">
//         <h2 className="text-3xl font-bold text-gold">{video.title}</h2>
//         <p className="mt-4 text-black">{video.description}</p>
//       </div>
//     </div>
//   );
// }


// "use client";

// import { useState, useRef, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Play, Pause } from "lucide-react";
// import Image from "next/image";

// import img1 from "../../resources/product.png";

// interface VideoData {
//   id: number;
//   title: string;
//   description: string;
//   videoSrc: string;
// }

// const videos: VideoData[] = [
//   {
//     id: 1,
//     title: "Step 1: Select and Prepare the Corn Crop",
//     description: "Choose a suitable corn variety for silage and prepare the field for planting.",
//     videoSrc: "/videos1.mp4",
//   },
//   {
//     id: 2,
//     title: "Step 2: Harvest the Corn",
//     description: "Harvest the corn at the right moisture content (65-70%) and maturity stage.",
//     videoSrc: "/video2.mp4",
//   },
//   {
//     id: 3,
//     title: "Step 3: Chop the Corn",
//     description: "Use a forage harvester to chop the corn into small pieces (1/4 to 1/2 inch).",
//     videoSrc: "/video3.mp4",
//   },
//   {
//     id: 4,
//     title: "Step 4: Pack the Silage",
//     description: "Load the chopped corn into a silage bunker, silo, or bag, and pack it tightly. Add a certified inoculant to enhance fermentation.",
//     videoSrc: "/video4.mp4",
//   },
//   {
//     id: 5,
//     title: "Step 5: Seal and Ferment",
//     description: "Cover the packed silage with a tarp or plastic to create an anaerobic environment. Allow it to ferment for 2 to 3 weeks",
//     videoSrc: "/video4.mp4",
//   },
// ];

// export default function Product() {
//   return (
//     <div className="min-h-screen flex flex-col items-center py-16 bg-gradient-to-b from-gray-50 to-gray-200">
//       {/* Product Title */}
//       <div className="w-full max-w-6xl px-4 mb-16 text-center">
//         <h1 className="text-4xl md:text-6xl font-bold font-inria tracking-widest text-black relative inline-block">
//           PRODUCT
//           <span className="absolute bottom-0 left-0 w-full h-1 bg-[#DA9100] transform translate-y-2"></span>
//         </h1>
//       </div>

//       {/* Product Hero Section */}
//       <div className="w-full max-w-5xl px-6 mb-16">
//         <div className="relative overflow-hidden rounded-xl shadow-2xl">
//           <div className="absolute inset-0 bg-black bg-opacity-20 z-10"></div>
//           <Image 
//             src={img1} 
//             alt="Corn Rich Silage Product" 
//             className="w-full object-cover transform hover:scale-105 transition-transform duration-700" 
//             width={1200} 
//             height={700} 
//             priority
//           />
//           <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent z-20">
//             <h2 className="text-white text-3xl md:text-4xl font-bold font-inria tracking-wide">
//               Premium Quality Silage
//             </h2>
//             <p className="text-gray-200 mt-2 max-w-2xl">
//               Nutrient-rich fermented feed from carefully selected crops for optimal livestock health
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Silage Header */}
//       <div className="w-full max-w-6xl px-4 text-center mb-8">
//         <div className="inline-block">
//           <h2 className="text-3xl md:text-5xl font-bold font-inria tracking-widest text-black mb-2">
//             SILAGE
//           </h2>
//           <div className="h-1 w-24 bg-[#DA9100] mx-auto"></div>
//         </div>
//       </div>

//       {/* Production Stages Header */}
//       <div className="w-full max-w-6xl px-4 text-center mb-12">
//         <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
//           Production Stages
//         </h2>
//         <p className="text-gray-700 max-w-3xl mx-auto">
//           Our premium silage follows a meticulous 5-step production process to ensure the highest quality product for your livestock.
//         </p>
//       </div>

//       {/* Timeline Process */}
//       <div className="relative max-w-6xl mx-auto px-6 mb-16">
//         {/* Timeline Line */}
//         <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#DA9100] hidden md:block"></div>
        
//         {/* Video-Text Rows with Timeline */}
//         <div className="space-y-24 relative">
//           {videos.map((video, index) => (
//             <VideoRow 
//               key={video.id} 
//               video={video} 
//               isReversed={index % 2 !== 0} 
//               stepNumber={index + 1}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Call to Action */}
//       <div className="w-full max-w-4xl px-6 mb-16">
//         <div className="bg-white p-8 rounded-lg shadow-lg text-center border-t-4 border-[#DA9100]">
//           <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
//             Ready to improve your livestock's nutrition?
//           </h3>
//           <p className="text-gray-600 mb-6">
//             Contact us today to learn more about our premium silage products and how they can benefit your farm.
//           </p>
//           <button className="bg-[#DA9100] hover:bg-[#B87800] text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-md">
//             Get in Touch
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Video Row Component
// function VideoRow({ 
//   video, 
//   isReversed, 
//   stepNumber 
// }: { 
//   video: VideoData; 
//   isReversed: boolean;
//   stepNumber: number;
// }) {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [isInView, setIsInView] = useState(false);
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const sectionRef = useRef<HTMLDivElement>(null);

//   // Check if element is in viewport
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach(entry => {
//           if (entry.isIntersecting) {
//             setIsInView(true);
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.3 }
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

//   const togglePlay = () => {
//     if (videoRef.current) {
//       if (isPlaying) {
//         videoRef.current.pause();
//       } else {
//         videoRef.current.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   return (
//     <motion.div 
//       ref={sectionRef}
//       initial={{ opacity: 0, y: 50 }}
//       animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//       transition={{ duration: 0.6 }}
//       className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16 relative`}
//     >
//       {/* Timeline Step Number */}
//       <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
//         <div className="w-12 h-12 rounded-full bg-[#DA9100] flex items-center justify-center shadow-lg">
//           <span className="text-white font-bold">{stepNumber}</span>
//         </div>
//       </div>
      
//       {/* Mobile Step Number */}
//       <div className="md:hidden w-10 h-10 rounded-full bg-[#DA9100] flex items-center justify-center shadow-lg mb-4">
//         <span className="text-white font-bold">{stepNumber}</span>
//       </div>

//       {/* Video Section */}
//       <div className="relative w-full md:w-5/12 h-[250px] sm:h-[300px] md:h-[350px] overflow-hidden rounded-xl shadow-xl">
//         <video
//           ref={videoRef}
//           src={video.videoSrc}
//           className="w-full h-full object-cover"
//           loop
//         />
        
//         {/* Video Overlay */}
//         <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 hover:bg-opacity-10"></div>
        
//         {/* Play Button */}
//         <motion.button
//           initial={{ opacity: 0.8 }}
//           animate={{ opacity: 1 }}
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={togglePlay}
//           className="absolute inset-0 flex items-center justify-center focus:outline-none"
//         >
//           <div className="bg-white bg-opacity-90 p-4 rounded-full shadow-lg">
//             {isPlaying ? 
//               <Pause size={32} className="text-[#DA9100]" /> : 
//               <Play size={32} className="text-[#DA9100] ml-1" />
//             }
//           </div>
//         </motion.button>
//       </div>

//       {/* Text Section */}
//       <div className="w-full md:w-5/12 text-center md:text-left">
//         <div className={`p-6 bg-white rounded-xl shadow-md border-l-4 border-[#DA9100] h-full`}>
//           <h3 className="text-2xl font-bold text-[#DA9100] mb-3">{video.title}</h3>
//           <p className="text-gray-700 leading-relaxed">{video.description}</p>
//         </div>
//       </div>
//     </motion.div>
//   );
// }



"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import Image from "next/image";

import img1 from "../../resources/product.png";

interface VideoData {
  id: number;
  title: string;
  description: string;
  videoSrc: string;
}

const videos: VideoData[] = [
  {
    id: 1,
    title: "Step 1: Select and Prepare the Corn Crop",
    description: "Choose a suitable corn variety for silage and prepare the field for planting.",
    videoSrc: "/videos1.mp4",
  },
  {
    id: 2,
    title: "Step 2: Harvest the Corn",
    description: "Harvest the corn at the right moisture content (65-70%) and maturity stage.",
    videoSrc: "/video2.mp4",
  },
  {
    id: 3,
    title: "Step 3: Chop the Corn",
    description: "Use a forage harvester to chop the corn into small pieces (1/4 to 1/2 inch).",
    videoSrc: "/video3.mp4",
  },
  {
    id: 4,
    title: "Step 4: Pack the Silage",
    description: "Load the chopped corn into a silage bunker, silo, or bag, and pack it tightly. Add a certified inoculant to enhance fermentation.",
    videoSrc: "/video4.mp4",
  },
  {
    id: 5,
    title: "Step 5: Seal and Ferment",
    description: "Cover the packed silage with a tarp or plastic to create an anaerobic environment. Allow it to ferment for 2 to 3 weeks",
    videoSrc: "/video4.mp4",
  },
];

export default function Product() {
  return (
    <div className="min-h-screen flex flex-col items-center py-16 bg-gradient-to-b from-gray-50 to-gray-200">
      {/* Product Title */}
      <div className="w-full max-w-6xl px-4 mb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold font-inria tracking-widest text-black relative inline-block">
          PRODUCT
          <span className="absolute bottom-0 left-0 w-full h-1 bg-[#DA9100] transform translate-y-2"></span>
        </h1>
      </div>

      {/* Product Hero Section */}
      <div className="w-full max-w-4xl px-6 mb-16">
        <div className="relative overflow-hidden rounded-xl shadow-2xl">
          <div className="absolute inset-0 bg-black bg-opacity-20 z-10"></div>
          <Image 
            src={img1} 
            alt="Corn Rich Silage Product" 
            className="w-full object-cover transform hover:scale-105 transition-transform duration-700" 
            width={1000} 
            height={600} 
            priority
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent z-20">
            <h2 className="text-white text-3xl md:text-4xl font-bold font-inria tracking-wide">
              Premium Quality Silage
            </h2>
            <p className="text-gray-200 mt-2 max-w-2xl">
              Nutrient-rich fermented feed from carefully selected crops for optimal livestock health
            </p>
          </div>
        </div>
      </div>

      {/* Silage Header */}
      <div className="w-full max-w-6xl px-4 text-center mb-8">
        <div className="inline-block">
          <h2 className="text-3xl md:text-5xl font-bold font-inria tracking-widest text-black mb-2">
            SILAGE
          </h2>
          <div className="h-1 w-24 bg-[#DA9100] mx-auto"></div>
        </div>
      </div>

      {/* Production Stages Header */}
      <div className="w-full max-w-6xl px-4 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Production Stages
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Our premium silage follows a meticulous 5-step production process to ensure the highest quality product for your livestock.
        </p>
      </div>

      {/* Video-Text Rows */}
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <div className="space-y-16">
          {videos.map((video, index) => (
            <VideoRow 
              key={video.id} 
              video={video} 
              isReversed={index % 2 !== 0} 
            />
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="w-full max-w-4xl px-6 mb-16">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center border-t-4 border-[#DA9100]">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Ready to improve your livestock nutrition?
          </h3>
          <p className="text-gray-600 mb-6">
            Contact us today to learn more about our premium silage products and how they can benefit your farm.
          </p>
          <button className="bg-[#DA9100] hover:bg-[#B87800] text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-md">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
}

// Video Row Component
function VideoRow({ 
  video, 
  isReversed 
}: { 
  video: VideoData; 
  isReversed: boolean;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Check if element is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
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

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div 
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-12`}
    >
      {/* Video Section */}
      <div className="relative w-full md:w-5/12 h-[250px] sm:h-[300px] md:h-[320px] overflow-hidden rounded-xl shadow-xl">
        <video
          ref={videoRef}
          src={video.videoSrc}
          className="w-full h-full object-cover"
          loop
        />
        
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 hover:bg-opacity-10"></div>
        
        {/* Play Button */}
        <motion.button
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center focus:outline-none"
        >
          <div className="bg-white bg-opacity-90 p-4 rounded-full shadow-lg">
            {isPlaying ? 
              <Pause size={32} className="text-[#DA9100]" /> : 
              <Play size={32} className="text-[#DA9100] ml-1" />
            }
          </div>
        </motion.button>
      </div>

      {/* Text Section */}
      <div className="w-full md:w-5/12 text-center md:text-left">
        <div className={`p-6 bg-white rounded-xl shadow-md border-l-4 border-[#DA9100] h-full`}>
          <h3 className="text-2xl font-bold text-[#DA9100] mb-3">{video.title}</h3>
          <p className="text-gray-700 leading-relaxed">{video.description}</p>
        </div>
      </div>
    </motion.div>
  );
}