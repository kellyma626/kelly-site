"use client";

const Footer = () => {
  return (
    <footer className="bg-[linear-gradient(135deg,#fdf4f5_0%,#f9f7f4_50%,#f7edf0_100%)] flex justify-between p-10 w-full">
      <div className="text-left">
        © {new Date().getFullYear()} Kelly Ma. All rights reserved.{" "}
      </div>
      <div>
        Made with <span className="text-kelly-pink-500">❤︎⁠</span> and boba milk
        tea.
      </div>
    </footer>
  );
};

export default Footer;
