export interface Room{
    id: string;
    name: string;
    capacity: number;
}

export interface Booking{
    id: string;
    roomId:string;
    guestName: string;
    stertAt: Date;
    endsAt: Date;
    status: BookingStatus;
    
}

export type BookingStatus =
 "pending" 
| "confirmed" |
 "cancelled";

//  no id or status
 export type NewBooking = Omit<Booking, "id" | "status">;


 export type BookingUpgrade = 
 Partial<NewBooking>;