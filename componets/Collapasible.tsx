"use client"

import React, { useState } from "react";

export default function Collapasible(
    {children}: {children: React.ReactNode}
){
    const [open, setOpen] = useState(false)
    return(
        <div>
            <button onClick={()=> setOpen(!open)}>
                Toggle
            </button>
            {open && children}
        </div>
    )

}