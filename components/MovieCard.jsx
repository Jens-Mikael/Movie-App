import Image from "next/image";
import Link from "next/link";

const MovieCard = ({ title, picturePath, release, imdb, movieId }) => {
  return (
    <>
      <div className="group rounded-2xl relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 ">
        {/* Background image  */}
        <div class="h-96 w-72">
          <img
            class="h-full w-full text-white object-cover transition-transform duration-500 group-hover:scale-105"
            src={`https://image.tmdb.org/t/p/original${picturePath}`}
            alt="No image :("
          />
        </div>

        {/* Zoom and "opacity" effect  */}
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>

        {/* The additional info  */}
        <div class="absolute inset-0 flex translate-y-[100%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 class="text-xl font-bold text-white">{title}</h1>
          <p class="mt-3 text-lg italic text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            Released: {release}
          </p>
          <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            IMDb: {imdb}
          </p>
          <Link href={`/movie/${movieId}`}>
            <button class="rounded-full bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white shadow shadow-black/60">
              See More
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
