import { Room } from "@/lib/types"

interface RoomCardProps{
    room: Room;
}

export default function RoomCard({room}: RoomCardProps)
{
    return <div>
    <h3>{room.name}</h3>;
    <p>Capacity: {room.capacity}</p>
    </div>
}

{/* <RoomCard room={someRoom} */}