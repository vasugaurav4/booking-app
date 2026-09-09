"use client"
interface BookButonProps {
    roomName: string;
}
export default function BookButton(
    {roomName}: BookButonProps){
    return (
        <div>
            <button onClick={()=> alert(`Booking ${roomName}` )}> Book</button>
        </div>
    );

}