"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import {  BookingResult, BookingErrors } from "./types"
// import { bookings } from "./store"
import { nightBetween } from "./dates"
import { prisma } from "./prisma"

export async function createBooking(prevState: BookingResult | null,
    formData: FormData
): Promise<BookingResult | null> {
    const guestName = String(formData.get("guestName") ?? "");
     console.log("guestnameeeee",guestName);
    const roomId = String(formData?.get("roomID") ?? "");
    console.log("room---------",roomId)
    const startAt = String(formData?.get("startAt") ?? "")
    const endAt = String(formData?.get("endAt") ?? "")
    const errors: BookingErrors = {};
    if (guestName === "") {
        errors.guestName = "Please tell us who the booking is for.";
    }
    if (startAt === "") {
        errors.startAt = "Pick a check-in date.";
    }
    if (endAt === "") {
        errors.endsAt = "Pick a check-out date.";
    }
    if (startAt !== "" && endAt !== "" &&
        nightBetween(new Date(startAt), new Date(endAt)) <= 0) {
        errors.endsAt = "Check-out has to be after check-in.";
    }
    //  if (!roomId) {
    //   errors.roomId = "Please select a room"
    // }

    if (Object.keys(errors).length > 0) {
        return { ok: false, errors };
    }
   
    // const booking: Booking = {
    //     id: String(bookings.length + 1),
    //     roomId: String(formData.get("roomId")),
    //     guestName: String(formData.get("guestName")),
    //     startAt: String(formData.get("startAt")),
    //     endsAt: String(formData.get("endAt")),
    //     status: "pending",
    // };

    const roomExists = await prisma.room.findUnique({
  where: { id: roomId },
});

if (!roomExists) {
  throw new Error(`Cannot create booking: Room with ID "${roomId}" was not found.`);
  // Or handle this gracefully by returning an error message to your Next.js UI
}

    await prisma.booking.create({data: {roomId: roomId,
        guestName: guestName, 
        stratAt: new Date(startAt),
        endDate: new Date(endAt)
        }});
    // bookings.push(booking);
    revalidatePath("/bookings")
    redirect("/bookings");
}