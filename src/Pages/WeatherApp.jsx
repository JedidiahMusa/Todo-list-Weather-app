import React, { useState } from "react";
import bgImage from "../assets/bg-video.mp4";
import axios from "axios";

function WeatherApp() {
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
        <div className="w-full flex justify-center">
          <input
            placeholder="Enter a city"
            type="text"
            onKeyPress={searchLocation}
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            className="border-1 px-6 mt-8 p-3 rounded-full text-[1.2rem] bg-[#ffffff2b] text-white border-white focus:outline-none placeholder-[#ffffff8a] "
          />
        </div>
        <div className="text-white absolute left-8 top-[30%]">
          <p className="text-2xl">{data.name}</p>
          {data.main ? (
            <h2 className="text-8xl mt-4 font-extrabold">
              {data.main.temp.toFixed()}°F
            </h2>
          ) : null}
        </div>

        <div className="text-white absolute right-0 top-[40%]">
          {data.weather ? (
            <p className="-rotate-90 text-2xl font-bold ">
              {data.weather[0].main}
            </p>
          ) : null}
        </div>

        {data.name != undefined && (
          <div className="w-full text-white absolute bottom-8 flex justify-center">
            <div className=" p-4 px-12 w-[90%] rounded-3xl bg-[#ffffff20] ">
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
