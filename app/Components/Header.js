'use client'

import Image from "next/image"
import { useSession } from "next-auth/react"

const Header = () => {

    const session = useSession()
    console.log( session )

    return (
        <div className="flex flex-col ">
            
            <div className="flex flex-col bg-[#161651] py-6 text-white fixed top-0 min-w-full items-center">
                <h1 className="text-center font-bold text-2xl "> To-DO LIST  </h1>
                <h1 className="text-center font-semibold text-xl mt-4"> {session?.data?.user?.name} </h1>
            </div>

            <Image src={session?.data?.user?.image} alt="Vercel Logo" height={50} width={50} className="fixed right-5 top-8 rounded-full "/>

        </div>
    )
}

export default Header