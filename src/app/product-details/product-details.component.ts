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
 

  constructor(
    private route : ActivatedRoute ,
    private productService :ProductService,
    private cartService : CartService,
    private router :Router
  ){}

ngOnInit(){
  const id = Number(this.route.snapshot.paramMap.get('id'));

  this.productService.getProductById(id).subscribe({
  next: (res)=>{
    this.product = res;
    this.loading = false;
  },
  error: ()=>{
    alert('Product not found');
    this.router.navigate(['/products']);
  }
});

}

addToCart(){
  this.cartService.addToCart(this.product);
  alert('Product added to cart');
}

buyNow(){
  localStorage.setItem('buyNow' ,JSON.stringify(this.product));
  this.router.navigate(['/order-confirmation']);
}

onImgError(event:Event){
  (event.target as HTMLImageElement).src = 'images/t2.jpg';
}

}
