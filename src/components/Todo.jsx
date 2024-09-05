import { FcTodoList } from "react-icons/fc";
import TodoItems from "./TodoItems";
import { useEffect, useRef, useState } from "react";
const Todo = () => {

    const [ todo, setTodo ] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [])

    const inputRef = useRef()

    const add = () =>{
        
        const inputText = inputRef.current.value.trim();
        
        if(inputText === ""){
            return null;
        }
        const newTodo = {
            id: Date.now(),
            text : inputText,
            isCompelete: false,
        }
        
        setTodo((prev)=>[...prev, newTodo]);
        inputRef.current.value = " ";
    }

    const deleteTodo = (id)=>{
        setTodo((prev)=>{
           return prev.filter((todo)=>todo.id !== id)
        })
    }

    const toggle = (id)=>{
        setTodo((prev)=>{
            return prev.map((todo)=>{
                if(todo.id === id){
                    return { ...todo, isCompelete: !todo.isCompelete }
                }
                return todo;
            })
        })
    }

    useEffect(()=>{
        localStorage.setItem("todos", JSON.stringify(todo))
        
    },[todo])

    

  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[500px] rounded-xl">
        {/* title  */}
        <div className="flex items-center mt-7 ml-[100px] gap-2">
            <FcTodoList size={30} />
            <h1 className="text-3xl font-semibold ">To-Do List</h1>
        </div>

        {/* input from user */}
        <div className="flex items-center my-7 bg-gray-200 rounded-full">
            <input type="text" ref={inputRef} className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-700 text-lg" placeholder="Give task..." />
            <button onClick={add} className="border-none rounded-full bg-orange-600 hover:bg-orange-700 w-32 h-14 text-white text-lg cursor-pointer">ADD +</button>
        </div>

        {/* todo item */}

        <div>
            {
                todo.map((item, index)=>{
                    return <TodoItems key={index} text={item.text} id={item.id} isCompelete={item.isCompelete} deleteTodo={deleteTodo} toggle={toggle}/>
                })
            }
            {/* <TodoItems text="leran Reacjs"/>
            <TodoItems text="leran nodejs"/> */}
        </div>
    </div>
  )
}

export default Todo