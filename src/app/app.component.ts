import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { ICart } from './entities/cart.entity';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Cart App';
 isCartDisplayed = false; 
  constructor(private cartService : CartService){

  }
  ngOnInit(): void {
    this.cartService.Cart$.subscribe((data : ICart[])=>{
          if(data.length > 0){
            this.isCartDisplayed = true; 
          }
          else {
            this.isCartDisplayed = false; 
          }
    })
  }
}
