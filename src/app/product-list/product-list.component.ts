import { Component } from '@angular/core';
import { ProductService } from '../Services/product.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-product-list',
  standalone: true,                         
  imports: [CommonModule, RouterLink],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],   // ⭐ plural + array
})
export class ProductListComponent {

  products: any[] = [];

  constructor(
    private productServices: ProductService,
    private cartService: CartService
  ) {}

  // ✅ Add To Cart
  addToCart(product: any) {
    this.cartService.addToCart(product);
    alert('product is added to cart');
  }

  // ✅ API Call
  ngOnInit() {
    this.productServices.getProducts().subscribe((res: any[]) => {
      this.products = res;
      console.log(this.products);
    });
  }

  // ✅ Image Error Fallback
  onImgError(event: Event) {
    (event.target as HTMLImageElement).src = 'images/t1.jpg';
  }

}
