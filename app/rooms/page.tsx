export const metadata = {
    title: "rooms"
}
import RoomList from "@/componets/RoomList";
import { rooms } from "@/lib/sample-data";

export default async function Page(){
    await new Promise((resolve)=> 
        setTimeout(resolve,2000))
    return (
        <main>
            <h1>
                Rooms
            </h1>
            <RoomList rooms={rooms} />
        </main>
    );
}