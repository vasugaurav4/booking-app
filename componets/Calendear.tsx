"use client";
import { addDays, format, isSameDay } from "date-fns";

interface CalendarProps {
  value: Date | null;
  onChange: (d: Date) => void;
}

export default function Calendar({ value, onChange }: CalendarProps) {
  const today = new Date();
  const days = Array.from({ length: 14 }, (_, i) => addDays(today, i));

  return (
    <div className="grid grid-cols-7 gap-2">
      {days.map((day) => {
        const selected = value !== null && isSameDay(day, value);
        return (
          <button
            key={day.toISOString()}
            onClick={() => onChange(day)}
            className={selected
              ? "rounded border-2 border-blue-500 p-2"
              : "rounded border p-2"}
          >
            {format(day, "EEE d")}
          </button>
        );
      })}
    </div>
  );
}