import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  checkoutForm!: FormGroup;

  // Demo product (later you can connect CartService)
  product = {
    name: 'Sample Product',
    price: 500,
    quantity: 1
  };

  deliveryCharge = 50;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.checkoutForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pincode: ['', Validators.required],
      paymentMethod: ['cod', Validators.required]
    });
  }

  get totalAmount() {
    return (this.product.price * this.product.quantity) + this.deliveryCharge;
  }

 placeOrder() {

  const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');

  const orderData = {
    orderId: 'ORD' + Math.floor(Math.random() * 100000),
    orderDate: new Date().toLocaleDateString(),
    items: cartItems,
    address: this.checkoutForm.value,
    total: this.totalAmount
  };

  sessionStorage.setItem('order', JSON.stringify(orderData));

  localStorage.removeItem('cart');

  this.router.navigate(['/order-confirmation']);
}

}