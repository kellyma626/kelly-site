"use client";
import { blogs } from "@/data/Blog";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const Blog = () => {
  return (
    <section id="blog" className="bg-kelly-sage py-15 px-40">
      <div className="flex flex-col justify-center items-center mb-15">
        <div className="text-kelly-pink-300">Coming soon</div>
        <div className="font-dmSerif text-6xl text-light">Kelly's Blog</div>
      </div>
      <div className="grid grid-cols-3 gap-8">
        {blogs.map((blog, idx) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.5, duration: 0.5 }}
            key={idx}
            className="bg-white rounded-xl p-6 space-y-2 shadow-md hover:scale-101"
          >
            <Link href={blog.link} target="_blank">
              <Image
                src={blog.img}
                alt={blog.title}
                width="200"
                height="200"
                className="rounded-xl w-fit"
              />
              <div className="font-dmSerif text-3xl">{blog.title}</div>
              <div className="">{blog.description}</div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
