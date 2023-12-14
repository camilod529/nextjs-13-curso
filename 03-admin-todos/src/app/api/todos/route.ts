import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const take = Number(searchParams.get("take") ?? "10");
    const skip = Number(searchParams.get("skip") ?? "0");

    if (isNaN(take)) return NextResponse.json({ error: "take must be a number" }, { status: 400 });
    if (isNaN(skip)) return NextResponse.json({ error: "skip must be a number" }, { status: 400 });

    const todos = await prisma.todo.findMany({
        take: take,
        skip: skip,
    });

    return NextResponse.json(todos);
}

export async function POST(req: Request) {
    const body = await req.json();

    const todo = await prisma.todo.create({ data: body });

    return NextResponse.json(todo, { status: 201 });
}
