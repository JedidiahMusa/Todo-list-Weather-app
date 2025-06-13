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
      <div className="grid grid-cols-2 grid-rows-1 gap-4 px-4">
        <div onClick={() => {
              navigate("/todoList");
            }} className="flex flex-col items-center justify-center">
          <img src={todo} alt="Todo List" />{" "}
          <p
            
            className="text-2xl font-semibold py-2 text-white "
          >
            todo list
          </p>
        </div>

        <div onClick={() => {
              navigate("/weatherApp");
            }} className="flex flex-col items-center justify-center">
          <img src={weather} alt="Todo List" />{" "}
          <p
            
            className="text-2xl font-semibold py-2 text-white "
          >
            weather app
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
