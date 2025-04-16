import { AdminProductsDto } from "@/app/management-products/Dto/adminProducts";

export default function Row(props:AdminProductsDto){
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
                    <p className="font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                    {props.productType}
                    </p>
                </td>
                
            </tr>
        </tbody>
    )

}