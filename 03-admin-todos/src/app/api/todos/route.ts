import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import * as yup from "yup";

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

const postSchema = yup.object({
    description: yup.string().required(),
    complete: yup.boolean().optional().default(false),
});

export async function POST(req: Request) {
    try {
        const { complete, description } = await postSchema.validate(await req.json());
        const todo = await prisma.todo.create({ data: { complete, description } });
        return NextResponse.json(todo, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 400 });
    }
}
