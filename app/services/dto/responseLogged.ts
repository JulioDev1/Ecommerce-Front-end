enum typeUser{
    user = 0, 
    admin = 1
} 


export class ResponseLogged {
    name:string;
    email:string;
    role: typeUser;
    
    constructor(name: string, email: string, role: typeUser) {
        this.name = name;
        this.email = email;
        this.role = role;
    }
}