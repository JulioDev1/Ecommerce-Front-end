import React from "react"

interface productSectionProps{
    children:React.ReactNode
}
export default function ProductSection({children}:productSectionProps){
    return(
        <section className="flex flex-row h-full bg-gray-light">
            {children}
        </section>
    )
}