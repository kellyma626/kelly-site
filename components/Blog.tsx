import { blogs } from "@/data/Blog";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  return (
    <section id="skills" className="bg-kelly-sage py-15 px-30">
      <div className="flex flex-col justify-center items-center mb-15">
        <div className="text-kelly-pink-300">My writing</div>
        <div className="font-dmSerif text-6xl text-light">Kelly's Blog</div>
      </div>
      <div className="z-5 bg-kelly-pink-300/80 w-fit px-2 py-1 rounded-full mx-1 translate-y-4 translate-x-10">
        In Progress
      </div>
      <div className="grid grid-cols-3 gap-5">
        {blogs.map((blog, idx) => (
          <Link
            key={idx}
            className="bg-light rounded-xl border-2 border-kelly-pink-100 p-10 space-y-3 hover:shadow-md"
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
            <div className="text-right">{blog.date}</div>
            <div className="font-dmSerif text-4xl">{blog.title}</div>
            <div className="">{blog.description}</div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Blog;
