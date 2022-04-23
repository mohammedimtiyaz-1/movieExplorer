import React from "react";

function MovieDetails({ title, desc }) {
  return (
    <div className="flex flex-col my-1 ">
      <p className="p-2 font-sans text-lg font-bold md:text-xl">{title}</p>
      <p className="px-8 font-mono">{desc}</p>
    </div>
  );
}

export default MovieDetails;
