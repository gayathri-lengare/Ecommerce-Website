import { Routes } from '@angular/router';

export const routes: Routes = [
      {path : 'home', loadComponent :()=> import('../app/home/home.component').then(m => m.HomeComponent)},

    {path : '', loadComponent :()=> import('../app/home/home.component').then(m => m.HomeComponent)},
    {path : 'products', loadComponent :()=> import('../app/product-list/product-list.component').then(m => m.ProductListComponent)},
    {path:'products/:id',loadComponent : ()=> import('../app/product-details/product-details.component').then(m => m.ProductDetailsComponent)},
    {path : 'order-confirmation' , loadComponent :()=> import('../app/order-confirmation/order-confirmation.component'). then(m =>m.OrderConfirmationComponent)},
    {path:'cart' , loadComponent :() => import('../app/cart/cart.component').then(m => m.CartComponent)},
    {path: 'checkout',loadComponent :() =>import('../app/checkout/checkout.component').then(m => m.CheckoutComponent)},
    {path:'about',loadComponent :() => import('../app/about-us/about-us.component').then(m => m.AboutUsComponent)}
  ];
