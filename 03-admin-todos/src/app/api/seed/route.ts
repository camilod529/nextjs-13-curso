import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request) {
    await prisma.todo.deleteMany(); // Delete all todos

    await prisma.todo.createMany({
        data: [
            {
                description: "piedra del alma",
            },
            {
                description: "piedra del poder",
            },
            {
                description: "piedra del espacio",
            },
            {
                description: "piedra del tiempo",
                complete: true,
            },
        ],
    });

    return NextResponse.json({
        message: "seed executed",
    });
}
