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
    image:string,
    Description:string,
    id:number,
    quantity:undefined | number,
    productId:undefined|number
  }
export interface cart{
    name:string,
    price:number,
    category:string,
    color:string,
    Description:string,
    image:string,
    id:number | undefined,
    quantity:undefined | number,
    userId:number,
    productId:number,
}
export interface priceSummary{
    price:number,
    discount:number,
    tax:number,
    delivery:number,
    total:number
  }