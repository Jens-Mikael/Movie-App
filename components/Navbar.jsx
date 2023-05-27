"use client";
import { useDispatch, useSelector } from "react-redux";
import { toggleThemeMode } from "../redux/slices/themeMode";

const NavBar = () => {
  const dispatch = useDispatch();
  const themeMode = useSelector((state) => state.themeMode.value);
  return (
    <div className="bg-slate-800 border-b text-white text-center z-50 flex justify-between px-4 py-1">
      <div className="font-bold text-xl items-center flex">
        <p>Movie-App</p>
      </div>
      <div className="flex items-center">
        <div
          onClick={() => dispatch(toggleThemeMode())}
          className="p-2 m-2 rounded-full focused hover:cursor-pointer hover:bg-gray-700"
        >
          {themeMode === "dark" ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-sun h-6 w-6"
              >
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            </>
          ) : (
            <>
              <svg
                id="Layer_1"
                class=" h-6 w-6 fill-white"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M257.05,490.667c-129.975,0-235.717-105.742-235.717-235.717A235.752,235.752,0,0,1,224.083,21.54,21.333,21.333,0,0,1,241.447,58.4,150.577,150.577,0,0,0,192.63,169.2C192.63,252,260,319.37,342.8,319.37A150.577,150.577,0,0,0,453.6,270.553a21.333,21.333,0,0,1,36.862,17.364,235.752,235.752,0,0,1-233.41,202.75ZM170.7,82.33C107.089,114.377,64,180.578,64,254.95,64,361.4,150.6,448,257.05,448c74.372,0,140.573-43.089,172.62-106.7A192.964,192.964,0,0,1,342.8,362.036c-106.332,0-192.841-86.508-192.841-192.841A192.964,192.964,0,0,1,170.7,82.33Z" />
              </svg>
            </>
          )}
        </div>
        <div className="border-r border-white h-7 m-1" />
        <div className="p-1.5 m-2 hover:bg-gray-700 hover:cursor-pointer rounded-full">
          <svg
            version="1.0"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
            enable-background="new 0 0 100 100"
            xmlSpace="preserve"
            class="h-7 w-7 fill-white"
          >
            <path
              d="M50,23.333c-7.363,0-13.333,5.97-13.333,13.333C36.667,44.032,42.637,50,50,50s13.333-5.968,13.333-13.333
	C63.333,29.303,57.363,23.333,50,23.333z M50,43.333c-3.682,0-6.667-2.985-6.667-6.667S46.318,30,50,30s6.667,2.985,6.667,6.667
	S53.682,43.333,50,43.333z"
            />
            <path
              d="M50,10c-22.093,0-40,17.909-40,40.001C10,72.09,27.907,90,50,90c22.09,0,40-17.91,40-39.999C90,27.909,72.09,10,50,10z
	 M30,76.621V70c0-3.682,2.985-6.667,6.667-6.667h26.666C67.015,63.333,70,66.318,70,70v6.621c-5.576,4.196-12.487,6.712-20,6.712
	S35.573,80.817,30,76.621z M76.66,69.944c-0.029-7.334-5.983-13.277-13.327-13.277H36.667c-7.344,0-13.301,5.94-13.327,13.281
	c-4.173-5.566-6.673-12.458-6.673-19.947c0-18.411,14.922-33.335,33.333-33.335c18.408,0,33.333,14.924,33.333,33.335
	C83.333,57.49,80.833,64.382,76.66,69.944z"
            />
          </svg>
        </div>
        <div className="p-2 hover:bg-gray-700 hover:cursor-pointer rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-info w-6 h-6"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12" y2="8"></line>
          </svg>
        </div>
        <div className="p-2 m-2 hover:bg-gray-700 hover:cursor-pointer rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 h-6 fill-white"
          >
            <path d="M17,7H7A1,1,0,0,0,7,9H17a1,1,0,0,0,0-2Zm0,4H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm2-9H5A3,3,0,0,0,2,5V15a3,3,0,0,0,3,3H16.59l3.7,3.71A1,1,0,0,0,21,22a.84.84,0,0,0,.38-.08A1,1,0,0,0,22,21V5A3,3,0,0,0,19,2Zm1,16.59-2.29-2.3A1,1,0,0,0,17,16H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1Z" />
          </svg>
        </div>

        <div className="p-2 hover:bg-gray-700 hover:cursor-pointer rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            class="h-6 w-6 fill-white"
          >
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <path
                  class="cls-1"
                  d="M59.2,23.58a4.41,4.41,0,0,1-2-4.86A9.79,9.79,0,0,0,45.27,6.81a4.4,4.4,0,0,1-4.85-2,9.79,9.79,0,0,0-16.84,0,4.39,4.39,0,0,1-4.86,2A9.79,9.79,0,0,0,6.81,18.73a4.39,4.39,0,0,1-2,4.85,9.79,9.79,0,0,0,0,16.84,4.4,4.4,0,0,1,2,4.86A9.79,9.79,0,0,0,18.73,57.19a4.4,4.4,0,0,1,4.85,2,9.79,9.79,0,0,0,16.84,0,4.41,4.41,0,0,1,4.86-2A9.79,9.79,0,0,0,57.19,45.27a4.4,4.4,0,0,1,2-4.85,9.79,9.79,0,0,0,0-16.84ZM56.44,35.76A9.84,9.84,0,0,0,52,46.63a4.37,4.37,0,0,1-5.33,5.31,9.86,9.86,0,0,0-10.86,4.5,4.36,4.36,0,0,1-7.52,0,9.85,9.85,0,0,0-8.45-4.8,9.56,9.56,0,0,0-2.42.31,4.37,4.37,0,0,1-5.31-5.33,9.85,9.85,0,0,0-4.5-10.86,4.36,4.36,0,0,1,0-7.52,9.84,9.84,0,0,0,4.49-10.87,4.38,4.38,0,0,1,5.34-5.31,9.85,9.85,0,0,0,10.85-4.5,4.36,4.36,0,0,1,7.52,0,9.84,9.84,0,0,0,10.87,4.49A4.38,4.38,0,0,1,52,17.38a9.83,9.83,0,0,0,4.49,10.86,4.36,4.36,0,0,1,0,7.52Z"
                />
                <path
                  class="cls-1"
                  d="M32,18.47A13.53,13.53,0,1,0,45.53,32,13.55,13.55,0,0,0,32,18.47Zm0,21.65A8.12,8.12,0,1,1,40.12,32,8.13,8.13,0,0,1,32,40.12Z"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
