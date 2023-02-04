import Head from "next/head";
import requests from "../utils/request";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Results from "./components/Results";

export default function Home({ results, genres }) {
  return (
    <div>
      <Head>
        <title>Movie Gyan</title>
        <meta name="movie gyan" content=" movie gyan - Hulu clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Header></Header> */}
      {/* Navbar */}
      <Nav genres={genres} />
      {/* Results */}
      <Results results={results} />
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const genre = ctx.query.genre;
  // console.log("genre", genre);

  const request = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_Key}&with_genres=${genre}`
  ).then((res) => res.json());

  const requestCategories = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_Key}&language=en-US`
  ).then((res) => res.json());

  //  console.log("gene", requestCategories);

  return {
    props: { results: request.results, genres: requestCategories.genres },
  };
}
