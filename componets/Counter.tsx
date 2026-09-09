"use client"
import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);

    return (
        <div>
            <h3>count: {count}</h3>
            <button onClick={()=> setCount(count + 1)}>Click btn</button>
            <button onClick={()=> setCount(0)}>Rest count</button>
        </div>
    )
}