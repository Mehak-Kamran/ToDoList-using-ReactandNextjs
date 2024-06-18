"use client"
import React from "react"; 
import { useState } from "react";
const page=()=>{
   const [title,settitle]=useState("");
   const [desc,setdesc]=useState("");
   let [maintask,setmaintask]=useState([]);

   const submit=(e)=>{
    e.preventDefault();
    if(title===""){
      alert("please enter something")
    }
    else{
      setmaintask([...maintask,{title,desc}])
         settitle("");
         setdesc("")
         console.log(maintask)
    }
         
         
        
   }
   const deletehandler=(i)=>{
    let copy=[...maintask]
    copy.splice(i,1)
    setmaintask(copy)
}
   let renderhtml=<h1>No task added</h1>
   if(maintask.length>0){
    renderhtml= maintask.map((task,i)=>{
      return <li key={i} className="mb-5">
          <div className="flex justify-between">
          <h2 className="font-semibold w-2/4 ">{task.title}</h2>
          <h2 className="font-semibold w-2/4">{task.desc}</h2>
          <button onClick={()=>{deletehandler(i)}}
          className="bg-red-500 text-white px-3 py-2 rounded">Delete</button>
        </div>
      
        
      </li>
  
     })
   }
   
   
  return <>
     <div className="bg-black p-5">
       <h1 className="text-white font-bold text-center text-5xl" >My Todo List</h1>
     </div>
     <form onSubmit={submit}>
      <input type="text" className="m-5 border-2 p-1 rounded border-zinc-800 " 
      placeholder="Enter title" value={title} onChange={(e)=>{
        settitle(e.target.value)
        console.log(e.target.value)

      }}></input>
      <input type="text" className="m-5 border-2 p-1 rounded border-zinc-800 "
       placeholder="Enter Description" value={desc} onChange={(e)=>{
        setdesc(e.target.value)
        console.log(e.target.value)

       }}></input>
      <button className="bg-black px-3 py-1 rounded text-white font-bold">Add to list</button>
     </form>
     <hr/>
     <div className="bg-slate-200 p-10 mt-5">
      <ul>
         {renderhtml}
      </ul>
       </div>
       </>
}
export default page 