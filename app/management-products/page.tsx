'use client'
import ManagementProductContainer from "../components/management-product-admin/managementProductContainer";
import THeader from "../components/table-products/THeader";
import Table from "../components/table-products/table";
import Row from "../components/table-products/Row";
import {DeleteProduct, GetAdminProducts} from "../services/products";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import useSWR, { mutate } from "swr";
import PageContainer from "../components/pages/page-container";
import PageNumber from "../components/pages/pageNumber";
import { useState } from "react";

export default function Page(){

    const token = useSelector((state:RootState)=> state.auth.token);
    const  [selectedPage, setSelectedPage] = useState<number>(1);
    const {data, error} = useSWR(token ? ['get-admin-products', token, selectedPage] : null,()=> GetAdminProducts(token as string, selectedPage))
        
    if(!data) return <div>loading...</div>
    if(error) return <div>error</div>

    const DoPages = (items:number) =>{
        const pages = Math.ceil(items / 10);
        return Array(pages).fill(1).map((_,i)=> i+1);
    }
    
    const handlePageChange = async (page:number) => {
        setSelectedPage(page);
        await GetAdminProducts(token as string, page);
        console.log(page);
    }

    const advancePage = async () => {
        if(selectedPage < DoPages(data.totalItem).length){
            setSelectedPage(selectedPage + 1);
        }
    }

    const prevPage = async () => {
        if(selectedPage > 1){
            setSelectedPage(selectedPage - 1);
        }
    }

    const deleteProduct = async (id:number) => {
        await DeleteProduct(token as string, id);   
        mutate(['get-admin-products', token, selectedPage])
    }

    return (
        <ManagementProductContainer>
            <Table>
                <THeader/>
                {data.response.map((product) => (
                    <Row onClick={() => deleteProduct(product.id )} key={product.id} {...product}/>
                ))}
            </Table>
            <PageContainer next={advancePage} prev={prevPage}>
                {DoPages(data.totalItem).map((pageNumber, i) => (
                    <PageNumber 
                        selected={ selectedPage === pageNumber ? 'bg-black text-white' : 'bg-white text-black' } 
                        onClick={()=> handlePageChange(pageNumber)} 
                        key={i} 
                        pageIndexes={pageNumber}
                    />
                ))}
            </PageContainer>
        </ManagementProductContainer>
    )
}