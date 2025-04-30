import Image from "next/image";
import Logo from "../../../public/logo.png";

export default function Navbar(){
    return (
        <header className="flex flex-row items-center gap-2 px-2 py-3 border-1 border-gray-100">
            <Image
                src={Logo}
                alt="logo"
                width={25}
                height={25}
            />
            <h1 className="text-base size-fit font-medium">Ecommerce</h1>
        </header>
    )
}