'use client';
import Button from "../components/button/button"
import Input from "../components/inputs/input"
import Form from "../components/form/form"
import FormContainer from "../components/form/FormContainer"
import Authenticate from "../services/authenticate"
import { LoginDto } from "./loginDto"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../store/authSlice";
import { useRouter } from "next/navigation";
import { RootState } from "../store/store";
import { useEffect } from "react";

export default function Page(){

    const dispatch = useDispatch();
    const token = useSelector((state:RootState)=> state.auth.token)
    const router = useRouter();


    if(token){
        router.push('/management-products')
    }
    
    async function LoginSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data:LoginDto = {
            email: formData.get('email') as string,
            password: formData.get('password') as string
        }
        const response =  await Authenticate(data);
        
        if(response){
            dispatch(login(response.token))
            router.push('/management-products');
        }
        
    }

    return (
        <FormContainer>
            <Form onSubmit={LoginSubmit}>
                <Input type="text" name="email"  placeholder="Email"/>
                <Input type="password" name="password" placeholder="Password" />
                <Button text="Submit"/>
            </Form>
        </FormContainer>
)
}