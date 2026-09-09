import BookingForm from "@/componets/BookingForm";
import { rooms } from "@/lib/sample-data";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Booking",
};

export default function Page() {
  return (
    <main>
      <h1>New Booking</h1>
      <BookingForm rooms={rooms} />
    </main>
  );
}