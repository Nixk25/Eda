import { connectDatabase } from "@/lib/mongodb";
import Concert from "@/models/concert";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { name, date, time } = await req.json();
  await connectDatabase();
  await Concert.create({
    name,
    date,
    time,
  });
  return NextResponse.json({ message: "Concert created" }, { status: 201 });
}

export async function GET() {
  await connectDatabase();
  const concerts = await Concert.find();
  return NextResponse.json({ concerts });
}

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id");
  await connectDatabase();
  await Concert.findByIdAndDelete(id);
  return NextResponse.json({ message: "Concert deleted" }, { status: 200 });
}
