'use client'

import { useState } from "react"
import axios from "axios"
import { useRouter } from 'next/navigation';
import { useSession } from "next-auth/react";

const AddTask = ( ) => {

    const [ field, setField ] = useState("")

    const router = useRouter()
    const session = useSession()  

    const fun=async()=>{
            const res = await axios.post( `/api/todo`, { email:session?.data?.user?.email, title: field } )
            router.refresh()
            setField('')
            
    }

    return (
        <div className="flex justify-center ">

            <div className="flex flex-col items-center justify-center md:w-[90%] w-[95%] shadow-2xl py-6">

            
            <input type='text' className="md:w-[80%] w-[95%] h-14 text-xl p-2  border border-blue-700 rounded-xl border-[4px]" placeholder="Add Your To-Do here ..." onChange={ (e)=> setField(e.target.value) } value={field} />
            
                <button className="bg-[green] px-12 md:py-4 py-2 mt-4 rounded-full text-xl font-bold" onClick={ fun }> Add Task </button>
            </div>

        </div>

    )
}

export default AddTask