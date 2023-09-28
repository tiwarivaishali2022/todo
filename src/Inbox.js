import React, { useRef, useState } from 'react';
import './inbox.css';

export default function Inbox(props) {
    const [newTask, setNewTask]=useState(false)
    const titleRef = useRef()
    const calenderRef=useRef()
    const newTaskHandler=()=>{
        setNewTask(true)
    }
    const addHandler=(e)=>{
      e.preventDefault()
      if(titleRef.current.value === ""){
            alert('Please enter a task')
            return;
        }
        let newObj = {
            number :props.list.length + 1,
            title :titleRef.current.value,
            date :new Date(calenderRef.current.value)
        }
        props.append(newObj)
        setNewTask(false)
    }
    const cancelHandler=()=>{
        setNewTask(false)
    }
  return (
    <div>
       <h2>Inbox</h2>
       {!newTask && <button onClick={newTaskHandler}>+ADDNEW</button>}
       {newTask  && (
        <form>
            <input type="text" ref={titleRef}/>
            <div>
              <button onClick={(e)=>{addHandler(e)}}>Add Task</button>
              <input type="date" ref={calenderRef} defaultValue="2023-03-01" />
              <button className="reset-button" onClick={cancelHandler}>Reset</button>
            
            </div>
        </form>
       )}
       <div>
        {props.list.map((list)=>{
            return (
                <div key={list.number}>
                   <div>{list.title}({list.date.toLocaleDateString()})</div>
                </div>
            )
        })}
       </div>
    </div>
  )
}
