import React from "react";
import EditConcert from "@/components/EditConcert";
const getConcertById = async (id) => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/concerts/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Could not find concert");
    }
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

const updateConcert = async ({ params }) => {
  const { id } = params;
  const { concert } = await getConcertById(id);
  const { name, date, time } = concert;
  return <EditConcert id={id} name={name} date={date} time={time} />;
};

export default updateConcert;
