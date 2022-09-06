import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../entities/product.entity';

let Products = [
  {
    Id : "1",
    Title:"Books",
    Price : 200,
    inStockQuantity : 30,
    Color : "Red"
  },
  {
    Id : "2",
    Title:"English Books",
    Price : 100,
    inStockQuantity : 40,
    Color : "Blue"
  },
  {
    Id : "3",
    Title:"Math Books",
    Price : 1200,
    inStockQuantity : 130,
    Color : "Red"
  },
  {
    Id : "4",
    Title:"Pen",
    Price : 100,
    inStockQuantity : 50,
    Color : "Blue"
  },
  {
    Id : "5",
    Title:"Pencil",
    Price : 20,
    inStockQuantity : 50,
    Color : "Red"
  }
 ]


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  Products$ : BehaviorSubject<IProduct[]>; 
  constructor() {
    this.Products$ = new BehaviorSubject<IProduct[]>(Products);
   }

   updateProduct(p:IProduct,mode:number){

    let pIndex = Products.findIndex(c => c.Id == p.Id); 

    if( pIndex != -1){
      if(mode == 0){
        Products[pIndex].inStockQuantity = Products[pIndex].inStockQuantity - 1; 
      }
      else if(mode  == 1) {
        Products[pIndex].inStockQuantity = Products[pIndex].inStockQuantity + 1; 

      }
    }
      this.Products$.next(Products);  
   }

}
