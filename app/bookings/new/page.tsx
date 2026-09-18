import BookingForm from "@/componets/BookingForm";
import { prisma } from "@/lib/prisma";
// import { rooms } from "@/lib/sample-data";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Booking",
};

export  default async function Page() {
  const roomList  = await prisma.room.findMany()
  return (
    <main>
      <h1>New Booking</h1>
      <BookingForm rooms={roomList}  />
    </main>
  );
}