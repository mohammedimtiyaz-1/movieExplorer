import React from "react";
import FlipMove from "react-flip-move";
import Thumbnail from "./Thumbnail";

function Results({ results }) {
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {results &&
        results.map((res) => {
          return <Thumbnail key={res.id} result={res} />;
        })}
    </FlipMove>
  );
}

export default Results;
