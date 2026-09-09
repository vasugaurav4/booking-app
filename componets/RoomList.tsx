"use client"

import { Room } from "@/lib/types"
import RoomCard from "./RoomCard"
import { useState } from "react"

interface RoomListProps {
    rooms: Room[]
}

export default function RoomList ({rooms}: RoomListProps){
    const [minCapacity, setMinCapacity] = useState(0)
    const visible = rooms.filter((room)=> room.capacity > minCapacity);

    return(
        <div>
            <label>
                Minimum capacity: {minCapacity}
                <input type="range" min={0} max={20} value={minCapacity}
                onChange={(e)=>
                    setMinCapacity(Number(e.target.value))} />
            </label>

            <p>Showing {visible.length} of {rooms.length}</p>
            <ul>
                {visible.map((room)=> (
                    <li key={room.id}><RoomCard room={room}/></li>
                ))}
            </ul>
        </div>
    )
}