interface ContainerProps {
    children: React.ReactNode
}
export default function Container({children}:ContainerProps){
    return (
        <section className="h-screen bg-white">
            {children}
        </section>
    )
}