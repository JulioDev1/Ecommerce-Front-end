import React from "react";

interface ItemNavProps{
    icon: React.ReactNode;
    link: string;
    text:string
}
export default function ItemNav(props: ItemNavProps){
    return(
        <div className="flex flex-row items-center gap-2 px-2 py-4">
            {props.icon}
            <a href={props.link}>
                <span className="text-sm size-9 font-normal">{props.text}</span>
            </a>
        </div>
    )

}