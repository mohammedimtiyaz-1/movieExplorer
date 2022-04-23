import React from "react";
import requests from "../../utils/request";
import { useRouter } from "next/router";
import { useState } from "react";

function Nav({ genres }) {
  const [genreSelect, setSelectGenre] = useState(0);
  const router = useRouter();
  return (
    <nav className="relative">
      <div className="flex px-10 space-x-10 overflow-x-scroll text-lg sm:px-20 whitespace-nowrap scrollbar-hide sm:space-x-20 ">
        {genres?.length > 0 &&
          genres.map(({ id, name }) => (
            <h2
              className={`transition duration-100 transform cursor-pointer hover:scale-110 hover:font-bold hover:text-green-900 active:scale-125  ${
                genreSelect === id ? "text-green-500 font-bold" : ""
              }`}
              key={id}
              onClick={() => {
                setSelectGenre(id);
                router.push(`/?genre=${id}`);
              }}
            >
              {name}
            </h2>
          ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202a] h-10 w-1/4" />
    </nav>
  );
}

export default Nav;
