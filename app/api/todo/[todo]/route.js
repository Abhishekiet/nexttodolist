import { NextResponse } from "next/server"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const GET=async( req, {params} )=>{
    const { todo } = params
    const data = await prisma.ToDoList.findMany( {
        where : {email : todo}
    } ) 
    return NextResponse.json( data )
}

export const DELETE=async( req, {params} )=>{
    const { todo } = params
    const data = await prisma.ToDoList.delete( {
        where : {id : todo }
    } ) 
    return NextResponse.json( {name:'Deleted'} )
}