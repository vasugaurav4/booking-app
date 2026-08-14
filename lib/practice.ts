const room:{
    name: string;
    capacity: number;
}={
    name:"Room ",
    capacity:12
};
console.log(room)

import { Booking, BookingStatus } from "./types";

function statusLable(s:BookingStatus):string{
    if (s === "pending") return "Awating approval";
    if (s === "confirmed") return "confirmed";
    return "canceled";
}

function cancel(b:Booking): Booking{
    if (b.status === "cancelled"){
        throw new Error("Booking is already canceled")
    }
    return {...b,                // // copies all properties
        status: "cancelled"     // // overwrites status
    } 
}

export type BookingResult = { ok: true; boking: Booking} | 
{ok:false; reason: string};


function desccribe(r: BookingResult):string{
    if (r.ok){
        return `Booked $r.booking.guestName`;
    }
    return  `Failed: ${r.reason}`
}
