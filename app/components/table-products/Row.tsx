import { AdminProductsDto } from "@/app/management-products/Dto/adminProducts";
import { IconTrash } from "@tabler/icons-react";

interface onClick {
    onClick: (id:number)=> void;
}

export default function Row(props:AdminProductsDto & onClick){
    return(
        <tbody>
            <tr>
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
                    <p className="font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                        {props.price}
                    </p>
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