"use client"

import { useSelector } from "react-redux";

const MoviesPage = () => {
  const themeMode = useSelector(state => state.themeMode.value)
  return (
    <div className={`h-full  ${themeMode === "dark" ? "bg-slate-800" : ""}`}>

    </div>
  )
}

export default MoviesPage;