// import { Room } from "@/lib/types"
import { Room } from "@/lib/generated/prisma/client";
import BookButton from "./BookButton";
import Link from "next/link";
// import { rooms } from "@/lib/sample-data";

interface RoomCardProps{
    room: Room;
}

export default function RoomCard({room}: RoomCardProps)
{
    return(
    <div>
        <p>Browse every space you can book.</p>
        <Link href={`/rooms/${room.id}`}>
            <h2>id: {room.id}</h2>
            <h3>room: {room.name}</h3>
        </Link>
        <p>Capacity: {room.capacity}</p>
        <BookButton roomName={room.name} />
    </div>
    )
}