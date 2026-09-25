// import { listenerCount } from "process";
import { prisma } from "@/lib/prisma";
export default async function getRoomList(){
   const rooms = await prisma.room.findMany({
    orderBy: {
        name: "asc",
    },
   });
    return rooms;    
    
}
