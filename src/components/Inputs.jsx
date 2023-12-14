import React from 'react'
import { useState,useRef,useEffect } from 'react'
import Tasks from './Tasks'

function Inputs() {
    const [todo,setTodo] = useState ({})
    const [list,setList] = useState ([])
    const inputRef = useRef()

    useEffect(() =>{
        let todos = JSON.parse(localStorage.getItem("array"))
        if(!todos){
            localStorage.setItem("array",JSON.stringify([]))
        }else{
            setList(todos)
        }
    },[])

    useEffect(() => {
        let todos = JSON.parse(localStorage.getItem("array"))
        if(!todos){
            todos = localStorage.setItem("array",[])
        }else{
            let str = JSON.stringify(list)
            todos = localStorage.setItem("array",str)
        }
    },[list])



    function pushList(){
        setList(prevList => [...prevList,todo])
        inputRef.current.value = ""
    }

    function getInputValue(event){
        setTodo({
            text: inputRef.current.value,
            isCompleted: false
        })
        if(event.key === "Enter"){
            pushList()
        }
    }

  return (
    <div>
        <div className='flex justify-center gap-4 mt-12'>
            <input 
            type="text" 
            className='block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"'
            ref={inputRef}
            onKeyUp={getInputValue}
            />
            <button 
            className='px-3 py-1 bg-slate-600 rounded text-white'
            onClick={pushList}
            >Todo Ekle</button>
        </div>
        <Tasks list={list} setList={setList}/>
    </div>
  )
}

export default Inputs