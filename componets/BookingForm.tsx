"use client";
// import { Room } from "@/lib/types";
import { useActionState, useState } from "react";
import { nightBetween } from "@/lib/dates";
import { createBooking } from "@/lib/action";
import { Room } from "@/lib/generated/prisma/client";
// import { useSearchParams } from "next/navigation";
import { prisma } from "@/lib/prisma";

interface BookingFormProps {
  rooms: Room[];
  roomid: string;
}

export default function BookingForm({ rooms, roomid }: BookingFormProps) {
  const [guestName, setGuestName] = useState("");
  const [roomId, setRoomId] = useState(roomid ?? rooms[0].id);
  const [startAt, setStartAt] = useState("");
  const [endAt, setEndAt] = useState("");
  const nights =
    startAt && endAt ? nightBetween(new Date(startAt), new Date(endAt)) : 0;
  const canSubmit = guestName.trim() !== "" && nights > 0;
  const [result, formAction, isPending] = useActionState(createBooking, null);
  const errors = result && !result.ok ? result.errors : {};

  return (
    <div>
      <form action={formAction}>
        {errors.guestName && <p aria-live="polite">{errors.guestName}</p>}
        <label>name:</label>
        <input
          name="guestName"
          value={guestName}
          onChange={(e) => setGuestName(e.target.value)}
        />
        <br></br>

        <label>
          Select Room
          <select
            name="roomId"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
          >
            {rooms.map((room) => (
              <option key={room.id} value={room.id}>
                {room.name}
              </option>
            ))}
          </select>
          {errors.roomId && <p className="red" aria-live="polite">{errors.roomId}</p>}
        </label>
        <br></br>
        {errors.startAt && <p aria-live="polite">{errors.startAt}</p>}
        <label>
          Check In:
          <input
            type="date"
            name="startAt"
            value={startAt}
            onChange={(e) => setStartAt(e.target.value)}
          />
        </label>
        <br></br>
        {errors.endsAt && <p aria-live="polite">{errors.endsAt}</p>}
        <label>
          Check Out:
          <input
            type="date"
            name="endAt"
            value={endAt}
            onChange={(e) => setEndAt(e.target.value)}
          />
        </label>
        <br></br>
        <p>nights: {nights}</p>
        <p>guestname: {guestName}</p>

        <button disabled={isPending}>Book</button>
        <br></br>
      </form>
    </div>
  );
}
