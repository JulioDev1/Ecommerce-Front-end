import { LoginDto } from "../auth/loginDto";
import { url } from "./url";

export default async function Authenticate (login:LoginDto){

    const Headers: HeadersInit = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Content-Type": "application/json",     
    }
   
    const response = await fetch(`${url}/auth`, {
        method: 'POST',
        headers:Headers,
        body: JSON.stringify(login)
    
    })
    console.log(response)
    return await response.json();
}