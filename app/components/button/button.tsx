import {button} from "./interfaces/button";

export default function Button(props:button){
    return(
        <button className="bg-blue-500 hover:bg-blue-700 cursor-pointer text-white rounded-md font-bold py-2 px-4">
            {props.text}
        </button>
    )
}