import { prisma } from "@/lib/prisma"
import BookingsView from "@/componets/BookingsView"

export const metadata = {
    title: "Booking"
}
export default async function Page() {
    // const bookings = await prisma.booking.findMany()
    const bookings = await prisma.booking.findMany({ include: {room: true}, orderBy:{ createAt: "desc"}})
    return (
        <main>
            <h1 className="text-3xl font-bold text-gray-500 ">Booking</h1>
            < BookingsView bookings={bookings} />
            {/* <p>No bookings yet.</p> */}
        </main>
    )
}