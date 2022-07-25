import React, {useEffect, useState} from 'react';
import { getTasksRequest } from '../api/tasks.api';
import { TaskCard } from '../components/TaskCard';
import { useTasks } from '../context/TaskProvider';




export const TasksPage = () => {
  const { tasks, loadTasks } = useTasks()


  useEffect(()=>{

    
    loadTasks();
  },[])

  const renderMain = (tasks) => {
    if(tasks.length === 0) return <h1>No tasks yet</h1>
      return tasks.map( task => (<TaskCard task = {task} key = {task.id}/>))
  }


  return (
    <div>
      <h1 className='text-5xl text-white font-bold text-center'>
        Task
      </h1>
      <div className="grid grid-cols-3 gap-2">{renderMain(tasks)}</div>

    </div>
  )
}
