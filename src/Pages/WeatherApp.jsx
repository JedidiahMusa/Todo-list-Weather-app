import React, { useState } from "react";
import bgImage from "../assets/bg-video.mp4";
import axios from "axios";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";

function WeatherApp() {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=32bc402b910423d25e92ae33e759c97a`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="relative h-screen overflow-hidden ">
      <div>
        <video
          autoPlay
          muted
          loop
          src={bgImage}
          className="w-full -z-10 absolute h-full object-center object-cover "
        ></video>
      </div>

      <div className="w-full flex flex-col">
        <div className="w-full justify-center flex h-30 items-center ">
          <div className="h-20 w-[90%] md:w-[70%] lg:w-[45%] px-4 gap-8 flex justify-between items-center">
            <IoMdArrowRoundBack onClick={()=> {navigate("/")}} size={35} className="text-white" />
              <div className="flex items-center gap-4">
                <input
            placeholder="Enter a city"
            type="text"
            onKeyPress={searchLocation}
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            className="border-1 px-6 py-3  flex-1 rounded-full text-[1.2rem] bg-[#ffffff2b] text-white border-white focus:outline-none placeholder-[#ffffff8a] "
            
          />
            <IoSearch size={25} className="text-white"/>
          </div>
          
          
          </div>
          
        </div>

        <div className=" absolute top-[40%] flex items-center justify-center w-full ">
          <div className="flex w-[90%] md:w-[70%] lg:w-[45%] justify-between items-center ">
            <div className="text-white">
              <p className="text-3xl font-semibold">{data.name}</p>
              {data.main ? (
                <h2 className="text-8xl mt-4 font-extrabold">
                  {data.main.temp.toFixed()}°F
                </h2>
              ) : null}
            </div>

            <div className="text-white rotate-[-90deg]">
              {data.weather ? (
                <p className="text-3xl font-bold ">{data.weather[0].main}</p>
              ) : null}
            </div>
          </div>
        </div>

        {data.name != undefined && (
          <div className="w-full text-white absolute bottom-8 flex justify-center">
            <div className=" p-4 px-8 w-[90%] md:w-[70%] lg:w-[45%] rounded-3xl bg-[#ffffff20] ">
              <div className="flex justify-between">
                <div className="text-center">
                  {data.main ? (
                    <p className="text-[1.5rem] font-bold">
                      {data.main.feels_like.toFixed()}°F
                    </p>
                  ) : null}
                  <p className="text-[1.2rem]">Feels Like</p>
                </div>
                <div className="text-center">
                  {data.main ? (
                    <p className="text-[1.5rem] font-bold">
                      {data.main.humidity}%
                    </p>
                  ) : null}
                  <p className="text-[1.2rem]">Humidity</p>
                </div>
                <div className="text-center">
                  {data.wind ? (
                    <p className="text-[1.5rem] font-bold ">
                      {data.wind.speed.toFixed()}MPH
                    </p>
                  ) : null}
                  <p className="text-[1.2rem]">Wind Speed</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default WeatherApp;
