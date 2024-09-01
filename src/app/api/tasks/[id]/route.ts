import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

interface Params {
params : {id:string}
}




export async function GET(request:Request, {params}:Params) {
    const task = await prisma.task.findFirst({
        where: {
            id : Number(params.id)
        }
    })
    return NextResponse.json(task)
}

export function POST (request:Request) {
    return NextResponse.json("Creando tarea.")
}

export async function PUT(request:Request, {params}:Params) {
    const data = await request.json()
    const taskUpdate = await prisma.task.update({
        where: {
            id: Number(params.id)
        },
        data : data
    })
    return NextResponse.json(taskUpdate)
}

export async function DELETE(request: Request, {params}:Params) {
    const task = await prisma.task.delete({
        where: {
            id : Number(params.id)
        }
    })
    return NextResponse.json(task)
}