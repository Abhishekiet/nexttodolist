'use client'

import axios from "axios"
import { useRouter } from 'next/navigation';
import { AiFillDelete  } from "react-icons/ai";


const Card=( { id, title } )=>{

    const router = useRouter()

    const fun=async()=>{
        await axios.delete( `/api/todo/${id}` )
        router.refresh()
    }

    return(
        <div className=" flex justify-between items-center shadow-md p-4 text-xl m-2 md:w-[80%] mx-auto">
                
                <h1> { title } </h1>
                <button onClick={fun}> <AiFillDelete size={25} className="text-[red] "/> </button>
        
        </div>
    )
}

export default Card