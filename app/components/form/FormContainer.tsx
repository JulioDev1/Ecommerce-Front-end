export default function FormContainer({children} : Readonly<{children: React.ReactNode}>){
    return (
        <div className="flex flex-col items-center justify-center h-screen p-5">
            {children}
        </div>
    )
}