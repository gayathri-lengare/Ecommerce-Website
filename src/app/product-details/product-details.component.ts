import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../Services/product.service';
import { CartService } from '../Services/cart.service';


@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  standalone:true,
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  product : any;
  loading = true;
  selectedImage: string | null = null;
  cartItems: any[] | undefined;

 

  constructor(
    private route : ActivatedRoute ,
    private productService :ProductService,
    private cartService : CartService,
    private router :Router
  ){}

ngOnInit() {
  const nav = this.router.getCurrentNavigation();
  const buyNowProduct = nav?.extras.state?.['buyNowProduct'];

  if (buyNowProduct) {
    this.cartItems = [{ ...buyNowProduct, quantity: 1 }];
  } else {
    this.cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
  }

}

addToCart(){
  this.cartService.addToCart(this.product);
  alert('Product added to cart');
}
buyNow(product: any) {

  // Clear previous cart  
  localStorage.removeItem('cart');

  // Add only this product
  const cartItem = {
    ...product,
    quantity: 1
  };

  localStorage.setItem('cart', JSON.stringify([cartItem]));

  // Go to checkout
  this.router.navigate(['/checkout']);
}

onImgError(event:Event){
  (event.target as HTMLImageElement).src = 'images/t2.jpg';
}

}
