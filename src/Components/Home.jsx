import React from "react";
import { useNavigate } from "react-router-dom";
import weather from "../assets/weather.png";
import todo from "../assets/todo.png";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 h-screen w-full">
      <div>
        <h1 className="text-5xl font-serif py-8 text-center font-bold">
          React Apps
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 grid-rows-1 gap-4 p-4">
        <div
          onClick={() => {
            navigate("/todoList");
          }}
          className=" h-full items-center justify-center"
        >
          <div className="h-full object-center object-contain ">
            <img
              src={todo}
              alt="Todo List"
              className="object-center w-32 h-32 object-contain"
            />
          </div>
        </div>

        <div
          onClick={() => {
            navigate("/weatherApp");
          }}
          className="h-full items-center justify-center"
        >
          <div className="h-full object-center object-contain ">
            <img
              src={weather}
              className="object-contain w-32 h-32 object-center "
              alt="Todo List"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
