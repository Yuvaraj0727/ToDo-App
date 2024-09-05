import { GoCheckCircleFill } from "react-icons/go";
import { FaRegCircle } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const TodoItems = ({ text, id, isCompelete, deleteTodo, toggle }) => {
  return (
    <div className={`flex items-center my-3 gap-2 p-2 ${isCompelete ? "bg-red-200 rounded-full " : " "}`}>
      <div onClick={() => { toggle(id) }} className={`flex flex-1 items-center cursor-pointer`} >
        {
            isCompelete 
            ? <GoCheckCircleFill size={25} className="text-orange-500 hover:text-orange-400" /> 
            : <FaRegCircle size={25} className="text-orange-500 hover:text-orange-300" />
        }
        <p className={`ml-4 text-[20px] decoration-orange-500 ${isCompelete ? "line-through" : " " }`}>
          {text}
        </p>
      </div>

      <div>
        <RiDeleteBin6Line onClick={() => deleteTodo(id)} size={25} className="cursor-pointer hover:text-red-900" />
      </div>
    </div>
  )
}

export default TodoItems