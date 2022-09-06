import { IProduct } from "./product.entity";

export interface ICart {
    Product : IProduct; 
    OrderQuantity : number; 
    TotalPrice: number; 
}