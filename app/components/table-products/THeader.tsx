export default function THeader(){
    return (
        <>
            <thead className="border-b-2 rounded-t-lg bg-gray-100 border-gray-100">
                <tr>
                    <th className="px-2 py-2 text-sm rounded-tl-lg font-medium text-left rtl:text-right text-gray-700">
                        QUANTITY
                    </th>
                    <th className="px-2 py-2 text-sm font-medium text-left rtl:text-right text-gray-700">
                        NAME
                    </th>
                    <th className="px-2 py-2 text-sm font-medium text-left rtl:text-right text-gray-700">
                        PRICE
                    </th>
                    <th className="px-2 py-2 text-sm font-medium text-left rtl:text-right text-gray-700">
                        DESCRIPTION
                    </th>
                    <th className="px-2 py-2 text-sm font-medium text-left rtl:text-right text-gray-700">
                        CREATOR ID
                    </th>
                    <th className="px-2 py-2 text-sm rounded-tr-lg font-medium text-left rtl:text-right text-gray-700">
                        PRODUCT TYPE
                    </th>
                </tr>
            </thead>
        </>
    )
}