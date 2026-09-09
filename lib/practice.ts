const room:{
    name: string;
    capacity: number;
}={
    name:"Room ",
    capacity:12
};
console.log(room)

import { Booking, BookingStatus, NewBooking } from "./types";

function statusLable(s:BookingStatus):string{
    if (s === "pending") return "Awating approval";
    if (s === "confirmed") return "confirmed";
    return "canceled";
}

function cancelBooking(b: Booking): Booking{
    if (b.status === "cancelled"){
        throw new Error("Booking is already canceled")
    }
    return {...b,                // // copies all properties
        status: "cancelled"     // // overwrites status
    } 
}
