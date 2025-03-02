"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

interface Blog {
  id: number;
  title: string;
  image: string;
  content: string;
}

export default function BlogDetail() {
    const { id } = useParams();


  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => {
        const foundBlog = data.find((b: Blog) => b.id === Number(id));
        setBlog(foundBlog);
      });
  }, [id]);

  if (!blog) return <div className="text-center p-6">Loading...</div>;

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <img src={blog.image} alt={blog.title} className=" rounded-md mb-4" />
        <h1 className="text-3xl font-bold">{blog.title}</h1>
        <p className="text-gray-700 mt-4">{blog.content}</p>
      </div>
    </div>
  );
}
