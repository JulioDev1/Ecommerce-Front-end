import { ProductInCart } from "./dto/ProductInCart";
import { url } from "./url"

export default async function GetUserCart(token:string){
    const Headers: HeadersInit = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Content-Type": "application/json", 
        "Authorization":`Bearer ${token}`
    }
    
    const response = await fetch(`${url}/api/Cart/get-user-cart`, {
        method: 'GET',
        headers: Headers
    })
    const data = await response.json(); 

    console.log(data);
    return await response.json();   
}

export async function GetProductInCart(token:string): Promise<ProductInCart[]>{
    const Headers: HeadersInit = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Content-Type": "application/json",
        "Authorization":`Bearer ${token}`
    }

    const response = await fetch(`${url}/api/Cart/get-product-in-cart?PageSize=${10}&PageNumber=${1}`, {
        method: 'GET',
        headers: Headers
    })
    const data = await response.json();

    return data;

}