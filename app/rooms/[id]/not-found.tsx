import Link from "next/link";

export default function NotFound(){
    return(
        <main>
            <h1>Rooms Not Found</h1>
            < Link href={"/rooms"}>Rooms</Link>
        </main>
    )
}