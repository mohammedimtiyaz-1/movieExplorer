import Image from "next/image";
import React from "react";
import ReactStars from "react-rating-stars-component";
import MovieDetails from "../components/movieDetails";
import Results from "../components/Results";

function movie({ movieDetails, results }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="m-2 ">
      <div className="m-2 font-serif text-xl font-extrabold text-center text-green-600 md:text-3xl first-letter:text-4xl">
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
            height={1200}
            width={1920}
          />
        </div>

        <div className="px-4 py-0 ">
          <ReactStars
            count={5}
            size={28}
            value={Math.floor(movieDetails?.vote_average / 2) || 3}
            color={"lightgrey"}
            edit={false}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor=" rgb(22 163 74)"
          />
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
      <div className="mt-2">
        <p className="mb-[-2rem] pl-4 text-2xl font-bold text-green-600">
          SIMILAR MOVIES
        </p>
        <Results results={results} moviePage />
      </div>
    </div>
  );
}

const getServerSideProps = async (ctx) => {
  const movieId = ctx.query.movieId;
  // console.log(movieId);

  const responseMovie = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}&language=en-US`
  ).then((res) => res.json());
  const responseMovies = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${process.env.API_KEY}&language=en-US`
  ).then((res) => res.json());
  // console.log(responseMovies);

  const ret = responseMovies.results.filter((m) => !m.adult);
  return {
    props: { movieDetails: responseMovie, results: ret },
  };
};
export { getServerSideProps };
export default movie;
