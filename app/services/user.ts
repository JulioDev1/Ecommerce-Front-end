import { ResponseLogged } from "./dto/responseLogged";
import { url } from "./url";

export default async function GetUserLogged(token:string):Promise<ResponseLogged>{
    const Headers: HeadersInit = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Content-Type": "application/json",     
        "Authorization":`Bearer ${token}`

    }
       
    const response = await fetch(`${url}/api/User/get-user`, {
        method: 'GET',
        headers:Headers,        
    })
    
    return await response.json();
}