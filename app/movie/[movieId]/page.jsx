"use client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";

const API_KEY = "fd5d3e90ac287b60225872ec5d3b941f";

const MoviePage = ({ params }) => {
  const [data, setData] = useState();
  const [input, setInput] = useState();
  const themeMode = useSelector((state) => state.themeMode.value);

  const getMovieData = async () => {
    const res = await fetch(`
https://api.themoviedb.org/3/movie/${params.movieId}?api_key=${API_KEY}&language=en-US
  `);
    const data = await res.json();
    setData(data);
  };

  const handleEnterSearch = () => {
    return;
  };

  useEffect(() => {
    getMovieData();
  });

  console.log(data);
  return (
    <>
      {data !== undefined ? (
        <>
          <div
            className={`${
              themeMode === "dark" ? "bg-slate-900" : "bg-white"
            } min-h-screen text-white relative`}
          >
            <div class="absolute inset-0">
              <Image
                src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black"></div>

            <div className="text-white absolute flex justify-center gap-y-2 pl-5 flex-col h-full w-2/3 sm:w-1/2 md:w-2/5">
              <div className="text-5xl font-bold mt-5">{data.title}</div>

              <div className="italic">{data.overview}</div>

              {/* FACTS */}
              <div className="gap-y-1">
                <div>
                  Released: <span className="italic">{data.release_date}</span>
                </div>
                <div>
                  Rating: <span className="italic">{data.vote_average}</span>
                </div>
                <div>
                  Genres:
                  <span className="italic">
                    {data.genres.map((i) => `${i.name} `)}
                  </span>
                </div>
              </div>
              <div className="mt-5">
                <Link href="/">
                  <button
                    className="p-2 text-lg font-light rounded border-none ring-1 ring-white outline-none hover:bg-white hover:text-black"
                    type="button"
                  >
                    Back
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>loading</>
      )}
    </>
  );
};

export default MoviePage;
