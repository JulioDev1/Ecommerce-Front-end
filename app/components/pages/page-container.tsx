import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { ReactNode } from "react";

interface PageContainerProps {
    children: ReactNode;
    prev: () => void;
    next: () => void;   
}

export default function PageContainer({children, prev, next}: PageContainerProps){
    return (
        <div  className="w-full h-fit flex justify-center items-center gap-x-3">
            <button onClick={prev} className="border-1 size-7 rounded-lg flex justify-center items-center border-gray-200 cursor-pointer">
                <IconChevronLeft/>
            </button>
            {children}
            <button onClick={next} className="border-1 size-7 rounded-lg flex justify-center items-center border-gray-200 cursor-pointer">
                <IconChevronRight/>
            </button>
        </div>
    )

}