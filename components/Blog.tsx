"use client";
import { blogs } from "@/data/Blog";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const Blog = () => {
  return (
    <section
      id="blog"
      className="bg-kelly-sage py-16 px-6 sm:px-10 md:px-20 lg:px-40"
    >
      <div className="flex flex-col justify-center items-center mb-15">
        <div className="text-kelly-pink-300 text-sm sm:text-base">
          Coming soon
        </div>
        <div className="font-dmSerif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-light text-center">
          Kelly's Blog
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, idx) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.5, duration: 0.5 }}
            key={idx}
            className="bg-white rounded-xl p-4 sm:p-6 shadow-md hover:scale-[1.02] transition-transform duration-300"
          >
            <Link href={blog.link} className="space-y-2">
              <Image
                src={blog.img}
                alt={blog.title}
                width="200"
                height="200"
                className="rounded-xl w-full h-40 sm:h-48 md:h-56 object-cover"
              />
              <div className="font-dmSerif text-lg sm:text-xl md:text-2xl lg:text-3xl">
                {blog.title}
              </div>
              <div className="">{blog.description}</div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
