"use client";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import MovieCard from "@/components/MovieCard";
import { changeMovieData } from "../redux/slices/movieData";

const API_KEY = "fd5d3e90ac287b60225872ec5d3b941f";

export default function Home() {
  const themeMode = useSelector((state) => state.themeMode.value);
  const movieData = useSelector((state) => state.movieData.value);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  console.log(movieData);
  const handleEnterSearch = async (e) => {
    if (e.key !== "Enter") return;
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${e.target.value}`
    );
    const data = await response.json();
    dispatch(changeMovieData(data.results));
    setInput("")
  };

  return (
    <div
      className={`flex justify-center items-center flex-col text-center min-h-screen p-10 ${
        themeMode === "dark" ? "bg-slate-900" : "bg-white"
      }`}
    >
      <div
        className={`text-4xl font-bold mt-7 ${
          themeMode === "dark" ? "text-white" : "text-slate-900"
        }`}
      >
        <p>
          {movieData === null
            ? "Search for movies across the internet"
            : "Look up another one?"}
        </p>
      </div>

      <div className="w-3/4 max-w-screen-sm flex items-center mt-20">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 absolute ml-3 pointer-events-none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17C11.9333 17 13.6819 16.2176 14.9497 14.9497C16.2176 13.6819 17 11.9333 17 10C17 6.13401 13.866 3 10 3ZM1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 12.1246 18.2628 14.0784 17.0319 15.6176L22.7071 21.2929C23.0976 21.6834 23.0976 22.3166 22.7071 22.7071C22.3166 23.0976 21.6834 23.0976 21.2929 22.7071L15.6176 17.0319C14.0784 18.2628 12.1246 19 10 19C5.02944 19 1 14.9706 1 10Z"
            fill="#293644"
          />
        </svg>
        <input
          type="text"
          name="Search"
          placeholder="Search for a movie..."
          autoComplete="off"
          aria-label="Search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleEnterSearch}
          class="pr-3 pl-10 py-2 w-full placeholder-gray-500 text-slate-900 rounded-full border-none ring-2 ring-blue-500 focus:ring-4 outline-none"
        />
      </div>
      <div class="mt-20 grid grid-flow-row xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-7">
        {movieData !== null ? (
          movieData.map((movie) => (
            <MovieCard
              title={movie.title}
              picturePath={movie.poster_path}
              release={movie.release_date}
              imdb={movie.vote_average}
              movieId={movie.id}
            />
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
