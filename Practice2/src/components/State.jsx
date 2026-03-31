//  Practicing conept of useState() on Object

import React, { useState } from "react";

const State = () => {
  const [movie, setMovie] = useState({
    title: "Equalizer 3",
    ratings: 7,
  });
  const changeRating = () => {
    let rate = Math.round(Math.random()* 10);
    const copyMovie = {
      ...movie,
      ratings: rate,
    };
    setMovie(copyMovie)
  };
  return (
    <div className="flex justify-center items-center flex-col h-[70vh] gap-4">
      <h1>Title{movie.title}</h1>
      <h1>Rating: {movie.ratings}</h1>
      <button
        onClick={changeRating}
        className="px-4 py-2 bg-amber-600 rounded font-bold cursor-pointer "
      >
        Change Rating
      </button>
    </div>
  );
};

export default State;

//  Practicing conept of useState() on Array
