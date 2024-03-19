"use client";

import React, { useEffect, useState } from "react";
import EditConcert from "@/components/EditConcert";

const UpdateConcert = ({ params }) => {
  const { id } = params;
  const [concert, setConcert] = useState(null);
  console.log(concert);
  useEffect(() => {
    const getConcert = async () => {
      try {
        const res = await fetch(`/api/concerts/${id}`, {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("failed to fetch");
        }

        let data = await res.json();

        setConcert(data.concert);
      } catch (err) {
        console.log("Error loading concert", err);
      }
    };

    getConcert();
  }, [id]);

  if (!concert) {
    return <div>Loading...</div>;
  }

  const { name, date, time } = concert;
  return <EditConcert id={id} name={name} date={date} time={time} />;
};

export default UpdateConcert;
