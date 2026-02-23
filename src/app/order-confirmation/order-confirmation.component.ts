import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-confirmation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent {

  order: any;

  constructor(private router: Router) {
    this.loadOrder();
  }

  loadOrder() {
    this.order = JSON.parse(sessionStorage.getItem('order') || 'null');
  }

  continueShopping() {
    this.router.navigate(['/home']);
  }

  viewOrders() {
    this.router.navigate(['/orders']);
  }

}