export interface SignUp{
    name:string,
    password:string,
    emial:string
}
export interface login{
    email:string,
    password:string
}
export interface product{
    name:string,
    price:number,
    category:string,
    color:string,
    Description:string,
    image:string,
    id:number,
    quantity:undefined | number
}