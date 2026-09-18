import { listenerCount } from "process";
import { prisma } from "./prisma";
export default function getRoomList(){
    return (
        await prisma.room.findMany()
    )
}
