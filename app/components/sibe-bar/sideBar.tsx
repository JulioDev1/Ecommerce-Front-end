import Image from "next/image";
import Logo from "../../../public/logo.png";

export default function SideBar(){
    return(
        <div className="w-1/5  bg-white border-1 border-gray-200">
            <header className="flex flex-row items-center gap-2 px-2 py-4  border-1 border-gray-200">
                <Image
                    src={Logo}
                    alt="logo"
                    width={30}
                    height={30}
                />
                <h1 className="text-2xl size-fit font-medium">Ecommerce</h1>
            </header>
        </div>
    )

}