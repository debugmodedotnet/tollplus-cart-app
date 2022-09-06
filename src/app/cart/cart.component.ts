import { Component, OnInit } from '@angular/core';
import { ICart } from '../entities/cart.entity';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  title = "Your Cart";
  carts : ICart[] =[]; 
  constructor(private cartservice : CartService) { }

  ngOnInit(): void {
   this.cartservice.Cart$.subscribe((data:ICart[])=>{
      this.carts = data; 
   })
  }

  removeFromCart(c:ICart){
    this.cartservice.removeFromCart(c.Product)
  }

}
