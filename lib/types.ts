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
}