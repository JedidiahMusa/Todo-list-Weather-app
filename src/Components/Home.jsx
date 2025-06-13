import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex-col ">
        <button onClick={()=>{navigate("/todoList")}} className="border-1 border-gray-300 rounded-2xl p-2">todo list</button>
        <button onClick={()=>{navigate("/weatherApp")}} className="border-1 border-gray-300 rounded-2xl p-2">weather app</button>
      </div>
    </div>
  );
}

export default Home;
