import React from 'react'
import {FaRegThumbsUp,FaRegTrashAlt} from "react-icons/fa"

function Tasks({list,setList}) {

    function deleteItem(index){
        let newList = [...list]
        newList.splice(index,1)
        setList(newList)
    }

    function checkItem(index){
        let newList = [...list]
        if(newList[index].isCompleted){
            newList[index].isCompleted = false
        }else{
            newList[index].isCompleted = true
        }
        setList(newList)
    }


    let ffalse = "flex justify-between  p-4 items-center rounded bg-transparent"
    let ttrue = "flex justify-between  p-4 items-center rounded bg-zinc-600 text-white line-through"
  return (
    <div className='w-1/2 mx-auto '>
        <ul className='unstyled mt-3'>
            {list.map((item,index) =>
            (<li key={index} className={item.isCompleted ? ttrue : ffalse}>
                <span className='text-3xl'>{item.text}</span>

                <div className='flex gap-3'>
                    <FaRegThumbsUp 
                    size={35} 
                    className='cursor-pointer hover:text-green-500'
                    onClick={() => checkItem(index)}
                    />
                    <FaRegTrashAlt
                     size={35}
                      className='cursor-pointer hover:text-red-500'
                      onClick={() => deleteItem(index)}
                      />
                </div>
            </li>))}
        </ul>
    </div>
  )
}

export default Tasks