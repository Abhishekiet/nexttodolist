'use client'

import Card from '@/app/Components/Card'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'

const Container=()=>{

    const[ state, setState ] = useState([])
    useEffect( ()=>{
        fun()
    },)

    const session = useSession()
    console.log( process.env.URI )

    const fun=async()=>{
        const res = await axios.get( `/api/todo/${session?.data?.user?.email}` )
        setState( res )
    }
    
    return(
        <div className="pt-8 px-2 ">
            <h1 className='text-center font-bold underline underline-offset-2 text-2xl'> {session?.data?.user?.name}'s List </h1>  
            {
                state?.data?.map( a => <Card title={a.title} id={a.id} key={a.id} /> )
            }
        
        </div>
    )
}

export default Container