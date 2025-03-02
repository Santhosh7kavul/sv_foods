// /* eslint-disable react/no-unescaped-entities */
// export default function Blog() {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-6">
//       {/* Animated Loader */}
//       <div className="relative w-20 h-20 mb-6">
//         <div className="absolute inset-0 animate-spin rounded-full border-t-4 border-blue-500 border-solid"></div>
//         <div className="absolute inset-0 animate-ping rounded-full bg-blue-500 opacity-30"></div>
//       </div>

//       {/* Title */}
//       <h1 className="text-3xl font-bold text-gray-800 mb-4">Blog is Coming Soon!</h1>

//       {/* Description */}
//       <p className="text-lg text-gray-600 max-w-lg">
//         We're working hard to bring you amazing content. Stay tuned for updates and exciting articles!
//       </p>
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface Blog {
  id: number;
  title: string;
  image: string;
  description: string;
}

export default function BlogList() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className=" flex flex-col items-center justify-center text-center p-6 bg-gray-100">
      <h1 className="text-4xl md:text-5xl font-bold font-inria tracking-widest text-black underline decoration-[#DA9100] mb-8">
      Latest Blogs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <Link key={blog.id} href={`/blog/${blog.id}`} className="block">
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
              <img src={blog.image} alt={blog.title} className="w-full h-40 rounded-md mb-4" />
              <h2 className="text-xl font-semibold">{blog.title}</h2>
              <p className="text-gray-600">{blog.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
