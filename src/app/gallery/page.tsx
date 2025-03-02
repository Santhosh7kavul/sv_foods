'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const media = [
  'https://i.ibb.co/pvvw0MdS/1.webp',
  '/videos/1.mp4',
  
  'https://i.ibb.co/7NRtkyNL/imgBg4.png',
  'https://i.ibb.co/BHBDRJWG/2.webp', 
  '/videos/2.mp4'
];


export default function Gallery() {
 
  const [loadedMedia, setLoadedMedia] = useState<typeof media>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoadedMedia(media);
    setLoading(false);
  }, []);

  if (loading) {
    return <div className="text-center p-4">Loading media...</div>;
  }
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-6">
     
     <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 space-y-4">
        {loadedMedia.map((src, index) => (
          typeof src === 'string' && src.endsWith('.mp4') ? (
            <motion.video
              key={index}
              src={src}
              controls
              className="w-full rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            />
          ) : (
            <motion.img
              key={index}
              src={src}
              alt={`Masonry Item ${index + 1}`}
              className="w-full rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            />
          )
        ))}
      </div>
    </div>
  );
}
