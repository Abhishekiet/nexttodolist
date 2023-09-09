'use client'

import { useRouter } from "next/navigation"
import { signIn, useSession } from "next-auth/react"
import Image from "next/image"

const page = () => {

    const session = useSession()
    const router = useRouter()

    if (session.status === 'unauthenticated' ) {
        return (
            <div className="flex h-screen items-center justify-center">
                
                <div className="flex items-center justify-center shadow shadow-xl bg-slate-100 md:h-[500px] p-6 md:p-0 h-[300px] md:w-[50%]">
                    <span className="flex p-4 bg-blue-500 font-bold text-xl gap-6">
                        <Image src='/google.png' alt='google' height={50} width={50} className="rounded-full"/>
                        <button onClick={ ()=> signIn('google') }> Sign In With Google </button>
                    </span>
                </div>

            </div>
        )
    }

    if( session.status === 'loading' ){
        return <> loading... </>
    }

    else {
        return router.push("/")
    }

}
export default page