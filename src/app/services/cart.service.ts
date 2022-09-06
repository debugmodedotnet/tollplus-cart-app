import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICart } from '../entities/cart.entity';
import { IProduct } from '../entities/product.entity';
import { ProductService } from './product.service';






@Injectable({
  providedIn: 'root'
})
export class CartService {
 Cart : ICart[] =[]; 

 Cart$ : BehaviorSubject<ICart[]>; 
  constructor(private pservice : ProductService) {
    this.Cart$ = new BehaviorSubject<ICart[]>(this.Cart);
   }

   removeFromCart(p:IProduct){

    let cIndex = this.Cart.findIndex(c=> c.Product.Id == p.Id); 
    if(cIndex != -1){
      if(this.Cart[cIndex].OrderQuantity == 1){
        console.log("a");
         this.Cart.splice(cIndex,1);
      }
      else {
        this.Cart[cIndex].OrderQuantity = this.Cart[cIndex].OrderQuantity - 1; 
        this.Cart[cIndex].TotalPrice = this.Cart[cIndex].OrderQuantity * p.Price; 
      }
    }

      this.pservice.updateProduct(p,1);
      console.log(this.Cart);
      this.Cart$.next(this.Cart);
   }
   addToCart(p:IProduct){

    let itemToAdd = {
        Product : p,
        OrderQuantity : 1, 
        TotalPrice : p.Price
    }

    let cIndex = this.Cart.findIndex(c=> c.Product.Id == p.Id); 
    if(cIndex == -1){
      this.Cart.push(
        itemToAdd
      )
    }
    else {
      this.Cart[cIndex].OrderQuantity = this.Cart[cIndex].OrderQuantity + 1; 
      this.Cart[cIndex].TotalPrice = this.Cart[cIndex].OrderQuantity * p.Price; 
    }

     this.pservice.updateProduct(p,0);
      this.Cart$.next(this.Cart);
   }
}
