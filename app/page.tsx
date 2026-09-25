import { prisma } from "@/lib/prisma";
import RoomCard from "@/componets/RoomCard";
import Link from "next/link";

export default async function HomePage() {
  // Direct database query on the server!
  const rooms = await prisma.room.findMany({
    orderBy: { name: "asc" },
  });

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Available Workspaces
          </h1>
          <p className="text-gray-500 mt-1">Select a meeting, room, desk, or studio for your team</p>
        </div>
        <Link href="/bookings/new" className="px-4 py-2 text-sm font-semibold rounded-lg bg-indigo-50 text-indigo-700 hover:bg-indigo-100 transition-colors"> Quick Booking</Link>
      </div>

      {rooms.length === 0 ? (<div className="text-center py-16 bg-white rounded-xl border border-gray-200">
        <p className="text-gray-500">
          No rooms found. Please run seed command
        </p>
      </div>) : (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((i) => (
          <RoomCard key={i.id} room={i} />
        ))}
      </div>)}
    </div>
  );
}