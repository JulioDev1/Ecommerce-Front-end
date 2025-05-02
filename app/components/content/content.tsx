interface ContentProps{
    children: React.ReactNode;
    className?: string;
}
export default function Content(props:ContentProps){
    return (
        <div className={`flex h-full ${props.className}`}>
            {props.children}
        </div>
    )


}