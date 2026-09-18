export interface Room {
  id: string;
  name: string;
  capacity: number;
}

export interface Booking {
  id: string;
  roomId: string;
  guestName: string;
  startAt: string;
  endsAt: string;
  status: BookingStatus;
}

function desccribe(r: BookingResult):string{
    if (r.ok){
        return `Booked ${r.booking.guestName}`;
    }
    return  `Failed: ${Object.values(r.errors).join(", ")}`
}
export type BookingResult = | { ok: true; booking: Booking} | 
{ok:false; errors: BookingErrors; };


export type BookingStatus = "pending" | "confirmed" | "cancelled";

//  no id or status
export type BookingErrors = Partial<Record<keyof NewBooking, string>>;

export type NewBooking = Omit<Booking, "id" | "status">;

export type BookingUpgrade = Partial<NewBooking>;

export type RoomType = "meeting" | "desk" | "studio";
