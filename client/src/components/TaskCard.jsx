import React from 'react'
import { useTasks } from '../context/TaskProvider'
import { useNavigate } from 'react-router-dom';

export const TaskCard = ({task}) => {

  const {deleteTask,toggleTaskDone} = useTasks();
  const navigate = useNavigate();

  const handleDone = async() => {
    await toggleTaskDone(task.id)
  }

  return (
    <div className='bg-slate-800 rounded-md p-4 text-white' >
            <header className="flex justify-between ">
              <h2 className='text-sm font-bold'>{ task.title}</h2>
              <span>{task.done === 1 ? "✔️" : "❌" }</span>
            </header>
            <p className='text-xs'>{task.description}</p>
            <span>{task.createAt}</span>
            <div className='flex gap-x-2'>
              <button className='bg-red-500 px-2 py-1  text-white' onClick={() => {deleteTask(task.id)}}>Delete</button>
              <button className='bg-slate-500 px-2 py-1 text-white'  onClick={() => navigate(`/edit/${task.id}`)}>Edit</button>
              <button className='bg-green-500 px-2 py-1 text-white'  onClick={() => handleDone(task.done) }>
                Toggle Task
              </button>
            </div>
          </div>
  )
}
