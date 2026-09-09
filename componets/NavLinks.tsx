"use client"

import Link from "next/link";
import { usePathname } from "next/navigation"

interface NavLinkProps{
    href: string;
    children: React.ReactNode;
}

export default function NavLink({href, children}: NavLinkProps){
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link href={href} aria-current={isActive ? "page" : undefined}
        className={isActive? "font-bold underline" : "text-gray-500"}>
            {children}
        </Link>
    )
}