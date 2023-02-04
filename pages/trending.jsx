import React from "react";
import Results from "./components/Results";

function trending({ results }) {
  return <Results results={results} />;
}

export async function getServerSideProps(ctx) {
  const movCerts = await fetch(
    `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.API_Key}&language=en-US`
  );
  const res = await movCerts.json();
  // console.log("trending", res);
  return {
    props: { results: res.results },
  };
  the;
}

export default trending;
