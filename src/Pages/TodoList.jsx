import { useEffect, useState } from "react";

const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);


  function handleDelete(idToDelete){
    const updatedTodos = todos.filter(todo => todo.id !== idToDelete);
    setTodos(updatedTodos);
  }

  function addTodo() {
    if(inputValue.trim() === '') return;
    const newTodo ={
      id: Date.now(),
      task: inputValue,
      completed: false
    }
    setTodos([...todos, newTodo]);
    setInputValue('');
  }

  function handleDone(idToToggle){
    const updatedTodo = todos.map(todo=>
      todo.id === idToToggle ? {...todo, completed: !todo.completed} : todo
    );
    setTodos(updatedTodo)
  }
    useEffect(()=> {
      try {
        const stored = localStorage.getItem("todos");
        if (stored) {
          setTodos(JSON.parse(stored))
        }
      } catch (error) {
        console.error("Can't load todos from local storage: ", error)
      }finally{
        setHasLoaded(true)
      }
      
  },[]);

  
  useEffect(()=> {
    if (hasLoaded) {
      try {
      localStorage.setItem("todos", JSON.stringify(todos))
    } catch (error) {
      console.error("Error saving todos to local storage", error)
    }
    }  
  },[todos, hasLoaded]);
  
  return (
    <div className="p-8">
      <h1 className="uppercase text-3xl font-bold text-center py-8">
        list of things to do
      </h1>
      <div className="flex w-full gap-4 ">
        <input
          type="text"
          value={inputValue}
          onChange={(e)=>setInputValue(e.target.value)}
          placeholder="Enter a Task"
          className="border-1 focus:outline-none focus:border-gray-500 focus:border-2 border-gray-400 py-3 px-4 flex-1 rounded-2xl  "
        />
        <button onClick={addTodo} className="bg-gray-700 py-2 px-3 rounded-2xl transition-all duration-200 hover:bg-gray-800 text-[.8rem] text-white uppercase font-bold ">
          add todo
        </button>
      </div>

      <div>
        {todos.map((todo)=>(
          <div key={todo.id} className={`flex my-8 items-center justify-between  py-8 px-2 rounded-2xl  w-full ${todo.completed ? ' border-1 border-green-200': ' border-1 border-gray-200'}`}>
            <p className={`px-2 wrap-anywhere ${todo.completed ? 'line-through text-gray-400' : ''}`} >
            {todo.task}
        </p>
        <div className="flex justify-end ">
          <button onClick={()=>handleDone(todo.id)} className={`mr-4 p-3 rounded-2xl cursor-pointer transition-all duration-200 uppercase text-[.8rem] font-bold rounded-2xl${todo.completed ? ' bg-gray-400' : ' bg-green-400'}`}>{todo.completed? 'Completed': 'done'}</button>
        <button onClick={() => handleDelete(todo.id)} className={`p-3 transition-all cursor-pointer duration-200 uppercase text-[.8rem] font-bold rounded-2xl ${todo.completed ? 'bg-gray-400' : 'bg-red-400'}`}>delete</button>
        </div>
          </div>
          
      ))}
      </div>
    </div>
  );
};

export default TodoList;
