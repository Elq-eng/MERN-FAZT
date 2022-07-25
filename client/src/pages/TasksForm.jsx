import React from 'react'
import {Form, Formik } from 'formik';
import { useTasks } from '../context/TaskProvider';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';


export const TasksForm = () => {

  const { createTask, getTask, updateTask } = useTasks();
  const params = useParams()
  const [task, setTask] = useState({
    title: "",
    description: ""
  })
  const navigate = useNavigate()

  const loadTasks = async () =>{
    if(params.id){
      const result = await getTask(params.id)
      setTask({
        title: result.title,
        description: result.description
      })
    }
  }

  useEffect( ()=>{
    loadTasks()
  },[])

  return (
    
    <div >
      

      <Formik
      initialValues={task}
      enableReinitialize={true}
      onSubmit = {async(values,actions) =>{

        if(params.id) {
          await updateTask(params.id, values)
        }
        else{
          await createTask(values)
          
        }
        navigate('/')

        setTask({
          title: "",
          description: ""
        })
      }}
      >
        {({ handleChange,handleSubmit, values, isSubmitting }) =>(
            <Form onSubmit={handleSubmit} className="bg-slate-300 max-w-md rouded-md p-4 mx-auto mt-10">
              <h1 className='text-xl font-bold uppercase text-center'>
                {params.id ? "Edit Task" : "New Task"}
              </h1>
            <label className='block'> Title</label>
            <input type="text" name="title" placeholder='write a title'  onChange={handleChange} value = {values.title}
            className="px-2 py-1 rounded-sm w-full"/>
  
            <label className='block' > Description</label>
            <textarea name="description"  rows="3" className="px-2 py-1 rounded-sm w-full"
              placeholder='write a description'  onChange={handleChange} value = {values.description}
            ></textarea>
  
              <button type = 'submit' disabled = {isSubmitting}className='block bg-indigo-500 px-2 py-1 text-white w-full rounded-md'> {isSubmitting ? 'Saving...': 'Save'}</button>
          </Form>

        )


        }

      </Formik>
     
    </div>
  
  )
}
