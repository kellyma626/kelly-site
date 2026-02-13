import { blogs } from "@/data/Blog";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  return (
    <section id="blog" className="bg-kelly-sage py-15 px-40">
      <div className="flex flex-col justify-center items-center mb-8">
        <div className="text-kelly-pink-300">Coming soon</div>
        <div className="font-dmSerif text-6xl text-light">Kelly's Blog</div>
      </div>
      <div className="z-5 bg-kelly-pink-300/80 w-fit px-2 py-1 rounded-full mx-1 translate-y-4 translate-x-5 text-sm">
        In Progress
      </div>
      <div className="grid grid-cols-3 gap-8">
        {blogs.map((blog, idx) => (
          <Link
            key={idx}
            className="bg-white rounded-xl border-2 border-kelly-pink-100 p-6 space-y-2 hover:shadow-md"
            href={blog.link}
            target="_blank"
          >
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
        ))}
      </div>
    </section>
  );
};

export default Blog;
