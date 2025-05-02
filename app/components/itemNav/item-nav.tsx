'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface ItemNavProps{
    icon: React.ReactNode;
    link: string;
    text:string
}
export default function ItemNav(props: ItemNavProps){
    const pathname = usePathname();

    return(
        <div className={`flex flex-row items-center gap-2 px-2 py-2 ${props.link === pathname ? "bg-gray-light" :"bg-white"} transition duration-300 ease-in-out`}>
            {props.icon}
            <Link href={props.link}>
                <span className={`text-sm size-9 ${props.link === pathname ? "text-gray-950 font-bold" :"text-gray-700 font-normal"} transition duration-300 ease-in-out`}>
                    {props.text}
                </span>
            </Link>
        </div>
    )

}