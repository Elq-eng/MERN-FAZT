import React from 'react'
import {Link} from 'react-router-dom'


export const Navbar = () => {
  return (
    <div className='bg-zinc-700 flex justify-between px-20 py-2'>
      <Link 
      to = "/"
      className="text-white font-bold">
        <h1>React Mysql</h1>
      </Link>

      <ul className='flex gap-x-1'>
        <li>
          <Link to = "/" className='bg-slate-200 px-2 py-1'> Home</Link>
        </li>
        <li>
        <Link to = "/new" className='bg-teal-200 px-2 py-1'> Create Task</Link>
        </li>
      </ul>

      
    </div>
  )
}
