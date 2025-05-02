interface ProductContainerProps{
    children: React.ReactNode;

}
export default function ProductContainer({children}:ProductContainerProps){
    return (
        <div className="flex flex-col py-4 px-5 h-full w-full">
            {children}
        </div>
    );
}