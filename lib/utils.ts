export function first<T>(items: T[]) : T| undefined{
    return items[0];
}

export function second<T>(items: T[]): number {
    return items.length;
}