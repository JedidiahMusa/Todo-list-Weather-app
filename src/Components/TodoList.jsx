import { useState } from "react";

const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  function handleDelete(idToDelete){
    const updatedTodos = todos.filter(todo => todo.id !== idToDelete);
    setTodos(updatedTodos);
  }

  function addTodo() {
    if(inputValue.trim() === '') return;
    const newTodo ={
      id: Date.now(),
      task: inputValue
    }
    setTodos([...todos, newTodo]);
    setInputValue('');
  }
  
  return (
    <div className="p-8">
      <h1 className="uppercase text-2xl font-bold text-center py-8">
        list of things to do
      </h1>
      <div className="flex w-full gap-4 ">
        <input
          type="text"
          value={inputValue}
          onChange={(e)=>setInputValue(e.target.value)}
          placeholder="Enter a Task"
          className="border-1 focus:outline-none focus:border-gray-500 focus:border-2 border-gray-400 p-2 flex-1 rounded-2xl  "
        />
        <button onClick={addTodo} className="bg-gray-700 p-2 rounded-2xl transition-all duration-200 hover:bg-gray-800 text-[.8rem] text-white uppercase font-bold ">
          add todo
        </button>
      </div>

      <div>
        {todos.map((todo)=>(
          <div key={todo.id} className="flex my-8 items-center justify-between border-1 py-8 px-2 border-gray-200 rounded-2xl  w-full">
            <p className="px-2 wrap-anywhere" >
            {todo.task}
        </p>
        <div className="min-w-[10rem]">
          <button className="mr-4 hover:bg-green-500 p-3 bg-green-400 cursor-pointer transition-all duration-200 uppercase text-[.8rem] font-bold rounded-2xl">done</button>
        <button onClick={() => handleDelete(todo.id)} className="p-3 bg-red-400 hover:bg-red-500 transition-all cursor-pointer duration-200 uppercase text-[.8rem] font-bold rounded-2xl">delete</button>
        </div>
    
        
          </div>
          
      ))}
      </div>
    </div>
  );
};

export default TodoList;
