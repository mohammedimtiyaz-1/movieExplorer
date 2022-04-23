import React from "react";
import requests from "../../utils/request";
import { useRouter } from "next/router";

function Nav() {
  const router = useRouter();
  return (
    <nav className="relative">
      <div className="flex   px-10 sm:px-20 text-2xl space-x-10 whitespace-nowrap overflow-x-scroll scrollbar-hide sm:space-x-20 ">
        {Object.entries(requests) &&
          Object.entries(requests).map(([key, { title, url }], i) => (
            <h2
              className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500 selection:text-green-500"
              key={i}
              onClick={() => {
                router.push(`/?genre=${key}`);
              }}
            >
              {title}
            </h2>
          ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202a] h-10 w-1/4" />
    </nav>
  );
}

export default Nav;
