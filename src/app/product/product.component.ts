import { Component, OnInit } from '@angular/core';
import { IProduct } from '../entities/product.entity';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products : IProduct[] = []; 
  constructor(private pservice : ProductService, private cartService : CartService) { }

  ngOnInit(): void {
    this.pservice.Products$.subscribe((data : IProduct[])=>{
       this.products = data; 
    })
  }

  addToCart(p:IProduct):void{
    this.cartService.addToCart(p);
  }

}
