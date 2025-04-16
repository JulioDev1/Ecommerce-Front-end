import { input } from "./interfaces/input";

export default function Input(props:input){
    return(
        <input  
            className="border rounded-md h-10 pl-2 border-gray-300" 
            type={props.type}
            name={props.name} 
            placeholder={props.placeholder} 
        />
    )

}