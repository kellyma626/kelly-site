"use client";

const Footer = () => {
  return (
    <footer className="flex justify-between m-10">
      <div className="text-left">
        © {new Date().getFullYear()} Kelly Ma. All rights reserved.{" "}
      </div>
      <div>Made with ❤︎⁠ and boba milk tea.</div>
    </footer>
  );
};

export default Footer;
