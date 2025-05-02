'use client'
import ProductCard from "@/app/components/product-card/product-card";
import { GetProductInCart } from "@/app/services/cart";
import { ProductInCart } from "@/app/services/dto/ProductInCart";
import { RootState } from "@/app/store/store";
import { useSelector } from "react-redux";
import useSWR from "swr";

export default function Page(){
    const token = useSelector((state:RootState)=> state.auth.token);
    const { data, error } = useSWR<ProductInCart[]>(token ? ["get-product-in-cart", token]: null, ()=> GetProductInCart(token as string));
    console.log(data)
    if(error) return <div>error</div>

    return(
        <section>
            {data ? data.map((product)=>(
                <ProductCard 
                    name={product.name}  
                    price={product.price} 
                    description={product.description}  
                    quantity={product.quantity} 
                    userId={product.userId} 
                    cartId={product.cartId} 
                    creatorId={product.creatorId} 
                    productId={product.productId} 
                />
            )):(<div>loading</div>)}
        </section>
    );

}