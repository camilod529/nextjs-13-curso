import { NextResponse } from "next/server";

export async function GET(req: Request) {
    // console.log({ method: req.method });
    return NextResponse.json({
        count: 100,
    });
}
