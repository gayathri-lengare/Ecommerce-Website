import { Component } from '@angular/core';
import { CartService } from '../Services/cart.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone:true,
  imports: [CommonModule,RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  cartItems:any [] = [];
  total = 0;

  constructor(private cartService: CartService)
  { }

  ngOnInit(){
    this.loadCart();
  }

  loadCart(){
    this.cartItems = this.cartService.getCart()
    this.calculateTotal();
  }

  calculateTotal(){
    this.total = this.cartItems.reduce((sum,item) => sum + item.price,0
);
  }

  removeItem(index : number){
    this.cartService.removeItem(index);
    this.loadCart();
  }


}
