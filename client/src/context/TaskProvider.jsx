import { useContext, useState } from "react";
import { getTasksRequest,deleteTaskRequest, createTaskRequest,getTaskRequest, updateTaskRequest, toggleTaskRequest } from "../api/tasks.api";
import {TaskContext} from './TasksContext'



export const useTasks = () => {
  const context = useContext(TaskContext);
  if(!context){
    throw new Error("useTasks must be used within a TaskContextProvider")
  }
  return context
}

export const TaskContextProvider = ({children}) => {

  const [tasks, setTasks] = useState([])

  async function loadTasks() {
    const {data}  = await getTasksRequest();
    setTasks(data);
  }

  const deleteTask = async(id) =>{
    try{
      const res = await deleteTaskRequest(id)
      setTasks(tasks.filter(task => task.id !== id));
      console.log(res);
    }
    catch(err){
      console.error(err)
    }
  }
  const createTask = async(task) =>{
    try{
      const res = await createTaskRequest(task)
      console.log(res)
    }catch(e){
      console.error(e)
    }
  }

  const getTask = async(id) => {
    try{
      const res = await getTaskRequest(id)
      return res.data
    }catch(e){
      console.error(e);;
    }
  }

  const updateTask = async(id, newFields) => {
    try{
      const res = await updateTaskRequest(id, newFields);
      console.log(res);
    }catch(e){
      console.error(e);
    }
  }

  const toggleTaskDone = async(id) => {
    try{
      const taskFound = tasks.find((task)=> task.id === id)
      
      await toggleTaskRequest(id,taskFound.done === 0 ? true : false)
      setTasks(tasks.map((task)=> task.id === id ? {...task,done : !task.done }: task))
    }catch(e){
      console.log(e)
    }

  }



  return (<TaskContext.Provider value = {{ tasks, loadTasks, deleteTask, createTask,getTask, updateTask, toggleTaskDone }}>{children} </TaskContext.Provider>)
}