import { rooms } from "@/lib/sample-data"
import { bookings } from "@/lib/store"
import { nightBetween } from "@/lib/dates"

export const metadata = {
    title: "Booking"
}
export default function Page() {
    return (
        <main>
            <h1>Booking</h1>
            {bookings.length === 0 ? (<p>No bookings yet</p>) : (
                <ul>
                    {bookings.map((booking) => (
                        <li key={booking.id}>
                            name: {booking.guestName }, 
                             - room: { rooms.find((room)=> room.id === booking.roomId)?.name}, -
                            {booking.startAt}  to {booking.endsAt},
                            -ststue: {booking.status},
                            -nights between: {nightBetween(new Date(booking.startAt), new Date (booking.endsAt))}
                        </li>
                    ))}
                </ul>
            )}
            {/* <p>No bookings yet.</p> */}
        </main>
    )
}