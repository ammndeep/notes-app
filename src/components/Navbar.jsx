import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className='text-black flex flex-row px-14 w-full py-2 justify-start shadow-lg'>
        <div>
        <Link className='text-3xl font-bold cursor-pointer hover:text-slate-500' to={"/"}>Notes</Link>
        </div>
        <nav className='flex gap-5 font-medium pl-14 items-center '>
        <Link className='cursor-pointer hover:text-slate-500' to={"/"}>Home</Link>
        <Link className='cursor-pointer hover:text-slate-500' to={"/about"}>About</Link>
        </nav>
      </div>
    </div>
  )
}

export default Navbar


       