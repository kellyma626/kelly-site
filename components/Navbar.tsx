"use client";
import { tags } from "@/data/Navbar";
import ScrollLink from "@/components/ScrollLink";
import { PiFlowerDuotone } from "react-icons/pi";

const Navbar = () => {
  return (
    <div
      className="
  sticky top-0 z-50 w-full
  bg-[#F7E9ED]
  px-6 sm:px-10 lg:px-20
  py-4
  text-sm sm:text-base
"
    >
      <div className="flex items-center justify-between">
        <ScrollLink
          to="#home"
          className="flex items-center cursor-pointer font-bold hover:text-kelly-pink-300"
        >
          <PiFlowerDuotone className="mr-1 text-lg sm:text-xl" />
          <div>kelly ma</div>
        </ScrollLink>

        <div className="flex flex-wrap gap-4 justify-end">
          {tags.map(({ name, link }, index) => (
            <ScrollLink
              key={index}
              to={link.replace("#", "")}
              className="hover:text-kelly-pink-300 cursor-pointer"
            >
              {name}
            </ScrollLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
