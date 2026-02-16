import { Component } from '@angular/core';
import { CurrencyPipe } from '../Pipe/currency.pipe';

@Component({
  selector: 'app-order-confirmation',
  imports: [CurrencyPipe],
  templateUrl: './order-confirmation.component.html',
  styleUrl: './order-confirmation.component.css'
})
export class OrderConfirmationComponent {

}
