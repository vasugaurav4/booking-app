import BookingForm from "@/componets/BookingForm";
import { prisma } from "@/lib/prisma";
// import { rooms } from "@/lib/sample-data";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Booking",
};



export default async function Page({searchParams}: {
  searchParams: Promise<{ id?: string }>;}) {
   const params = await searchParams;
  const roomid = params?.roomId;

  const roomList  = await prisma.room.findMany()
  return (
    <main>
      <h1>New Booking</h1>
      <BookingForm rooms={roomList} roomid={roomid} />
    </main>
  );
}