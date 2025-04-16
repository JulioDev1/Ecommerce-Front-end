
import { ProductResponse } from "../management-products/Dto/ProductResponse"
import { url } from "./url"

export default async function GetAdminProducts(token:string, page:number):Promise<ProductResponse>{

    const Headers: HeadersInit = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Content-Type": "application/json", 
        "Authorization":`Bearer ${token}`
    }

    const response = await fetch(`${url}/api/Product/get-admin-products?PageSize=${10}&PageNumber=${page}`, {
        method: 'GET',
        headers: Headers
    })

    const data = await response.json() as ProductResponse
    console.log(data)
    return data;
}