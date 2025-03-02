"use client";

import { useState, useRef } from "react";
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
    <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-100">
      {/* Product Title */}
      <h1 className="text-4xl md:text-5xl font-bold font-inria tracking-widest text-black underline decoration-[#DA9100] mb-8">
        PRODUCT
      </h1>

      {/* Product Image */}
      <div className="w-full flex justify-center">
        <Image src={img1} alt="Background Image" className="rounded-lg shadow-lg" width={400} height={400} />
      </div>

      {/* Silage Header */}
      <h1 className="text-black text-2xl sm:text-3xl md:text-4xl font-bold px-4 sm:px-6 py-2 rounded-md font-inria tracking-widest mt-12 mb-6">
        SILAGE
      </h1>

      {/* Production Stages Header */}
      <h1 className="text-4xl md:text-5xl font-bold text-black underline decoration-[#DA9100] mb-8">
        Production Stages
      </h1>

      {/* Video-Text Rows */}
      <div className="max-w-6xl mx-auto space-y-12">
        {videos.map((video, index) => (
          <VideoRow key={video.id} video={video} isReversed={index % 2 !== 0} />
        ))}
      </div>
    </div>
  );
}

// Video Row Component
function VideoRow({ video, isReversed }: { video: VideoData; isReversed: boolean }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

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
    <div className={`flex flex-col md:flex-row items-center gap-12 ${isReversed ? "md:flex-row-reverse" : ""}`}>
      {/* Video Section */}
      <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px] flex items-center justify-center">
        <video
          ref={videoRef}
          src={video.videoSrc}
          className="w-full h-full object-cover rounded-lg shadow-lg"
          loop
        />
        {/* Play Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center  rounded-lg"
        >
          <div className="bg-white p-3 rounded-full shadow-md">
            {isPlaying ? <Pause size={32} className="text-gray-900" /> : <Play size={32} className="text-gray-900" />}
          </div>
        </motion.button>
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl font-bold text-gold">{video.title}</h2>
        <p className="mt-4 text-black">{video.description}</p>
      </div>
    </div>
  );
}
