import { AdminProductsDto } from "@/app/management-products/Dto/adminProducts";
import { IconTrash } from "@tabler/icons-react";

interface onClick {
    onClick: (id:number)=> void;
}

export default function Row(props:AdminProductsDto & onClick){
    return(
        <tbody>
            <tr className="border-1 rounded-2xl border-gray-100">
                <td className="p-4 border-b border-gray-100">
                    <p className="font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                        {props.quantity}
                    </p>
                </td>

                <td className="p-4 border-b border-gray-100">
                    <p className="font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                        {props.name}
                    </p>
                </td>

                <td className="p-4 border-b border-gray-100">
                    <span className="font-sans flex gap-2 text-sm antialiased items-center rounded-xl font-medium leading-normal text-blue-gray-900">
                        {props.price}
                        <h1 className="text-green-900 bg-green-100 rounded-xl px-2 font-mono">R$</h1>
                    </span>
                </td>
                
                <td className="p-4 border-b border-gray-100">
                    <p className="font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                        {props.description}
                    </p>
                </td>
                
                <td className="p-4 border-b border-gray-100">
                    <p className="font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                        {props.creatorId}
                    </p>
                </td>
                
                <td className="p-4 border-b border-gray-100">
                    <p className="flex items-center justify-between  font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                    {props.productType}
                    <button onClick={()=> props.onClick(props.id)} className="bg-red-500 p-1 rounded-sm cursor-pointer">
                        <IconTrash color="white" width={20} height={20}/>
                    </button>
                    </p>
                </td>
                
            </tr>
        </tbody>
    )

}