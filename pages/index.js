import Head from "next/head";
import requests from "../utils/request";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Results from "./components/Results";

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Movie Gyan</title>
        <meta name="movie gyan" content=" movie gyan - Hulu clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Header></Header> */}
      {/* Navbar */}
      <Nav />
      {/* Results */}
      <Results results={results} />
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const genre = ctx.query.genre;
  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: { results: request.results },
  };
}
