// import { Room } from "@/lib/types"
import type { Room, RoomType } from "@/lib/generated/prisma/client";
import BookButton from "./BookButton";
import Link from "next/link";
// import { rooms } from "@/lib/sample-data";

interface RoomCardProps {
    room: Room;
}

const typeBadges: Record<RoomType, { label: string; badge: string; icon: string }> = {
    MEETING: { label: "Meeting Room", badge: "bg-blue-50 text-blue-700 border-blue-200", icon: "💼" },
    DESK: { label: "Dedicated Desk", badge: "bg-emerald-50 text-emerald-700 border-emerald-200", icon: "💻" },
    STUDIO: { label: "Creative Studio", badge: "bg-purple-50 text-purple-700 border-purple-200", icon: "🎨" },
};

export default function RoomCard({ room }: RoomCardProps) {
    const meta = typeBadges[room.type];
    return (
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border  ${meta.badge}`}>{meta.icon} {meta.label}</span>
                    <span className="text-xs text-gray-500 font-medium">👥 Up to {room.capacity} people</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-1">{room.name}</h3>
                <p className="text-sm text-gray-500">Pros of the room</p>
            </div>


            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-x font-semibold text-emerald-600">Available</span>
                <Link href={`/bookings/new?roomId=${room.id}`}
                    className="px-4 py-2 text-sm font-medium text-white bg-indigo-600
                     hover:bg-indigo-700 rounded-lg transition-color">Book Room &rarr;</Link>
            </div>
        </div>
    );
}