
interface SideBarProps {
    children?: React.ReactNode;
}
export default function SideBar({children}:SideBarProps){
    return(
        <aside className="w-1/5 h-full  bg-gray-light">
            {children}
        </aside>
    )

}