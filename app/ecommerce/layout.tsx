'use client'
import { IconBasket, IconShoppingCart } from "@tabler/icons-react";
import Container from "../components/conteiner/conteiner";
import Content from "../components/content/content";
import ItemNav from "../components/itemNav/item-nav";
import SideBar from "../components/sibe-bar/sideBar";
import Navbar from "../components/navbar/navbar";
import ProductSection from "../components/product-section/product-section";
import ProductContainer from "../components/product-container/product-conteiner";
import useSWR from "swr";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import GetUserCart from "../services/cart";
export default function EcommerceLayout({children}:{
    children:React.ReactNode    
}){
    const token = useSelector((state:RootState)=> state.auth.token);
    const { data, error } = useSWR(token ? ["get-user-cart", token]: null, ()=> GetUserCart(token as string));

    return (
        <Container>
            <Content className="flex-col">
                <Navbar/>
                <ProductSection>
                    <SideBar>
                        <ItemNav
                            icon={<IconShoppingCart id={String(data)} size={23}/>}
                            link="/ecommerce/user-cart"
                            text="Carrinho"
                        />
                        <ItemNav
                            icon={<IconBasket size={23}/>}
                            link="/ecommerce/all-products"
                            text="Todos os Produtos"
                        />
                    </SideBar>
                    <ProductContainer>
                        {children}
                    </ProductContainer>
                </ProductSection>
            </Content>
        </Container>
    )
}