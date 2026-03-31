import React, { useState } from "react";

const Movie = () => {
  const [movie, setMovie] = useState([
    { id: 1, title: "Spider Man", ratings: 9 },
    { id: 2, title: "Super Man", ratings: 9.5 },
  ]);

  const handleClick = () => {
    setMovie(
      movie.map((m) => {
        return m.id === 1 ? { ...m, title: "Mission Impossible" } : m;
      }),
    );
  };

  return (
    <div className="flex justify-center items-center h-screen flex-col gap-7">
      {movie.map((m) => {
        return (
          <ul key={m.id} className="">
            <li className="mt-3"> {m.title} </li>
            <li className="mt-3">{m.ratings}</li>
          </ul>
        );
      })}
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-amber-600 rounded font-semibold cursor-pointer"
      >
        Change name
      </button>
    </div>
  );
};

export default Movie;
