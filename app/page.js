'use client'

import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [maintask, setmaintask] = useState([])
  const submithandler=(e)=>{
    e.preventDefault()// to prevent reloading of the page...this is a default method in react

    setmaintask([...maintask,{title,desc}])// [...maintask] means you will be able to add a new task without erasing the previous one
    settitle("")
    setdesc("")
  }

  const deleteHandler = (i) =>{
    let copyTask = [...maintask]
    copyTask.splice(i,1)//used to cut the array 
    setmaintask(copyTask)
  }

let rendertask = "No task Avalaible"
if(maintask.length>0){
rendertask = maintask.map((t,i)=>{
  return(
   <li key={i} className='flex items-center justify-between mb-5'>
     <div className='flex justify-between w-2/3'>

<h5 className= 'text-2xl font-semibold'>{t.title}</h5>
<h6 className='text-xl font-semibold'>{t.desc}</h6>
  </div>
  <button 
  onClick={()=>{
    deleteHandler(i)
  }}
  className='bg-red-400 px-4 py-2 text-white rounded font-bold'>Delete</button>
   </li>
  )
});
}



  return (
    <>
    <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>Ghosty's Todo List</h1>
    <form onSubmit={submithandler}>
    <input type="text" 
     className='text-2xl border-zinc-800 border-2 m-8 px-4 py-2'
      placeholder='enter task here'
      //two way binding means to we are telling the react and user both what values we are storing .
      value = {title}
      onChange={(e)=>{
        settitle(e.target.value)
   

      }}
      
      />
      <input type="text" 
     className='text-2xl border-zinc-800 border-2 m-8 px-4 py-2'
      placeholder='enter description'
      value={desc}
      onChange={(e)=>{
        setdesc(e.target.value)
      }}
      
      
      />
 
      <button className='bg-black text-white px-4 py-2 text-2xl font-bold rounded m-5'>Add Task</button>
    
    </form>
    <hr/>

    <div className="p-8 bg-slate-200">


<ul>
  {rendertask}
</ul>

    </div>
    
    </>
  )
}

export default page
 