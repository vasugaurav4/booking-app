import { rooms } from "@/lib/sample-data";
import { notFound } from "next/navigation";
// import { title } from "process";

export async function generateMetadata({params}:
     PageProps<"/rooms/[id]">){
       const {id} = await params;
       const room = rooms.find((room) => room.id === id)
       if (!room){
        return {title: "rooms not Found"};
       }
       return {
        title: room.name
       };
     }

export default async function Page({params}:
     PageProps<"/rooms/[id]">){
    const {id} = await params;
    const room = rooms.find((room) => room.id === id);
    if (!room){
        notFound();
    }
    return (
        <main>
            <h3>id: {id}</h3>
        </main>
    )
}

