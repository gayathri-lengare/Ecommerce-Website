import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  addToCart(product:any)
  {
    let cart = JSON.parse(localStorage.getItem('cart')||'[]');
    cart.push(product);
    localStorage.setItem('cart',JSON.stringify(cart));
  }

  getCart(){
    return JSON.parse(localStorage.getItem('cart') || '[]');

  }

  removeItem(index:number)
  {
    const cart = this.getCart();
    cart.splice(index,1);
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  clearCart(){
    localStorage.removeItem('cart');
  }

   
}
