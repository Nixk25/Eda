import { connectDatabase } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import Concert from "@/models/concert";

export async function PUT(req, { params }) {
  try {
    const { id } = params;
    const { newName: name, newDate: date, newTime: time } = await req.json();
    await connectDatabase();
    const updatedConcert = await Concert.findByIdAndUpdate(id, {
      name,
      date,
      time,
    });
    if (!updatedConcert) {
      console.log(`No concert found with id: ${id}`);
      return NextResponse.json("No concert found", { status: 404 });
    }
    return NextResponse.json("Concert updated", { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json("Server error", { status: 500 });
  }
}

export async function GET(req, { params }) {
  const { id } = params;
  await connectDatabase();
  const concert = await Concert.findOne({ _id: id });
  return NextResponse.json({ concert }, { status: 200 });
}
