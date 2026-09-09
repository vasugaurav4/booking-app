import { Booking } from "@/lib/types";

export function nightBetween(
    start: Date, end: Date
): number {
    const ms = end.getTime() - start.getTime()
    return Math.round(ms / 86_400_000);
}

export function isSameDay(
    a: Date, b: Date
): boolean {
    return a.toDateString() == b.toDateString();
}

export function overlaps(a: Booking, b: Booking): boolean {
    const aStart = new Date(a.startAt);
    const aEnd = new Date(b.endsAt);
    const bStart = new Date(b.startAt)
    const bEnd = new Date(b.endsAt)

    return aStart < bEnd && bStart < aEnd;
}
