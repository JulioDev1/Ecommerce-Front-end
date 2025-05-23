import { IconPlus } from "@tabler/icons-react";
import SideBar from "../sibe-bar/sideBar";
import Container from "../conteiner/conteiner";
import Content from "../content/content";


export default function ManagementProductContainer({
    children}
:Readonly<{children: React.ReactNode}>){

    return (
        <Container>
            <Content className="flex-row">
                <SideBar/>
                <div className="flex flex-col items-center gap-4 p-5 w-full">
                    <div className="w-full flex flex-row items-center justify-between px">
                        <h3 className="text-gray-800 text-xl font-semibold sm:text-2xl">
                            Seus Produtos
                        </h3>
                        <button className="bg-purple-500 text-white font-semibold cursor-pointer text-sm p-2 rounded-lg flex items-center ">
                            Novo Produto 
                            <IconPlus width={20} widths={20} stroke={2}/>
                        </button>
                    </div>
                    {children}
                </div>
            </Content>
        </Container>
    );
}