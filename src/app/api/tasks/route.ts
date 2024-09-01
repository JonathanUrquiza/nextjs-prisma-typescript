import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";



export async function GET() {
    const tasks =  await prisma.task.findMany()
    return NextResponse.json(tasks)
}
export async function POST(request:Request) {
    const data = await request.json()
    await prisma.task.create({
        data:data
    })
    return NextResponse.json("Creando tareas")
}