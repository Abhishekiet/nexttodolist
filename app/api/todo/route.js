import { NextResponse } from "next/server"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export const POST=async( req )=>{
    const { email, title } = await req.json()
    const newuser = await prisma.ToDoList.create( {
        data : {
            email,
            title
        }
    } )
    return NextResponse.json( 'Successfull' )
}