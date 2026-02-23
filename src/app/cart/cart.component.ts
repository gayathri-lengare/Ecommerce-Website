import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html'
})
export class CartComponent {

  cartItems: any[] = [];

  constructor(private router: Router) {
    this.loadCart();
  }

  loadCart() {
    this.cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
  }

  increase(item: any) {
    item.quantity++;
    this.updateCart();
  }

  decrease(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
      this.updateCart();
    }
  }

  remove(id: number) {
    this.cartItems = this.cartItems.filter(item => item.id !== id);
    this.updateCart();
  }

  updateCart() {
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
    this.loadCart();
  }

  get totalAmount() {
    return this.cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }

  proceedToCheckout() {
    if (this.cartItems.length === 0) {
      alert('Cart is empty!');
      return;
    }

    this.router.navigate(['/checkout']);
  }

}