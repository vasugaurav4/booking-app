import type { Booking, Room } from "@/lib/generated/prisma/browser";
import { nightBetween } from "@/lib/dates";
import { CancelBooking } from "@/lib/action";

// Each booking object now includes its related Room!
type BookingWithRoom = Booking & { room: Room };

interface BookingsViewProps {
  bookings: BookingWithRoom[];
}

export default function BookingsView({ bookings }: BookingsViewProps) {
  if (bookings.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
        <p className="text-gray-500">No bookings yet.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {bookings.map((booking) => {
        const nights = nightBetween(new Date(booking.stratAt), new Date(booking.endDate));
        const checkIn = new Date(booking.stratAt).toLocaleDateString();
        const checkOut = new Date(booking.endDate).toLocaleDateString();

        return (
          <div
            key={booking.id}
            className="p-5 bg-white rounded-xl border border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm"
          >
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-gray-900 text-lg">
                  {booking.guestName}
                </span>
                <span
                  className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${
                    booking.status === "CONFIRMED"
                      ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                      : "bg-slate-100 text-slate-600 border-slate-200"
                  }`}
                >
                  {booking.status}
                </span>
              </div>
              <p className="text-sm font-medium text-indigo-600">
                {booking.room.name}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                📅 {checkIn} &rarr; {checkOut} ({nights} {nights === 1 ? "night" : "nights"})
              </p>
            </div>
            {booking.status !== "CANCELLED" && (
                <form action={CancelBooking}>
                <input type="hidden" name="bookingId" value={booking.id} />
                <button type="submit" className="px-3">Cancel</button>
            </form>
            )}
          


          </div>
        );
      })}
    </div>
  );
}