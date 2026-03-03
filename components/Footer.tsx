"use client";

const Footer = () => {
  return (
    <footer
      className="
  bg-[linear-gradient(135deg,#fdf4f5_0%,#f9f7f4_50%,#f7edf0_100%)] 
  flex flex-col md:flex-row 
  justify-between items-center 
  gap-4 md:gap-0 
  px-6 sm:px-10 py-8 
  text-center md:text-left
"
    >
      <div>© {new Date().getFullYear()} Kelly Ma. All rights reserved.</div>

      <div>
        Made with <span className="text-kelly-pink-500">❤︎</span> and boba milk
        tea.
      </div>
    </footer>
  );
};

export default Footer;
