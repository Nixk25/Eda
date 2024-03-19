import { connectDatabase } from "@/lib/mongodb";
import PrevConcert from "@/models/prevConcert";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { name, date, time } = await req.json();
  await connectDatabase();
  await PrevConcert.create({
    name,
    date,
    time,
  });
  return NextResponse.json({ message: "Concert created" }, { status: 201 });
}

export async function GET() {
  await connectDatabase();
  const prevConcerts = await PrevConcert.find();
  return NextResponse.json({ prevConcerts });
}
