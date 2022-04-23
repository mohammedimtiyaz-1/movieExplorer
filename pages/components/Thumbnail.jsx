import React, { forwardRef } from "react";
import ReactStars from "react-rating-stars-component";
import Image from "next/image";
import Router from "next/router";

function Thumbnail({ result }, ref) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const router = Router.useRouter();
  console.log(router);
  // console.log(`${moviePage ? `${result?.id}` : `movie\\${result?.id}`}`);

  return (
    <>
      <div
        ref={ref}
        className="p-2 transition duration-100 ease-in transform cursor-pointer sm:hover:scale-110 hover:z-50"
        onClick={() => {
          if (router.pathname !== "/movie/[movieId]")
            router.replace(`movie\\${result?.id}`);
          else {
            router.query.movieId = result?.id;
            router.push(router);
          }
        }}
      >
        <Image
          alt="img"
          layout="responsive"
          src={
            `${BASE_URL}${result?.backdrop_path || result?.poster_path}` ||
            `${BASE_URL}${result?.poster_path}`
          }
          height={1000}
          width={1920}
        />
        <div className="p-2">
          {/* <p className="max-w-md truncate">{result?.overview}</p> */}
          <h2 className="mt-2 text-2xl text-center text-green-600 transition-all duration-100 ease-in-out hover:font-bold ">
            {result?.title || result?.original_name}{" "}
          </h2>
          <span className="flex justify-center text-center">
            <ReactStars
              count={5}
              size={24}
              value={Math.floor(result?.vote_average / 2) || 3}
              color={"lightgrey"}
              edit={false}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor=" rgb(22 163 74)"
            />
          </span>
        </div>
      </div>
    </>
  );
}

export default forwardRef(Thumbnail);
