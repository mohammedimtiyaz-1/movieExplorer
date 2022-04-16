import React, { forwardRef } from "react";
import Image from "next/image";

function Thumbnail({ result }, ref) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  return (
    <div
      ref={ref}
      className="p-2 cursor-pointer transition duration-100 ease-in transform sm:hover:scale-110 hover:z-50"
    >
      <Image
        alt="img"
        layout="responsive"
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        height={1000}
        width={1920}
      />
      <div className="p-2">
        {/* <p className="truncate max-w-md">{result?.overview}</p> */}
        <h2 className="mt-2 text-2xl text-center text-white transition-all duration-100 ease-in-out hover:font-bold ">
          {result?.title || result?.original_name}
        </h2>
      </div>
    </div>
  );
}

export default forwardRef(Thumbnail);
