import Navbar from './Components/Navbar.jsx'
import Home from './Components/Home.jsx'
import TodoList from './Pages/TodoList.jsx'
import WeatherApp from './Pages/WeatherApp.jsx'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/weatherApp" element={<WeatherApp /> } />
      </Routes>
    </div>
  )
}

export default App
