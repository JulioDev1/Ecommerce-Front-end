interface ProductCardProps{
    cartId:number
    creatorId:number
    description:string
    name:string
    price:number
    productId:number
    quantity:number
    userId:number
}
export default function ProductCard(props:ProductCardProps){
    return(
        <div key={props.productId} className="flex max-w-md bg-white border-gray-light border-1  rounded-lg">
            <div className="w-1/3  h-1/3 bg-cover border-1 border-gray-light"></div>
            <div className="w-2/3 p-4 md:p-4">
                <span className="text-xl font-medium text-gray-800">{props.name}</span>
                <p className="mt-2 text-sm font-normal text-gray-600 dark:text-gray-400">{props.description}</p>
                <div className="flex justify-between mt-3 item-center">
                    <h1 className="text-lg font-semibold text-green-600 md:text-xl"> {props.price} R$</h1>
                    <button className="px-2 py-1 text-xs font-semibold text-white bg-purple-600 rounded">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}