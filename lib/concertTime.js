export const getConcertDateTime = (concert) => {
  const dateStr = new Date(concert.date).toISOString().split("T")[0];
  const time = concert.time || "00:00";
  return new Date(`${dateStr}T${time}:00`);
};

export const isPastConcert = (concert) => {
  return getConcertDateTime(concert) < new Date();
};
