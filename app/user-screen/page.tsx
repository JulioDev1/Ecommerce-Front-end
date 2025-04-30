import { IconShoppingCart } from "@tabler/icons-react";
import Container from "../components/conteiner/conteiner";
import Content from "../components/content/content";
import ItemNav from "../components/itemNav/item-nav";
import SideBar from "../components/sibe-bar/sideBar";
import Navbar from "../components/navbar/navbar";

export default function Page(){
    return (
        <Container>
            <Content className="flex-col">
                <Navbar/>
                <SideBar>
                    <ItemNav
                        icon={<IconShoppingCart size={20}/>}
                        link="#"
                        text="Suas compras"
                    />
                </SideBar>
            </Content>
        </Container>
    )
}