import Image from "next/image";
import React from "react";
import MovieDetails from "../components/movieDetails";

function movie({ movieDetails }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="m-2 ">
      <div className="m-2 font-serif text-xl font-extrabold text-center md:text-3xl first-letter:text-4xl first-letter:text-green-600">
        <h1>{movieDetails?.original_title || movieDetails?.title}</h1>
        <h4 className="pl-20 font-mono text-xl md:pl-80">
          --{movieDetails?.tagline}
        </h4>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 ">
        <div className="m-2 rounded-2xl">
          <Image
            alt="img"
            layout="responsive"
            src={`${BASE_URL}${
              movieDetails?.backdrop_path || movieDetails?.poster_path
            }`}
            height={1000}
            width={1920}
          />
        </div>

        <div className="p-5 ">
          <MovieDetails title="Overview" desc={movieDetails?.overview} />
          <MovieDetails
            title="Production"
            desc={
              movieDetails?.production_companies?.length > 0
                ? movieDetails?.production_companies[0]?.name
                : movieDetails?.production_companies?.name || "NA"
            }
          />
          <MovieDetails title="Released On" desc={movieDetails?.release_date} />
          <MovieDetails
            title="Votes"
            desc={`${movieDetails?.vote_average || "NA"}/${
              movieDetails?.vote_count
            }`}
          />
        </div>
      </div>
    </div>
  );
}

const getServerSideProps = async (ctx) => {
  const movieId = ctx.query.movieId;
  // console.log(movieId);

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}&language=en-US`
  ).then((res) => res.json());
  // console.log(response);
  return { props: { movieDetails: response } };
};
export { getServerSideProps };
export default movie;
