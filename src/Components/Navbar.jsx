import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  function nav(){
    setIsOpen(!isOpen )
  }
  
  
  return (
    <nav className='w-full relative flex justify-between bg-gray-800 text-white p-4'>
        <h1 className='font-bold text-2xl uppercase'>Multi-App</h1>
        <ul className='hidden md:flex space-x-4'>
            <li><a href="/">Home</a></li>
            <li><a href="/about">Apps</a></li>
        </ul>

        <div className='flex md:hidden items-center justify-center'>
          {!isOpen?<GiHamburgerMenu onClick={nav} size={22} />:<IoCloseSharp onClick={nav} size={24} />}
        </div>
        
        <div className={isOpen?'absolute w-48 flex bg-white border-1 border-gray-200 left-0 top-0':'hidden'}>
          <ul className='flex-col h-full py-4 w-full text-gray-600'>
            <li className='w-full p-4 hover:bg-gray-100'><a href="/">Home</a></li>
            <li className='w-full p-4 hover:bg-gray-100'><a href="/about">Apps</a></li>
        </ul>
        </div>
    </nav>
  )
}

export default Navbar