"use client";
import { tags } from "@/data/Navbar";
import ScrollLink from "@/components/ScrollLink";
import { PiFlowerDuotone } from "react-icons/pi";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 w-full py-3 text-sm bg-[#F7E9ED]/80 p-10">
      <div className="flex gap-4 justify-between">
        <ScrollLink
          to="#home"
          className="flex cursor-pointer font-bold text-kelly-pink-500 hover:text-kelly-pink-300 pl-10"
        >
          <PiFlowerDuotone size={20} className="pr-1" />
          <div>kelly ma</div>
        </ScrollLink>
        <div className="flex gap-4">
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
