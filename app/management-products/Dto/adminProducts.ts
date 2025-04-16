export class AdminProductsDto{

    id:number
    quantity:number
    name:string
    price:number
    description:string
    creatorId:number
    productType:string
    createAt:string

    constructor(id:number,quantity:number,name:string,price:number,description:string,creatorId:number,productType:string,createAt:string){
        this.id=id
        this.quantity=quantity
        this.name=name
        this.price=price
        this.description=description
        this.creatorId=creatorId
        this.productType=productType
        this.createAt=createAt
    }
}
