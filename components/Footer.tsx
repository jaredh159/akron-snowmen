import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="h-[175px] bg-purple-footer w-full p-4 sm:h-[115px]">
      <ul className="flex flex-col h-3/4 text-white/20 text-xs justify-evenly pt-10 sm:block sm:pt-[2.7rem]">
        <li className="sm:inline-block sm:border-r sm:border-white/20 sm:pt-[5px] sm:pr-5 sm:pb-[0.2rem] sm:pl-[5px] md:pl-[0.9rem]">
          © {new Date().getFullYear()} — All rights reserved.
        </li>
        <li className="w-[118px] sm:inline-block sm:w-[10rem] sm:text-center sm:border-r sm:border-white/20 sm:py-[5px]">
          <a
            className="border-b border-b-white/30 border-dotted"
            href="https://www.virtuosolandscapes.com"
          >
            Virtuoso Landscaping
          </a>
        </li>
        <li className="sm:inline-block sm:border-r sm:border-white/20 sm:pt-[5px] sm:pr-[20px] sm:pb-[5px] sm:pl-[20px]">
          Website:
          <a
            className="border-b border-b-white/30 border-dotted w-5"
            href="https://homework.howtocomputer.link"
          >
            HTC
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
