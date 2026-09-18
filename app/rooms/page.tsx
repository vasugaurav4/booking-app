export const metadata = {
    title: "rooms"
}
import { prisma } from "@/lib/prisma"


import RoomList from "@/componets/RoomList";
// import { rooms } from "@/lib/sample-data";

export default async function Page(){
    const rooms = await prisma.room.findMany();
        return (
        <main>
            <h1>
                Rooms
            </h1>
            <RoomList rooms={rooms} />
        </main>
    );
}