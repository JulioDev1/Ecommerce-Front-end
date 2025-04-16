import { IForms } from "./interfaces/IForms";

export default function Form({children, onSubmit}: IForms){

    return (
        <form onSubmit={onSubmit} className="flex flex-col gap-5 max-w-3xs w-3xs">
            {children}
        </form>
    )
}